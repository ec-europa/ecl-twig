# Strip whitespaces

Motivation: whitespaces can be a source of problems in HTML when not handled correctly.

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

In order to simplify the process of developping templates, we decide to strip
them when it makes sense — when there's a doubt. ## Goal The output of a Twig
template should not contain whitespaces in the following cases: - between
adjacent tags Expect: ```html

<div></div><div></div>
````

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
