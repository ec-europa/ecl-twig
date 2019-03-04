# Strip whitespaces

| Status        | proposed <!--becomes accepted, rejected or superseded later--> |
| ------------- | -------------------------------------------------------------- |
| **Proposed**  | 2019-03-01                                                     |
| **Accepted**  | (the date the proposal was accepted/rejected)                  |
| **Driver**    | @yhuard                                                        |
| **Approver**  | @degliwe                                                       |
| **Consulted** | @emeryro, @degliwe, @planctus, @kalinchernev                   |
| **Informed**  | WAAT, contributors                                             |

## Decision

In order to avoid issues related to whitespace, we should strip them by default and only add them when needed.

## Context

Whitespaces can be a source of problems in HTML when not handled correctly.

When we develop our components in the [main repository](https://github.com/ec-europa/europa-component-library), we use React, which [removes most of the whitespaces](https://reactjs.org/docs/jsx-in-depth.html#string-literals-1.). With such behavior from React, we don't think about whitespaces and how they can impact the end result after rendering.

However, with Twig, we need to be careful with whitespaces. When they appear [between inline block elements](https://css-tricks.com/fighting-the-space-between-inline-block-elements/) or around content, they alter the output.

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

  Expect:

  ```html
  <span></span><span></span>
  ```

  Avoid:

  ```html
  <span></span> <span></span>
  ```

- between a tag and its children

  Expect:

  ```html
  <span><span></span><span></span></span>
  ```

  Avoid:

  ```html
  <span>
    <span></span>
    <span></span>
  </span>
  ```

- between a tag and its text content

  Expect:

  ```html
  <span>Hello world!</span>
  ```

  Avoid:

  ```html
  <span>
    Hello world!
  </span>
  ```

  ```html
  <span> Hello world! </span>
  ```

### Concrete actions

#### Use the `spaceless` tag

Wrap your template within `{% spaceless %}`:

<!-- prettier-ignore -->
```html
{#
  Parameters:
  - ...
#}

{% spaceless %}

{# Pre-processing #}
{% set ... %}

{# Render #}
<my-component>
  ...
</my-component>

{% endspaceless %}
```

If you need to add a whitespace somewhere in your template, you can do it with: `{% endspaceless %}{{ ' ' }}{% spaceless %}`.

#### Use the whitespace control modifier on your tags when needed

You can trim leading and trailing whitespaces with `-` (dash) in the following ways:

- `{{- my_var }}`: remove left whitespace
- `{{ my_var -}}`: remove right whitespace
- `{{- my_var -}}`: remove both whitespaces

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

Notes:

- `<span />` is used in these examples, but it could be any tag
- `{{` can be replaced by any content-printing tag, e.g. `{% include '...' %}`, `{% embed '...' %}` or `{% block '...' %}`. In most cases, you don't need to remove the whitespaces on control structures (`if`, `for`).

## Alternatives Considered

### Single-line output

We could try to get the output of the Twig template to be on a single line but it would mean stripping all the newlines in the elements attributes.

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

## Resources

- https://twig.symfony.com/doc/2.x/templates.html#templates-whitespace-control
- https://www.drupal.org/docs/develop/coding-standards/twig-coding-standards
