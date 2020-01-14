#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, no-console,
no-param-reassign, no-restricted-syntax, no-await-in-loop */

const fs = require('fs');
const htmlDiffer = require('html-differ');
const logger = require('html-differ/lib/logger');
const puppeteer = require('puppeteer');
const decode = require('decode-html');
const yargsInteractive = require('yargs-interactive');
let packages = require('../../../../src/ec/.storybook/ec-packages.js').list;

const system = 'ec';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const systemFolder = `${distFolder}/packages/${system}`;
const getBase = element => {
  [, element] = element.split('ec-component-');
  return element;
};
// We build a list of components by their root name.
packages = packages.map(getBase);
packages.pop();

// The questions we need an answer for.
const options = {
  interactive: { default: true },
  component: {
    type: 'list',
    choices: packages,
    describe: 'The component you want to diff',
  },
  variant: {
    type: 'input',
    default: '',
    describe: 'The name of the twig variant (what is after the -- Ex: audio) ',
  },
  language: {
    type: 'list',
    describe: 'Choose whether to use the file rendered via js or php',
    default: 'php',
    prompt: 'always',
    choices: ['php', 'js'],
  },
  eclSection: {
    type: 'list',
    describe: 'The group the component is associated with in ECL',
    choices: ['components', 'page-structure'],
  },
  eclSubSection: {
    type: 'list',
    describe: 'Is the component nested into a sub-section?',
    default: 'none',
    prompt: 'always',
    choices: ['none', 'forms', 'navigation', 'banners'],
  },
  eclStory: {
    type: 'input',
    default: 'default',
    prompt: 'always',
    describe:
      'The name of the story in the ECL storybook (what is after the -- Ex: default)',
  },
  confirm: {
    type: 'confirm',
    describe: `Do you confirm the choices you've made?`,
  },
};

const diffOptions = {
  ignoreAttributes: ['xlink:href', 'href'],
  compareAttributesAsJSON: [],
  ignoreWhitespaces: true,
  ignoreComments: true,
  ignoreEndTags: false,
  ignoreDuplicateAttributes: false,
};

