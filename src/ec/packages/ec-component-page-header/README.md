# ECL Twig - EC Page Header component

npm package: `@ecl-twig/ec-component-page-header`

```shell
npm install --save @ecl-twig/ec-component-page-header
```

## Page Header

### Parameters

- "title" (string) (default: '') Title of header
- "description" (string) (default: '') Description of header
- "meta" (string) (default: '') Meta of header
- "infos" (array) (default: []) Array of infos. format:
  - "text" (string) Label of info
  - "icon" (associative array) Predefined structure compatible with EC Icon
- "breadcrumb" (associative array) (default: '') Predefined structure compatible with EC Breadcrumb
- "extra_classes" (string) (default: '')
- "extra_attributes" (array) (default: []): format:
  - "name" (string) (default: '')
  - "value" (string) (default: '')

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-page-header/ecl-page-header.html.twig' with {  
  title: 'Page title',  
  description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',  
  meta: 'News article | 17 October 2015',  
  breadcrumb: {  
    links: [    
      {  
        label: 'Link 1',  
        path: '/example'  
      },  
    ],  
    icon_file_path: '/path-to-the-icons-file',  
    navigation_text: 'You are here:',
  },  
  infos: [  
    {  
      text: 'Monday 8 February',  
      icon: {  
        type: 'general',  
        name: 'calendar',  
        path: '/path-to-the-icons-file',  
      },  
    },  
  ]  
} %}  
```
