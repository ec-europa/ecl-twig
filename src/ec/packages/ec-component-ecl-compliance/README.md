{"widget":"table","headings":["heading 1","heading 2"],"rows":[["cell 1","cell 2"]]}

# ECL-Twig ECL Compliance component

npm package: `@ecl-twig/ec-component-ecl-compliance`

```shell
npm install --save @ecl-twig/ec-component-ecl-compliance
```

### Parameters:

- **"not_compliant"** (boolean) Whether the validation succeded or failed
- **"message"** (string) - Message(s) to be shown
- **"component"** (string) - Name of the component
- **"variant"** (string) - Variant if any

### Blocks:

- **"complaints"** (if not_compliant is false)
- **"compliant"** (if not_compliant is true)
