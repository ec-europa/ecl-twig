# Strip whitespaces

## Motivation

Whitespaces can be a source of problems in HTML when not handled correctly.

When we develop our components in the [main repository](https://github.com/ec-europa/europa-component-library), we use React, which [removes most of the whitespaces](https://reactjs.org/docs/jsx-in-depth.html#string-literals-1.). We don't specifically think about whitespaces and how the can impact the end result, since there are none.

With Twig, we need to be careful about whitespaces. When they appear [between inline block elements](https://css-tricks.com/fighting-the-space-between-inline-block-elements/) or around content, they alter the output.

```html
<a href="#">Hello world!</a>
```

Is not the same as:

```html
<a href="#">
  Hello world!
</a>
```

In order to avoid issues related to whitespace, we should strip them by default and only add them when needed.

## Goal

The output of a Twig template should not contain whitespaces in the following cases:

- between adjacent tags

  Expect:

  ```html
  <div></div><div></div>
  ```

  Avoid:

  ```html
  <div></div> <div></div>
  ```

- between a tag and its children

  Expect:

  ```html
  <div><div></div><div></div></div>
  ```

  Avoid:

  ```html
  <div>
    <div></div>
    <div></div>
  </div>
  ```

- between a tag and its text content

  Expect:

  ```html
  <div>Hello world!</div>
  ```

  Avoid:

  ```html
  <div>
    Hello world!
  </div>
  ```

  ```html
  <div> Hello world! </div>
  ```

## Concrete actions

### Use the `spaceless` tag

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

### Use the whitespace control modifier on your tags when needed

You can trim leading and or trailing whitespaces with `-` (dash), e.g:

- `{{- my_var }}`: remove left whitespace
- `{{ my_var -}}`: remove right whitespace
- `{{- my_var -}}`: remove both whitespaces

It makes sense to use it when you print content between 2 tags:

```html
<!-- Do -->
</div>
  {{- my_var -}}
<div>

<!-- Don't -->
</div>
  {{ my_var }}
<div>
```

or inside a tag:

```html
<!-- Do -->
<div>
  {{- my_var -}}
</div>

<!-- Don't -->
<div>
  {{ my_var }}
</div>
```

But it doesn’t make sense in attributes,

```html
<!-- Do -->
<div {{ my_var }} />

<!-- Don't -->
<div {{- my_var -}} />
```

or when there’s no space around:

```html
<!-- Do -->
</div>{{ my_var }}<div>

<!-- Don't -->
</div>{{- my_var -}}<div>
```

```html
<!-- Do -->
<div>{{ my_var }}</div>

<!-- Don't -->
<div>{{- my_var -}}</div>
```

Note: `{{` can be replaced by `{%`, e.g. `{% include '...' %}`, `{% embed '...' %}`. The logic is the same.

## Resources

- https://twig.symfony.com/doc/2.x/templates.html#templates-whitespace-control
- https://www.drupal.org/docs/develop/coding-standards/twig-coding-standards
