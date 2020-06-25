# Stories

| Status        | accepted <!--becomes accepted, rejected or superseded later--> |
| ------------- | -------------------------------------------------------------- |
| **Proposed**  | 2020-06-24                                                     |
| **Accepted**  | 2020-06-24                                                     |
| **Driver**    | @planctus                                                      |
| **Approver**  | @kalinchernev, @papegaill                                      |
| **Consulted** | @kalinchernev, @emeryro, @kalinchernev, @papegaill, @pgingao   |
| **Informed**  | contributors, consumers                                        |

## Decision

In order to provide a complete representation of the information used to render a component, interactive fields as `knobs` should be made available in storybook for the user to read and edit all the properties currently used in the demo.
The result of the changes made through the knobs should be reflected every time in the example of a valid Twig include code provided in the `notes` tab.

### Knobs

#### Labelling

The label of the knobs are defined in the same way the properties are accessible in the expected input data.
Ex: `link.icon.path`

#### Grouping

Knobs are grouped together to simplify their usage, the available groups are "mandatory", "optional", "use cases", "status".

`Mandatory` and `optional` are directly related to the ECL's usage page for a certain component.
For many properties this status is contextual, though, this is valid also in the ECL-Twig storybook demo.

`Use cases` is only used where entire blocks of html can be removed as they are optional, in this case a simple toggle button is provided.

:warning: To be avoided when when not really needed, the operation performed by these buttons overlaps the work by the knobs and it's not immediately reflected by them creating a flaw in the user experience.

`states` is mainly used for form elements, where the properties are booleans defining togglers for statuses, ex: "required", "disabled".

#### Edge cases

In some cases ex: "icons-sprite, path-to-the-logo" there is no real advantage for the user in editing the value used in the demo but still the possibility of unsetting its value needs to be provided, simply defining a select knob with two values: "none" and the current value being used.

Ex:`data.button.icon.path = select( 'button.icon.path', ['none', button.icon.path], button.icon.path );`

#### Conditional knobs

Knobs can be conditionally defined, meaning that they might appear or disappear as their relevance changes following changes in the data:
Ex: `const attribute1Name = text( 'extra_attributes[0].name', '', tabLabels.optional ); // First attribute. if (attribute1Name !== '') { data.extra_attributes = []; let attribute = {}; const attribute1Value = text( 'extra_attributes[0].value', '', tabLabels.optional ); const attribute2Name = text( 'extra_attributes[1].name', '', tabLabels.optional ); ...`
In this case the extra_attributes (array) is presented as a single textfield, where 4 different knobs would be needed for defining two attributes (name and value) as static text fields.
Only when the name field for the first attribute it's filled the corresponding knob for the "value" appears together with an additional knob for setting a second attribute name.

:warning: Use this approach very carefully, the user experience it creates might be confusing in many cases.

### Notes tab

The notes tab in ECL-Twig contains the documentation for a component and a dynamic representation of the current input data used for the demo.
Altering the data via the knobs is also altering the Twig include example provided.

## Context

Stories define the components demo in storybook.
Through each story additional information related to the component is also offered:

- "knobs" to let the user interact with it and alter the data used to render it
- "notes" where to read the documentation and have access to an example of the Twig include code.

### Concrete actions

Here's the plan to follow:

1. The developer defines a story for a component including:

- knobs for every property sent to the component via user input
- groups for knobs, mandatory and optional are always going to be present, use cases and states are exceptional.
- a JSON parameter containing the data object for the notes tab
