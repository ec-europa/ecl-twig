# ECL Twig - EC Blockquote component

npm package: `@ecl-twig/ec-component-blockquote`

```shell
npm install --save @ecl-twig/ec-component-blockquote
```

## Parameters

- "citation" (string) (default: '')
- "author" (string) (default: '')
- "extra_classes" (string) (default: '')
- "extra_attributes" (array) (default: [])

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-blockquote/blockquote.html.twig' with { 
  citation: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.', 
  author: 'Mark Twain' 
} %}
```
