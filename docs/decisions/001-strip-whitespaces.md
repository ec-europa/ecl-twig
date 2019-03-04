# Strip whitespaces

Motivation: whitespaces can be a source of problems in HTML when not handled correctly.

In order to simplify the process of developping templates, we decide to strip them when it makes sense — when there's a doubt.

## Concrete actions

### Use the `spaceless` tag

Wrap your template within `{% spaceless %}`:

```html
{% spaceless %}
<my-component>
  ...
</my-component>
{% endspaceless %}
```

### Using the whitespace control modifier on your tags when needed

You can trim leading and or trailing whitespace.

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
