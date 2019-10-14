# ECL Twig - EC Media container component

npm package: `@ecl-twig/ec-component-media-container`

```shell
npm install --save @ecl-twig/ec-component-media-container
```

## Media container

### Parameters

- "description" (string) (default: '') This will be shown as a caption under the media,
- "image" (string) (default: '') Path to the image,
- "sources" (array) Define the video source, an array with the next keys
  - "src" (string) (default: ''),
  - "type" (string) (default: ''),
- "tracks" (array) Define the video tracks, an array with the next keys
  - "src" (string) (default: ''),
  - "kind" (string) (default: ''),
  - "src_lang" (string) (default: ''),
  - "label" (string) (default: ''),
- "alt" (string) (default: '') Alternate text for the image,
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the component,
- "extra_attributes" (optional) (array) (default: []) Extra attributes for the component.

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/media-container.html.twig' with { 
  description: 'A description for this component', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  sources: [ 
    { 
      src: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', 
      type: 'video/mp4', 
  	}, 
  ], 
  tracks": [ 
	{ 
      src: '/captions/bunny-en.vtt', 
      kind: 'captions', 
      src_lang: 'en', 
      label: 'English', 
    }, 
  ], 
  alt: 'An alternate text', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' },  
    { name: 'data-test-1', value: 'data-test-value-1' }  
  ] 
} %}
```
