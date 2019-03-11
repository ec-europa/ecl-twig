# ECL Twig - EC Page Banner

npm package: `@ecl-twig/ec-component-page-banner`

```shell
npm install --save @ecl-twig/ec-component-page-banner
```

## Page Banner

### Parameters

- "type" (string) (default: 'default') Type of banner (can be 'default','image','image-shade','primary')
- "title" (string) (default: '') Title of banner
- "image" (string) (default: '') Image for banner (required for image banner type)
- "baseline" (string) (default: '') Baseline of banner
- "centered" (bool) (default: true) Define if banner should be centered
- "button" (associative array) (default: predefined structure) predefined structure for EC Button component
- "extra_classes" (optional) (string) (default: '')
- "extra_attributes" (optional) (array) (default: [])
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example :

<!-- prettier-ignore -->
```twig
{% include 'path/to/page-header.html.twig' with {  
  title: 'EU Budget for the future',  
  baseline: 'Innovation, economy, environment and geopolitics',  
  centered: true,  
  type: 'image',  
  image: 'url/path-to-image',  
  button: {  
    label: 'Subscribe',  
    icon: {  
      path: 'path-to-the-icon-file',  
    },  
  },  
} %}
```
