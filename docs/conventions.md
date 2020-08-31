{"widget":"table","headings":["heading 1\"","\"heading 2","third heading"],"rows":[["cell 1","cell 2","third cell"]]}

# Conventions

## Git conventions

Please follow these [git conventions](https://github.com/ec-europa/europa-component-library/blob/v2-dev/docs/conventions/git.md) for branches and commits.

## Whitespaces

[More information](./decisions/001-strip-whitespaces.md)

## Includes and embeds should always use the `only` keyword

The `only` keyword disables access to the context, thus preventing leaks.

<!-- prettier-ignore -->
```twig
<!-- Do -->
{% include "./path/to/template.html.twig" only %}

{% include "./path/to/template.html.twig" with {
  'foo': 'bar'
} only %}

{% embed "./path/to/template.html.twig" only %}
  ...
{% endembed %}

{% embed "./path/to/template.html.twig" with {
  'foo': 'bar'
} only %}
  ...
{% endembed %}


<!-- Don't -->
{% include "./path/to/template.html.twig" %}

{% include "./path/to/template.html.twig" with {
  'foo': 'bar'
} %}

{% embed "./path/to/template.html.twig" %}
  ...
{% endembed %}

{% embed "./path/to/template.html.twig" with {
  'foo': 'bar'
} %}
  ...
{% endembed %}
```
