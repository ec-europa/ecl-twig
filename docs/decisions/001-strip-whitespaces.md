# Strip whitespaces

| Status        | proposed <!--becomes accepted, rejected or superseded later--> |
| ------------- | -------------------------------------------------------------- |
| **Proposed**  | 2019-03-01                                                     |
| **Accepted**  | (the date the proposal was accepted/rejected)                  |
| **Driver**    | @yhuard                                                        |
| **Approver**  | @degliwe                                                       |
| **Consulted** | @degliwe, @emeryro, @kalinchernev, @planctus                   |
| **Informed**  | WAAT, contributors                                             |

## Decision

In order to avoid issues related to whitespaces, we should strip whitespaces between HTML tags by default and only add them when needed.

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

### Concrete actions

#### Use the `spaceless` tag

Wrap your template within `{% spaceless %}...{% endspaceless %}`:

<!-- prettier-ignore -->
```html
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

#### Use the whitespace control modifier on your tags when needed

You can trim leading and trailing whitespaces with `-` (dash) in the following ways:

- `{{- my_var }}`: remove left whitespace
- `{{ my_var -}}`: remove right whitespace
- `{{- my_var -}}`: remove both whitespaces

##### Simple scenario: printing content when it's surrounded by HTML tags

It makes sense to use it when you print content between 2 tags:

```html
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

```html
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

```html
<!-- Do -->
<span {{ my_var }} />

<!-- Don't -->
<span {{- my_var -}} />
```

or when there’s no space around:

```html
<!-- Do -->
</span>{{ my_var }}<span>

<!-- Don't -->
</span>{{- my_var -}}<span>
```

```html
<!-- Do -->
<span>{{ my_var }}</span>

<!-- Don't -->
<span>{{- my_var -}}</span>
```

In the HTML attributes, you normally don't need to trim the whitespaces. It's better to have a few extra whitespaces than a missing one.

Note: `{{` can be replaced by any content-printing structure, e.g. `{% include '...' %}`, `{% embed '...' %}` or `{% block '...' %}`.

##### Complex scenario: the content is surrounded by Twig tags

Sometimes, you will find that control structures (`if`, `for`) and other Twig tags (like `set` or comments) may alter the output by introducing undesired whitespaces.

As a rule of thumb, it's good to start by removing all the whitespaces for these tags using the dash syntax, generate the snapshot of the finished component and then start removing the dash where they're unnecessary.

Here's the plan to follow:

1. the developer creates the component X with dashes on all the control structures and other tags that might generate whitespaces
2. the developer takes the Jest snapshots and opens a PR
3. the reviewer validates the component and the snapshots, and then merges the PR
4. the reviewer creates a Jira ticket: "Improve quality of component X". The goal of the ticket is to remove as many dashes as possible.

> It seems that perfection is attained not when there is nothing more to add, but when there is nothing more to remove.

— Antoine de Saint Exupéry

## Alternatives Considered

### Building templates with CSS in mind

In reality, there are very few cases where whitespaces can be problematic. We could build the templates with whitespaces and only remove them when needed, but this supposes that we know which CSS classes applied on which tag need our attention.

It's easier to consider that no whitespace is safe and remove them all by default.

### Single-line output

We could also try to get the output of the Twig template to be on a single line but it would mean stripping all newlines from elements' attributes.

Concretely, it would mean replacing:

<!-- prettier-ignore -->
```html
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
```html
<select
  {{- ' id="#{_id}"' -}}
  {{- ' name="#{_name}"' -}}
  {{- ' class="#{_css_class}"' -}}
  {{- _disabled ? " disabled" -}}
  {{- _extra_attributes|raw -}}
>
```

This approach is not feasible, because it makes the code harder to read and maintain, and it's also more error-prone.

## Resources

- https://twig.symfony.com/doc/2.x/templates.html#templates-whitespace-control
- https://www.drupal.org/docs/develop/coding-standards/twig-coding-standards
