# Conventions

## Whitespaces

[More information](./decisions/001-strip-whitespaces.md)

## Includes and embeds should always use the `only` keyword

The `only` keyword disables access to the context, thus preventing leaks.

<!-- prettier-ignore -->
```html
<!-- Do -->
{% include "./path/to/template.html.twig" only %}

{% include "./path/to/template.html.twig" with {
  var: "foo"
} only %}


<!-- Don't -->
{% include "./path/to/template.html.twig" %}

{% include "./path/to/template.html.twig" with {
  var: "foo"
} %}
```
