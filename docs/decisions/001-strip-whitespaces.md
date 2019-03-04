# Strip whitespaces

Motivation: whitespaces can be a source of problems in HTML when not handled correctly.

In order to simplify the process of developping templates, we decide to strip them when it makes sense — when there's a doubt.

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
  <div>Hello wordl!</div>
  ```

  Avoid:

  ```html
  <div>
    Hello wordl!
  </div>
  ```

  ```html
  <div> Hello wordl! </div>
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

### Use the whitespace control modifier on your tags when needed

You can trim leading and or trailing whitespace with `-` (dash), e.g:

- `{{- my_var }}`: remove left whitespace
- `{{ my_var -}}`: remove right whitespace
- `{{- my_var -}}`: remove both whitespaces

It makes sense between 2 tags:

```html
</div>
  {{- ... -}}
<div>
```

or inside a tag:

```html
<div>
  {{- ... -}}
</div>
```

But it doesn’t make sense in attributes,

```html
<div {{ ... }} />
```

or when there’s no space around:

```html
</div>{{ ... }}<div>
```

```html
<div>{{ ... }}</div>
```

Note: `{{` can be replaced by `{%`, the logic is the same.

## Resources

- https://twig.symfony.com/doc/2.x/templates.html#templates-whitespace-control

```

```
