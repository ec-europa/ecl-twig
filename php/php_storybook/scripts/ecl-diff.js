#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, no-console,
no-param-reassign, no-restricted-syntax, no-await-in-loop */

const fs = require('fs');
const htmlDiffer = require('html-differ');
const logger = require('html-differ/lib/logger');
const puppeteer = require('puppeteer');
const decode = require('decode-html');
const yargsInteractive = require('yargs-interactive');
// Retrieve the list of packages from our fs.
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
    describe: 'The name of the base component',
  },
  eclSection: {
    type: 'list',
    describe: 'The group the component is associated with in ECL',
    choices: [
      'components',
      'page-structure',
      'components-forms',
      'components-navigation',
      'components-banners',
    ],
  },
  variant: {
    type: 'input',
    default: '',
    describe: 'The name of the twig variant (what is after the -- Ex: audio) ',
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

const extension = `.php.html`;
const diffOptions = {
  ignoreAttributes: false,
  compareAttributesAsJSON: true,
  ignoreWhitespaces: false,
  ignoreComments: true,
  ignoreEndTags: false,
  ignoreDuplicateAttributes: false,
};

const getVariant = element => {
  element = element.split('--')[1].replace(extension, '');
  return element;
};

yargsInteractive()
  .usage('$0 <command> [args]')
  .interactive(options)
  .then(result => {
    (async () => {
      try {
        const { component, eclStory, variant, eclSection, confirm } = result;

        if (!confirm) {
          console.error('Please run again yarn ecl-diff, then.');
          process.exit(1);
        }

        if (!component) {
          console.error(
            `We need to know which component and variant you want to test`
          );
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
        const twigFullPath = `${systemFolder}/${component}`;
        if (!fs.existsSync(twigFullPath)) {
          console.error(
            `It seems that "${component}" has not been rendered yet, please run yarn check:component ${component}`
          );
          process.exit(1);
        } else if (!fs.existsSync(`${twigFullPath}/${fileName}`)) {
          const files = fs.readdirSync(twigFullPath);
          let phpFiles = files.filter(file => {
            return (
              file
                .split('.')
                .slice(1)
                .join('.') === 'php.html'
            );
          });

          phpFiles = phpFiles.map(getVariant);

          console.error(
            `The "${variant}" variant for the "${component}" component has not been found in ecl-twig, but we've found these alternatives: ${phpFiles.join(
              ', '
            )}`
          );
          process.exit(1);
        }
        // Now we process the story in ECL,we try to retrieve all the stories available
        // and see if any of them matches the requested one, if none does we return the
        // list of stories available for a component, if we found them.
        const eclPath = `https://ec.europa.eu/component-library/playground/ec/?path=/story/${eclSection}-`;
        const eclFinalUrl = `${eclPath + component}--${eclStory}`;
        // Puppeteer will go to the url and try to click on the link in the left sidebar
        // to reveal the available stories.
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(eclFinalUrl);
        // Menu link.
        if ((await page.$(`div#${eclSection}-${component}`)) !== null) {
          await page.click(`div#${eclSection}-${component}`);
          // All the links to the stories.
          const stories = await page.$$(
            `a#explorercomponents-${component} + div a`
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
            if (hrefs.length > 0) {
              console.error(
                `We couldn't find the story "${eclStory}" for the "${component}" component in the ECL website, but we've found these alternatives: ${hrefs.join(
                  ', '
                )}`
              );
              process.exit(1);
            }
          }
        }
        // This will reveal the markup container.
        await page.click('button[title="Show HTML"]');

        const eclTwigMarkup = fs
          .readFileSync(`${twigFullPath}/${fileName}`, 'utf-8')
          .toString();
        let eclMarkup = await page.evaluate(
          el => el.innerHTML,
          await page.$('code')
        );
        // The html we get is enriched by a syntax highlighter.
        eclMarkup = decode(eclMarkup.replace(/<\/?[^>]+(>|$)/g, ''));
        eclMarkup = eclMarkup.replace(/^<div>/, '');
        eclMarkup = eclMarkup.replace(/<\/div>$/, '');
        // Make the diff against the php rendered files.
        const diff = htmlDiffer.diffHtml(eclMarkup, eclTwigMarkup);
        const isEqual = htmlDiffer.isEqual(eclMarkup, eclTwigMarkup);

        console.log(
          `Comparing ${fileName} with ECL markup from ${eclFinalUrl}:'`
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

        process.exit(0);
      } catch (error) {
        console.error(error.toString());
        process.exit(1);
      }
    })();
  });
