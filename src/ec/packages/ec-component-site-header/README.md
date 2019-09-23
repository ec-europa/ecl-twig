# ECL Twig - EC Site Header component

npm package: `@ecl-twig/ec-component-site-header`

```shell
npm install --save @ecl-twig/ec-component-site-header
```

## Site Header

### Parameters

- "icon_file_path" (string) (default: ''): file containing the svg icons
- "logo" (associative array) (default: predefined structure): Logo image settings. format:
  - "title" (string) (default: ''): Logo title attribute.
  - "alt" (string) (default: ''): Logo alt attribute.
  - "href" (string) (default: ''): Logo URL.
  - "src" (string) (default: ''): Logo image file path, eg. dist/images/logo--en.svg.
- "language_selector" (associative array) (default: predefined structure): Language switcher settings. format:
  - "href" (string) (default: ''): URL for switcher
  - "name" (string) (default: ''): Switcher language label, eg. 'English', 'Français', etc.
  - "code" (string) (default: ''): Switcher language code, eg. 'en', 'fr', etc.
  - "overlay" (associative array) (default: predefined structure): Overlay language switcher settings. format:
    - "close_label" (string) (default: ''): Close button label eg. 'Close'.
    - "title" (string) (default: ''): Overlay title, eg. 'Select your language'.
    - "items" (array) (default: []): (array) (default: []): format:
      - "lang" (string) (default: '') Item language code, eg. 'en', 'fr', etc.
      - "label" (string) (default: '') Item language label, eg. 'English', 'Français', etc.
      - "href" (string) (default: '') Item language URL eg. '/example#language_en'.
      - "is_active" (boolean) (default: false) define if item is the active language.
- "search_form" (associative array) (default: predefined structure): EC Search Form component structure
- "auto_init" (boolean) (default: false)
- "extra_classes" (string) (default: '')
- "extra_attributes" (array) (default: []): format:
  - "name" (string) (default: '')
  - "value" (string) (default: '')

### Example :

<!-- prettier-ignore -->
```twig
{% include 'path/to/site-header.html.twig' with { 
  icon_file_path: '/path-to-the-icons-file',   
  logo: {  
    title: 'European Commission',  
    alt: 'European Commission logo',  
    href: '/example',  
    src: 'dist/images/logo--en.svg',    
  },  
  language_selector: {  
    href: '/example',  
    name: 'English',  
    code: 'en',  
    overlay: {  
      close_label: 'Close',  
      title: 'Select your language',  
      items: [  
        { lang: 'bg', label: 'български', href: '/example#language_bg' },  
        { lang: 'es', label: 'español', href: '/example#language_es' },  
        { lang: 'cs', label: 'čeština', href: '/example#language_cs' },  
        { lang: 'da', label: 'dansk', href: '/example#language_da' },  
        { lang: 'de', label: 'Deutsch', href: '/example#language_de' },  
        { lang: 'et', label: 'eesti', href: '/example#language_et' },  
        { lang: 'el', label: 'ελληνικά', href: '/example#language_el' },  
        {  
          lang: 'en',  
          label: 'English',  
          href: '/example#language_en',  
          is_active: true,  
        },  
        { lang: 'fr', label: 'français', href: '/example#language_fr' },  
        { lang: 'ga', label: 'Gaeilge', href: '/example#language_ga' },  
        { lang: 'hr', label: 'hrvatski', href: '/example#language_hr' },  
        { lang: 'it', label: 'italiano', href: '/example#language_it' },  
        { lang: 'lv', label: 'latviešu', href: '/example#language_lv' },  
        { lang: 'lt', label: 'lietuvių', href: '/example#language_lt' },  
        { lang: 'hu', label: 'magyar', href: '/example#language_hu' },  
        { lang: 'mt', label: 'Malti', href: '/example#language_mt' },  
        { lang: 'nl', label: 'Nederlands', href: '/example#language_nl' },  
        { lang: 'pl', label: 'polski', href: '/example#language_pl' },  
        { lang: 'pt', label: 'português', href: '/example#language_pt' },  
        { lang: 'ro', label: 'română', href: '/example#language_ro' },  
        { lang: 'sk', label: 'slovenčina', href: '/example#language_sk' },  
        { lang: 'sl', label: 'slovenščina', href: '/example#language_sl' },  
        { lang: 'fi', label: 'suomi', href: '/example#language_fi' },  
        { lang: 'sv', label: 'svenska', href: '/example#language_sv' },  
      ],  
    },  
  },  
  searchForm: {  
    textInputId: 'search-form',  
    inputLabel: 'Search',  
    buttonLabel: 'Search',  
  },  
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %} 
```
