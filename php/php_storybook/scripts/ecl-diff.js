#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, no-console, no-param-reassign, no-restricted-syntax, no-await-in-loop */

const fs = require('fs');
const htmlDiffer = require('html-differ');
const logger = require('html-differ/lib/logger');
const puppeteer = require('puppeteer');
const decode = require('decode-html');
const yargsInteractive = require('yargs-interactive');

const options = {
  interactive: { default: true },
  component: {
    type: 'input',
    default: '',
    describe: 'The name of the base component (with no variant)',
  },
  variant: {
    type: 'input',
    default: '',
    describe: 'The name of the twig variant (what is after the --) ',
  },
  eclStory: {
    type: 'input',
    default: '',
    describe:
      'The name of the story in the ECL storybook (what is after the --)',
  },
};

const system = 'ec';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const systemFolder = `${distFolder}/packages/${system}`;
const eclPath =
  'https://ec.europa.eu/component-library/playground/ec/?path=/story/components-';
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
  .interactive(options)
  .then(result => {
    (async () => {
      try {
        let res = '';
        const { component } = result;
        const { eclStory } = result;
        const { variant } = result;

        if (!component) {
          console.error(
            `We need to know which component and variant you want to test`
          );
        }

        const eclFinalUrl = `${eclPath + component}--${eclStory}`;
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(eclFinalUrl);
        await page.click(`div#components-${component}`);
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
            if (eclFinalUrl === `https://ec.europa.eu${href}`) {
              hrefs = false;
              break;
            }

            const eclVariant = href.split('--')[1];
            hrefs.push(eclVariant);
          }

          if (hrefs.length > 0) {
            console.error(
              `We couldn't find the variant ${eclStory} in the ECL website, but we've found these: ${hrefs.join(
                ', '
              )}`
            );
          }
        }

        await page.click('button[title="Show HTML"]');

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
            `It seems that "${variant}" has not been found, but we've found these: ${phpFiles.join(
              ', '
            )}`
          );
          process.exit(1);
        }

        const eclTwigMarkup = fs
          .readFileSync(`${twigFullPath}/${fileName}`, 'utf-8')
          .toString();
        let eclMarkup = await page.evaluate(
          el => el.innerHTML,
          await page.$('code')
        );
        eclMarkup = decode(eclMarkup.replace(/<\/?[^>]+(>|$)/g, ''));
        eclMarkup = eclMarkup.replace(/^<div>/, '');
        eclMarkup = eclMarkup.replace(/<\/div>$/, '');

        const diff = htmlDiffer.diffHtml(eclMarkup, eclTwigMarkup);
        const isEqual = htmlDiffer.isEqual(eclMarkup, eclTwigMarkup);
        console.log(
          `Comparing ${fileName} with ECL markup from ${eclFinalUrl}:'`
        );

        if (isEqual) {
          res = '> Perfectly matching!*';
        } else {
          res = logger.logDiffText(diff, { charsAroundDiff: 40 });
        }

        console.log(`${res}`);
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
