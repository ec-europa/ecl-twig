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

If you need to jump to a higher version number (e.g. if you're skipping some ECL versions, upgrading from ECL 2.3.x to 2.6.y), you will have to provide the version number manually:

```sh
yarn update-version 2.6.0
```

If you don't provide any arguments and just run `yarn update-version`, lerna will try to infer the new version automatically from the git commits messages. This hasn't been tested yet in this repository, so please be careful when using it.

At this point your release should be ready, to help you feeling comfortable with the next steps we provide a script to spot typical errors in a release, like a mismatched version of a package or a missing component in the package.json of the ec-components package. You can run the script and if everything is ok, after a manual double check, you can proceed, otherwise we will try to give you hints on finding the issues in the release.

```sh
yarn check-release
```

Now, commit and push your changes to the `master` branch or, if you're not sure about what you're doing, open a new PR with your changes. Please name the commit or the PR `chore: release ECL Twig x.y.z` (don't forget to replace `x.y.z` by the actual version number!)

## Publish the packages

Once the version changes have been committed, you are ready to publish the packages.

First, make sure you're correctly logged in. If the command `npm whoami` doesn't return your npm username, then log in: `npm login`.

Now, all you have to sit comfortably, run the following command, confirm the publishing and watch the magic happens:

```
npm run publish
```

Note: you might be bombarded with emails from npm (one for each published package), this is the price of success.

## Create a new GitHub release

Final step: create a new GitHub release from the `master` branch. The tag version should be prefixed with `v`, e.g. `v2.3.0`. As a title, you can use something like `2.3.0 (2019-06-14)` (like in the root `CHANGELOG.md` but without the link). And for the description of the release, you can copy-paste the entry generated in the root `CHANGELOG.md` as well (I know, we're duplicating a lot of information...).

Now, enjoy a well-deserved break! :wink:


## Troubleshooting

We experienced some failures while publishing on npm sometimes and we could not fully understand the reason for those but we could, at least, find a procedure that worked in these cases.
The result of the *npm run publish* command was a partial publication of the packages in the release (it happened with a different number of packages correctly published) and after the script stopped returning an error we had all the packages.json files modified in the various components with the addition of a "githead" property with an hash.
The first approach was to reset these files and try again which resulted in a failure due to the fact that is not possible on npm to publish a version of a package on top of an existing one, even if that was only partially published.
We then chose to make a patch, releasing a new version to prevent this error, the result was again a failure for the same reason, despite the fact that no release was ever attempted before with that version.
Finally we managed to fix this partial release by running npm run publish and after each failure resetting the master branch.
So:

```
npm run publish
```
then, after the failure:
```
git reset --hard
```

and then again.
```
npm run publish
```
until the whole set of packages gets published.
