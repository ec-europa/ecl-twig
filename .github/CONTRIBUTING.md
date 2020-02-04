# Contribution guidelines

## Git conventions

Please follow these [git conventions](https://github.com/ec-europa/europa-component-library/blob/v2-dev/docs/conventions/git.md) for branches and commits.

## Release process

1.  Each merged PR should be labeled with one of the [labels](https://github.com/ec-europa/ecl-twig/labels) named `tag: ...` to indicate what kind of change it is.

2.  Start off from branch `develop`. Pull latest changes.

3.  Create a new branch `chore/release-` and add the release version number. Follow same `chore/` branching pattern for small tweaks on the release if necessary. (such as spelling corrections in documentation)

4.  Create a change log entry for the release:

    - You'll need an [access token for the GitHub API](https://help.github.com/articles/creating-an-access-token-for-command-line-use/). Save it to this environment variable: `export GITHUB_AUTH="..."`
    - Run `npm run changelog`. The command will find all the labeled pull requests merged since the last release and create a change log entry with all the changes and links to PRs and their authors.
    - Copy and paste the output from the changelog generator to `CHANGELOG.md`.

5.  Make sure the version number in `lerna.json` is set to the last version published. Then, run `npm run update-version`. It will increment the version number of the updated packages.

6.  Open a pull request with changes you've made from the previous steps. Don't apply any `tag: *` label on it.

7.  Merge the pull request to `develop`.

8.  Locally, pull latest `develop` and merge it to `master`. This merge means you can now release `mater`.

9.  In order to be able to publish packages on `npm`, make sure you are logged in. `npm whoami` will show your npm username if you are logged in. Otherwise, please run `npm login`.

10. To publish the latest changes run `npm run publish` **Do not run `npm publish`!**

11. The CLI will ask for a confirmation about the new package versions. Please verify them carefully before accepting.

12. Once you have accepted, the script will start publishing the packages. Go to your `npm` user profile and organisation `@ecl-twig` and double-check packages have actually been published.

13. Push the locally-synched `master` to the remote. This marks the release as complete.

14. Finally, create a GitHub Release with the same text as the changelog generated at step 3.
