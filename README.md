# ECL-twig

Twig components for the EU/EC new visual identity

# Getting started

To run a local webserver that shows how these components can be used, run
`npm install && npm start`.
 
# Including all components on your site

To use these components on your site, include `dist/components.bundled.js` on
the page and any of the included component tags. For example:

```html
<html>
  <head>
    <script src="./ECL-twig/components.bundled.js"></script>
  </head>
  <body>
    <proper-name first="Bill" middle="Stanley" last="Preston" suffix="Esquire"></proper-name>
  </body>
</html>
```

Should render the `proper-name` tag.

If you prefer to manage polyfills and the Twig.js library yourself, you can
include `components.js`.

# Including individual components

Individual components are also available in `dist`, and can be included on your
site if you include the polyfills and the Twig.js library. For example:
 
 ```html
 <html>
   <head>
    <script src="./webcomponents-loader.js"></script>
    <script src="./webcomponentsjs/custom-elements-es5-adapter.js"></script>
    <script src="./twig/twig.min.js"></script>
    <script src="./ECL-twig/proper-name/proper-name.js"></script>
   </head>
   <body>
     <proper-name first="Bill" middle="Stanley" last="Preston" suffix="Esquire"></proper-name>
   </body>
 </html>
```

# Running the build

To execute the entire production Webpack build, run `npm run build`.

# Running tests

Tests are written with the [web-component-tester](https://github.com/Polymer/tools/tree/master/packages/web-component-tester)
package.

To run tests, ensure Java is available in your `PATH`, then run `npm test`.
