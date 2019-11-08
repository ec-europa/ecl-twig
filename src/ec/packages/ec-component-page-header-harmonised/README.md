# ECL Twig - EC Page Header Harmonised component

npm package: `@ecl-twig/ec-component-page-header-harmonised`

```shell
npm install --save @ecl-twig/ec-component-page-header-harmonised
```

## Page Header Harmonised

### Parameters

- "title" (string) (default: '') Title of header
- "description" (string) (default: '') Description of header
- "meta" (string) (default: '') Meta of header
- "breadcrumb" (associative array) (default: '') Predefined structure compatible with EC Breadcrumb
- "extra_classes" (string) (default: '')
- "extra_attributes" (array) (default: []): format:
  - "name" (string) (default: '')
  - "value" (string) (default: '')

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-page-header-harmonised/page-header-harmonised.html.twig' with {  
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
  }  
} %}  
```
