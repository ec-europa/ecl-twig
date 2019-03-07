# Strip whitespaces

| Status        | accepted <!--becomes accepted, rejected or superseded later--> |
| ------------- | -------------------------------------------------------------- |
| **Proposed**  | 2019-03-01                                                     |
| **Accepted**  | 2019-03-06                                                     |
| **Driver**    | @yhuard                                                        |
| **Approver**  | @degliwe                                                       |
| **Consulted** | @degliwe, @emeryro, @kalinchernev, @planctus                   |
| **Informed**  | WAAT, contributors                                             |

## Decision

In order to avoid issues related to whitespaces, we should strip whitespaces between HTML tags by default and only add them when needed.

The Twig template is considered valid when the output it produces doesn't contain any whitespace:

- between 2 HTML tags
- between an HTML tag and its text content

unless the whitespace is explicitly required.

## Context

Whitespaces can be a source of problems in HTML when not handled correctly.

When we develop our components in the [main repository](https://github.com/ec-europa/europa-component-library), we use React, which [removes most of the whitespaces](https://reactjs.org/docs/jsx-in-depth.html#string-literals-1.). With such behavior from React, we don't think about whitespaces and how they can impact the end result after rendering.

However, with Twig, we need to be careful with whitespaces. When they appear [between inline block elements](https://css-tricks.com/fighting-the-space-between-inline-block-elements/) or around content, they alter the rendering.

For example,

```html
Hello <a href="#">world!</a>
```

Is not the same as:

```html
Hello
<a href="#">
  world!
</a>
```

## Consequences

### Expected output

The output of a Twig template should not contain whitespaces — unless explictly required — in the following cases:

- between adjacent tags

  ```html
  <!-- Do -->
  <span></span><span></span>

  <!-- Don't -->
  <span></span> <span></span>
  ```

- between a tag and its children

  ```html
  <!-- Do -->
  <span><span></span><span></span></span>

  <!-- Don't -->
  <span>
    <span></span>
    <span></span>
  </span>
  ```

- between a tag and its text content

  ```html
  <!-- Do -->
  <span>Hello world!</span>

  <!-- Don't -->
  <span>
    Hello world!
  </span>

  <!-- Don't -->
  <span> Hello world! </span>
  ```

Note: `<span />` is used in these examples, but it could be any other tag.

#### Real case examples

- Avoid newlines between HTML tags

  <!-- prettier-ignore -->
  ```html
  <!-- Do -->
  <blockquote class="ecl-blockquote"><p class="ecl-blockquote__body">An interconnected grid will help deliver the ultimate goal of the Energy Union, to ensure affordable, secure and sustainable energy, and also growth across the EU.</p><footer class="ecl-blockquote__attribution"><cite class="ecl-blockquote__author">President Juncker</cite></footer></blockquote>

  <!-- Don't -->
  <blockquote class="ecl-blockquote">
    <p class="ecl-blockquote__body">An interconnected grid will help deliver the ultimate goal of the Energy Union, to ensure affordable, secure and sustainable energy, and also growth across the EU.</p>
    <footer class="ecl-blockquote__attribution">
      <cite class="ecl-blockquote__author">President Juncker</cite>
    </footer>
  </blockquote>
  ```

- Avoid spaces around text

  <!-- prettier-ignore -->
  ```html
  <!-- Do -->
  <a href="/example#link-default" class="ecl-link ecl-link--default ecl-link--icon ecl-link--icon-after"><span class="ecl-link__label">Example</span>&nbsp;<svg class="ecl-icon ecl-icon--fluid ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="static/icons-cbfd6efe.svg#ui--close-filled"></use></svg></a>

  <!-- Don't -->
  <a href="/example#link-default" class="ecl-link ecl-link--default ecl-link--icon ecl-link--icon-after"><span class="ecl-link__label"> Example </span>&nbsp;<svg class="ecl-icon ecl-icon--fluid ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="static/icons-cbfd6efe.svg#ui--close-filled"></use></svg></a>
  ```

- Newlines in attributes are accepted

  <!-- prettier-ignore -->
  ```html
  <!-- The following code is considered valid -->
  <div class="ecl-form-group ecl-form-group--select"><label 
      class="ecl-form-label"
      for="example-id"
    >Select a country</label><div class="ecl-select__container"><select
      id="example-id"
      name="example-name"
      class="ecl-select"
      
       
    ><option value="1">Belgium</option><option value="2">France</option><option value="3">Luxembourg</option><option value="4">Germany</option><option value="5">Bulgaria</option></select><div class="ecl-select__icon"><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-180 ecl-select__icon-shape" focusable="false" aria-hidden="true"><use xlink:href="static/icons-cbfd6efe.svg#ui--corner-arrow"></use></svg></div></div><div class="ecl-help-block">Help message</div></div>
  ```

Whether the raw output is beautiful and easy to read or not doesn't matter. The only thing that matters is that it works as expected.

### Concrete actions

Here's the plan to follow:

1. The developer creates the component X with these recommendations:

   - The template is wrapped within `{% spaceless %}...{% endspaceless %}`.
   - Whitespace control modifiers (dashes) are applied on all the control structures and other tags that might generate whitespaces in the print area, except in attributes.
   - There are also dashes on content-printing tags (`{{`, `{% include`, etc.) when needed.

2. The developer takes the Jest snapshots and opens a PR.
3. The reviewer validates the component and the snapshots, and then merges the PR.
4. The reviewer creates a Jira ticket: "Improve quality of component X". The goal of the ticket is to remove as many dashes as possible.

> It seems that perfection is attained not when there is nothing more to add, but when there is nothing more to remove.

— Antoine de Saint-Exupéry

Here are more details about the different recommendations of point 1.

#### Use the `spaceless` tag (mandatory)

Wrap your template within `{% spaceless %}...{% endspaceless %}`:

<!-- prettier-ignore -->
```twig
{% spaceless %}

{#
  Parameters:
  - ...
#}

{# Pre-processing #}
{% set ... %}

{# Render #}
<my-component>
  ...
</my-component>

{% endspaceless %}
```

If you need to add a whitespace somewhere in your template between 2 HTML tags, you can do it with: `{% endspaceless %} {% spaceless %}`.

#### Use the whitespace control modifier on your tags (when needed)

You can trim leading and trailing whitespaces with `-` (dash) in the following ways:

- `{{- my_var }}`: remove left whitespace
- `{{ my_var -}}`: remove right whitespace
- `{{- my_var -}}`: remove both whitespaces

##### Simple scenario: printing content when it's surrounded by HTML tags

It makes sense to use it when you print content between 2 tags:

```twig
<!-- Do -->
</span>
  {{- my_var -}}
<span>

<!-- Don't -->
</span>
  {{ my_var }}
<span>
```

or inside a tag:

```twig
<!-- Do -->
<span>
  {{- my_var -}}
</span>

<!-- Don't -->
<span>
  {{ my_var }}
</span>
```

But it doesn’t make sense in attributes,

```twig
<!-- Do -->
<span {{ my_var }} />

<!-- Don't -->
<span {{- my_var -}} />
```

or when there’s no space around:

```twig
<!-- Do -->
</span>{{ my_var }}<span>

<!-- Don't -->
</span>{{- my_var -}}<span>
```

```twig
<!-- Do -->
<span>{{ my_var }}</span>

<!-- Don't -->
<span>{{- my_var -}}</span>
```

In the HTML attributes, you normally don't need to trim the whitespaces. It's better to have a few extra whitespaces than a missing one.

Notes:

- `{{` can be replaced by any content-printing structure, e.g. `{% include '...' %}`, `{% embed '...' %}` or `{% block '...' %}`.
- In general though, `{% include '...' %}` and `{% embed '...' %}` will print a new HTML tag — not text only —, thus the whitespace control modifiers could be optional on these tags in the previous scenarios.

##### Complex scenario: the content is surrounded by Twig tags

Sometimes, you will find that control structures (`if`, `for`) and other Twig tags (like `set` or comments) may alter the output by introducing undesired whitespaces.

As a rule of thumb, it's good to start by removing all the whitespaces for these tags using the dash syntax, generate the snapshot of the finished component and then start removing the dash where they're unnecessary.

## Alternatives Considered

### Building templates with CSS in mind

In reality, there are very few cases where whitespaces can be problematic. We could build the templates with whitespaces and only remove them when needed, but this supposes that we know which CSS classes applied on which tag need our attention.

It's easier to consider that no whitespace is safe and to remove them all by default.

### Only accepting single-line outputs

We could also try to get the output of the Twig template to be on a single line but it would mean stripping all newlines from elements' attributes.

Concretely, it would mean replacing:

<!-- prettier-ignore -->
```twig
<select
  id="{{ _id }}"
  name="{{ _name }}"
  class="{{ _css_class }}"
  {{ _disabled ? "disabled" }}
  {{ _extra_attributes|raw }}
>
```

With something like:

<!-- prettier-ignore -->
```twig
<select
  {{- ' id="#{_id}"' -}}
  {{- ' name="#{_name}"' -}}
  {{- ' class="#{_css_class}"' -}}
  {{- _disabled ? " disabled" -}}
  {{- _extra_attributes|raw -}}
>
```

While this approach is technically possible and is acceptable, it has no effect on the rendered component and we find that it only makes the source code more difficult to write and to maintain.

## Resources

- https://twig.symfony.com/doc/2.x/templates.html#templates-whitespace-control
- https://www.drupal.org/docs/develop/coding-standards/twig-coding-standards
