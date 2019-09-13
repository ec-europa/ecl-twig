# ECL Twig - EC Date block

npm package: `@ecl-twig/ec-component-date-block`

```shell
npm install --save @ecl-twig/ec-component-date-block
```

## Parameters

- "day" (string)
- "month" (string)
- "year": (string)
- "month_full" (string)
- "variant": (string)
- "date_time": (string)
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated)
- "extra_attributes" (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/date-block.html.twig' with { 
  extra_classes: 'extra_class_1 extra_class-2', 
  extra_attributes: [ 
    { 
      name: 'extra_attribute_1', 
      value: 'extra_attribute_value_1' 
    }, 
    { 
      name: 'extra_attribute_2', 
      value: 'extra_attribute_value_2' 
    } 
  ], 
  item: [ 
    day: 'Monday', 
    month: 'Dec', 
    year: '2018', 
    full_month: 'December' 
   ] 
} %} 
```
