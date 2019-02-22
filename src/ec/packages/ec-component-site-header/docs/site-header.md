# ECL Twig - EC Site Header

npm package: `@ecl-twig/ec-component-site-header`

```shell
npm install --save @ecl-twig/ec-component-site-header
```

## Site Header

### Parameters

- "search_form" (associative array) (default: predefined structure): EC Search Form component structure
- "language" (associative array) (default: predefined structure): Language switcher settings. Default settings for English. format:
  - "url": (string) (default: ''): URL for switcher
  - "label": (string) (default: 'English'): Switcher language label, eg. 'English', 'Français', etc.
  - "code": (string) (default: 'en'): Switcher language code, eg. 'en', 'fr', etc.
- "header_link" (associative array) (default: predefined structure): Link settings for header link. format:
  - "url": (string) (default: ''): URL for link
  - "aria_label": (string) (default: 'European Comission'): Aria-label attribute value
- "header_image" (associative array) (default: predefined structure): Heading image settings. format:
  - "src": (string) (default: ''): URL for image
  - "alt": (string) (default: 'European Commission logo'): Alt attribute for image
  - "title": (string) (default: 'European Comission'): Title attribute for image
- "icon_file_path" (string) (default: ''): URL to icons file
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the form
- "extra_attributes" (optional) (array) (default: []) Extra attributes for the form
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example (default):

```twig
{% include 'path/to/site-header.html.twig' with {  
  icon_file_path: '/path-to-the-icons-file',  
  header_link: {  
    url: '/example-1',  
  },  
} %}
```

### Example (translated):

```twig
{% include 'path/to/site-header.html.twig' with {  
  icon_file_path: '/path-to-the-icons-file',  
  language: {  
    url: '/example',  
    code: 'fr',  
    label: 'Français',  
  },  
  header_link: {  
    url: '/example-1',  
    aria_label: 'Commmission Européenne',  
  },  
  header_image: {  
    src: 'static/media/logo--fr.a8aaa7ab.svg',  
    alt: 'Commmission Européenne logo',  
    title: 'Commmission Européenne',  
  },  
  search_form: {  
    button: {  
      label: 'Recherche',  
    },  
  },  
} %}
```