yargsInteractive()
  .usage('$0 <command> [args]')
  .interactive(options)
  .then(result => {
    (async () => {
      try {
        const {
          component,
          eclStory,
          variant,
          eclSection,
          eclSubSection,
          confirm,
          language,
        } = result;
        const extension = language === 'php' ? '.php.html' : '.js.html';
        const getVariant = element => {
          element = element.split('--')[1].replace(extension, '');
          return element;
        };
        if (!confirm) {
          console.error('Please run again yarn ecl-diff, then.');
          process.exit(1);
        }
        // We try to use the variant as it comes from the user, if we don't find it
        // we return the available variants in ecl-twig.
        let fileName = '';
        if (variant) {
          fileName = `${component}--${variant}${extension}`;
        } else {
          fileName = component + extension;
        }

        const twigFullPath =
          language === 'php'
            ? `${systemFolder}/${component}`
            : `${systemFolder}/${component}/js`;

        if (!fs.existsSync(twigFullPath)) {
          console.error(
            `It seems that "${component}" has not been rendered yet, please run yarn check:component ${component}`
          );
          process.exit(1);
        } else if (!fs.existsSync(`${twigFullPath}/${fileName}`)) {
          let files = fs.readdirSync(twigFullPath);

          files = files.filter(file => {
            return (
              file
                .split('.')
                .slice(1)
                .join('.') === extension.slice(1)
            );
          });

          files = files.map(getVariant);

          if (variant !== '') {
            console.error(
              `The "${variant}" variant for the "${component}" component has not been found in ecl-twig, but we've found these alternatives: ${files.join(
                ', '
              )}`
            );
          } else {
            console.error(
              `You did not select any variant for the "${component}" component, these are the available ones: ${files.join(
                ', '
              )}`
            );
          }
          process.exit(1);
        }
        // The markup from the html file rendered via php or javascript.
        const eclTwigMarkup = fs
          .readFileSync(`${twigFullPath}/${fileName}`, 'utf-8')
          .toString()
          // Masks, to avoid repeating patterns in the diff (@see htmldiffer).
          // Icons.
          .replace(
            /xlink:href="\/?icons(-social)?\.svg#/g,
            'xlink:href="{{.*icons.*.svg#}}'
            // Booleans.
          )
          .replace(
            /(data-ecl-)(?!auto-init)([^\n\r =]+)(="(true|false)")?/g,
            '$1$2="{{true|false}}"'
            // Logo.
          )
          .replace(/\/logo--(en|fr).svg/g, '{{(.*?)logo--(en|fr).*.svg}}');
        // Now we process the story in ECL, we try to retrieve all the stories available
        // and see if any of them matches the requested one, if none does we return the
        // list of stories available for a component, if we found them.
        const eclComponents = el => {
          if (el === 'text-input') {
            el = 'text-field';
          } else if (el === 'text-area') {
            el = 'textarea';
          } else if (el === 'accordion2') {
            el = 'accordion';
          } else if (el === 'unordered-list' || el === 'description-list') {
            el = 'list';
          } else if (el === 'message') {
            el = 'messages';
          } else if (el === 'search-form') {
            el = 'searchform';
          } else if (el === 'media-container') {
            el = 'mediacontainer';
          } else if (el === 'social-media-follow') {
            el = 'socialmediafollow';
          } else if (el === 'social-media-share') {
            el = 'socialmediashare';
          } else if (el === 'footer-harmonised') {
            el = 'footers-harmonised';
          } else if (el === 'footer-core') {
            el = 'footers-core';
          } else if (el === 'footer-standardised') {
            el = 'footers-standardised';
          } else if (el === 'site-header-standardised') {
            el = 'site-headers-standardised';
          } else if (el === 'site-header-harmonised') {
            el = 'site-headers-harmonised';
          } else if (el === 'site-header-core') {
            el = 'site-headers-core';
          } else if (el === 'page-header-core') {
            el = 'page-headers-core';
          } else if (el === 'page-header-harmonised') {
            el = 'page-headers-harmonised';
          } else if (el === 'page-header-standardised') {
            el = 'page-headers-standardised';
          } else if (el === 'expandable') {
            el = 'expandables';
          } else if (el === 'inpage-navigation') {
            el = 'in-page-navigation';
          } else if (el === 'language-list') {
            el = 'languagelist';
          }

          return el;
        };

        const eclComponent = eclComponents(component);
        let eclGluePath = eclSection;
        if (eclSubSection !== 'none') {
          eclGluePath = `${eclSection}-${eclSubSection}`;
        }
        const eclPath = `https://ec.europa.eu/component-library/playground/ec/?path=/story/${eclGluePath}-`;
        const eclFinalUrl = `${eclPath + eclComponent}--${eclStory}`;
        // Puppeteer will go to the url and try to click on the link in the left sidebar
        // to reveal the available stories.
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(eclFinalUrl);

        if ((await page.$(`a#explorer${eclGluePath}`)) !== null) {
          await page.click(`a#explorer${eclGluePath}`);
        }
        // Menu link, if it's there click on it..
        if ((await page.$(`div#${eclGluePath}-${eclComponent}`)) !== null) {
          await page.click(`div#${eclGluePath}-${eclComponent}`);
          // All the links to the stories.
          const stories = await page.$$(
            `a#explorer${eclGluePath}-${eclComponent} + div a`
          );

          if (stories) {
            let hrefs = [];
            for (const story of stories) {
              const href = await page.evaluate(
                el => el.getAttribute('href'),
                story
              );
              // Try to match the urls found with the one built in this script.
              if (eclFinalUrl === `https://ec.europa.eu${href}`) {
                hrefs = false;
                break;
              }

              const eclVariant = href.split('--')[1];
              hrefs.push(eclVariant);
            }
            // We offer alternatives in case we cannot find the requested one.
            if (hrefs.length > 0 && page.url() !== eclFinalUrl) {
              console.error(
                `We couldn't find the story "${eclStory}" for the "${component}" component in the ECL website, but we've found these alternatives: ${hrefs.join(
                  ', '
                )}`
              );
              process.exit(1);
            }
          }
        }
        // We are ready to get the html, hopefully of the right story, otherwise we'll tell you.
        if ((await page.$('button[title="Show HTML"]')) !== null) {
          // This will reveal the markup container.
          await page.click('button[title="Show HTML"]');

          let eclMarkup = await page.evaluate(
            el => el.innerHTML,
            await page.$('code')
          );
          // The html we get is enriched by a syntax highlighter.
          eclMarkup = decode(eclMarkup.replace(/<\/?[^>]+(>|$)/g, ''));
          eclMarkup = eclMarkup.replace(/^<div>/, '');
          eclMarkup = eclMarkup.replace(/<\/div>$/, '');
          // Make the diff against the php rendered files.
          const diff = htmlDiffer.diffHtml(eclTwigMarkup, eclMarkup);
          const isEqual = htmlDiffer.isEqual(eclTwigMarkup, eclMarkup);

          console.log(
            `\nComparing ${fileName} with ECL markup from ${eclFinalUrl}:`
          );

          let successMsg = false;
          if (isEqual) {
            successMsg = '> Perfectly matching!*';
          } else {
            logger.logDiffText(diff, { charsAroundDiff: 40 });
          }

          if (successMsg) {
            console.log(successMsg);
          }
          console.log(
            `\n* For the diff we use https://www.npmjs.com/package/html-differ, with this conf:`
          );
          console.log(diffOptions);
          // We made it!
          process.exit(0);
        }
      } catch (error) {
        console.error(error.toString());
        process.exit(1);
      }
    })();
  });
