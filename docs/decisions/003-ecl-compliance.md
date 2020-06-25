# Compliance checks

| Status        | accepted <!--becomes accepted, rejected or superseded later--> |
| ------------- | -------------------------------------------------------------- |
| **Proposed**  | 2020-04-30                                                     |
| **Accepted**  | 2020-06-24                                                     |
| **Driver**    | @planctus                                                      |
| **Approver**  | @kalinchernev, @papegaill                                      |
| **Consulted** | @papegaill, @emeryro, @kalinchernev, @pgingao                  |
| **Informed**  | consumers                                                      |

## Decision

In order to facilitate and enforce the correct implementation of ECL components, the ECL-Twig library provides the `ecl-compliance` tool.
This tool is a collection of Twig templates providing an extended list of business and technical requirements expected in a component's implementation.

## Context

ECL-Twig is a library of twig templates implementing vanilla ECL components: https://ec.europa.eu/component-library/.
The vanilla component definition implies all the guidelines to use it, the elements that are mandatory and the ones that are optional.
ex: Timeline usage page - https://ec.europa.eu/component-library/ec/components/timeline/usage/
In order to properly implement a component defined by ECL, then, the mandatory elements need to be present.

## Consequences

Each of our templates should have a corresponding child template defined, this will make a compliance check available in our storybook demo and in any implementation of the ECL-Twig library, when the `_ecl_compliance_` property is set to true.

The file name of the child template is expected to follow this convention:
_ecl-compliance-{nameOfTheComponent}.html-twig_
it should be placed in: `src/{system}/packages/{system}-component-ecl-compliance/components/`

An additional parameter `_ecl_compliance_inner_check_` is available for identifying the checks run by a component on all its included templates from the overall compliance performed on a component by the user. This offers the possibility of differentiating the output of the report.

:warning: For this parameter to work also the `icon_path` needs to be available in order to render an icon for the success or the failure of the checks, the standard report would be used otherwise.

### Expected output

The output of the compliance checks should be rendered together with the component, in two different flavours:

- standard output
  Ex

```html
<!-- ecl2-compliance: fact-figures --><div
  class="ecl2-compliance ecl-u-border-width-1 ecl-u-border-color-green ecl-u-border-style-solid ecl-u-ma-xs ecl-u-pr-s ecl-u-bg-white"
  ><p class="ecl-u-type-color-grey ecl-u-ml-s ecl-u-type-xs"
    >[fact-figures] - ecl compliant</p
  ></div
>
```

- inline output (icon)
  Ex:

```html
<span
  class="ecl-u-type-color-green ecl-compliance-inner ecl-compliance-success ecl-u-ma-2xs"
  title="[icon] - ecl compliant"
  aria-expanded="false"
  ><svg class="ecl-icon ecl-icon--xs" focusable="false" aria-hidden="true">
    <use
      xlink:href="static/media/icons.865a18d2.svg#notifications--success"
    ></use></svg
></span>
```

This output gives a visual feedback in the rendered component, with a confirmation message or a detail of the problem(s) found, in case of success or failure.
In the ECL-Twig storybook the "inner checks" are a bit fancier due to the introduction of a js library: https://atomiks.github.io/tippyjs/, they would normally appear as the default tooltip shown by the browser when hovering an element with a "title" attribute defined.

### Concrete actions

Here's the plan to follow:

1, The developer creates a template in `src/{system}/packages/{system}-component-ecl-compliance/components/` as a child template of `ecl-compliance.html.twig` with this name convention: `ecl-compliance-{nameOfTheComponent}.html-twig`.
In this file the developer extends the parent template:

```twig
{% extends "@ecl-twig/ec-component-ecl-compliance/ecl-compliance.html.twig" %}
```

This template will hold the use cases and the checks needed, following the elements defined as mandatory/optional in the ECL's usage page for that component.
The parent template will receive the `message` property as a string and `not-compliant` as a boolean.
Ex: `[fact-figures] - ecl compliant`

2. The developer adds a compliance check to a newly defined component by including its corresponding compliance child template:

Ex:

```html
{# Validation #} {% if _compliance %} {% include
'@ecl-twig/ec-component-ecl-compliance/components/ecl-compliance-accordion.html.twig'
with { items: _items } only %} {% endif %}
```

3. The developer adds the "validation" tab in the story on storybook and places there a knob to set the `_compliance_` boolean parameter.
   Ex:

```
import { getComplianceKnob } from '@ecl-twig/story-utils';
const prepareComponent = data => {
  getComplianceKnob();
}
```

4. The developer adds a scenario in the test including all the use cases defined in the compliance template (when possible):
   Ex:

```
  test('with validation enabled and missing input data returns the right warning message', () => {
    expect.assertions(1);

    const dataCompliance = { ...demoData, _compliance_: true };
    dataCompliance.items[0].id = '';
    dataCompliance.items[0].toggle.label = '';

    return expect(render(dataCompliance)).resolves.toMatchSnapshot();
  });
```

5. :warning: Each iteration on a component containing changes that would affect the current logic set for its compliance as well as any change in the editorial guidelines for an ECL component could potentially require some work in the children templates on ECL-Twig.
   This is a not a new scenario, though, also the organisation of knobs currently used already required some vigilance on the updates of the usage guidelines.
