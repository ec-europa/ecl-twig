#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, no-console */

const fs = require('fs');
const htmlDiffer = require('html-differ');
const logger = require('html-differ/lib/logger');
const puppeteer = require('puppeteer');
const decode = require('decode-html');
const yargsInteractive = require('yargs-interactive');

const options = {
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
  story: {
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

yargsInteractive()
  .usage('$0 <command> [args]')
  .interactive(options)
  .then(result => {
    (async () => {
      try {
        let res = '';
        const { component } = result;
        const { story } = result;
        const { variant } = result;
        const eclFinalUrl = `${eclPath + component}--${story}`;
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(eclFinalUrl);
        await page.click('button[title="Show HTML"]');

        let fileName = '';
        if (variant) {
          fileName = `${component}--${variant}${extension}`;
        } else {
          fileName = component + extension;
        }
        const twigFullPath = `${systemFolder}/${component}/${fileName}`;
        if (!fs.existsSync(twigFullPath)) {
          console.error(
            `It seems that the component [${component}] you want to diff has not been rendere yet, please run yarn check:component ${component}`
          );
        }
        const eclTwigMarkup = fs.readFileSync(twigFullPath, 'utf-8').toString();
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
          `\n* The files we check are formatted with https://www.npmjs.com/package/prettier, for the diff we use https://www.npmjs.com/package/html-differ, with this conf:`
        );
        console.log(diffOptions);

        process.exit(0);
      } catch (error) {
        process.exit(1);
      }
    })();
  });
