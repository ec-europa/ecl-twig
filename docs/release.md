# How to publish a new release

Today is the big day. You're about to publish a new version of ECL Twig templates. Congratulations!

Here are the steps to follow.

## Update the version numbers

First, make sure you're up-to-date. You are on the `master` branch, with nothing new to pull.

From the list of new commits since the last release, determine what kind of release you're making: is it a patch? A new minor?

For a patch, run:

```sh
yarn update-version patch
```

or for a new minor:

```sh
yarn update-version minor
```

If you need to jump to a higher version number (e.g. if you're skipping some ECL versions, upgrading from ECL 2.3.x to 2.6.y), you will have to provide the version number manully:

```sh
yarn update-version 2.6.0
```

If you don't provide any arguments and just run `yarn update-version`, lerna will try to infer the new version automatically from the git commits messages. This hasn't been tested yet in this repository, so please be careful when using it.

Now, commit and push your changes to the master branch or, if you're not sure about what you're doing, open a new PR with your changes.

## Publish the packages

Once the version changes have been commited, you are ready to publish the packages.

First, make sure you're properly logged in. If the command `npm whoami` doesn't return your npm username, then log in: `npm login`.

Now, all you have to sit comfortably, run the following command, confirm the publishing and watch the magic happens:

```
npm run publish
```

Note: you might be bombarded with emails from npm (one for each published package). This is the price of success.
