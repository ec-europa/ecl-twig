#!/bin/bash
shopt -s nullglob
shopt -s dotglob
jq="./node_modules/jq-cli-wrapper/vendor/jq"
packageJson="./src/ec/packages/ec-components/package.json"
mainVersion=($(<$packageJson $jq -r '.version | @sh'))
versions=($(<$packageJson $jq -r '.dependencies |.[] | @sh'))
# STEP 0 - Introduction:
echo -e "_____________________________________________________________________\n"
echo "Hello, you are about to check the release: $mainVersion"
echo -e "_____________________________________________________________________\n"

# STEP 1 - Check the version of the components to be released against the release version.
echo "Checking version of the packages:"
errors=0

for version in "${versions[@]}"; do
  if [ "$version" != "$mainVersion" ]
    then
      errors=$((errors + 1))
  fi
done

if [ "$errors" -gt 0 ]
  then
    if [ "$errors" -gt 1 ]
      then
        isOrAre='are'
        package_s='packages'
    else
      package_s='package'
      isOrAre='is'
    fi
    echo "There $isOrAre $errors $package_s with mismatched version, please check this, the version you are about to release is $mainVersion."
else
  echo "All good about the package versions ;)"
fi

echo -e "_____________________________________________________________________\n"

# STEP 2 - First check the number of packages:
echo "Checking the release packages:"
numOfPackages="$($jq -r '[(.dependencies) | keys] | flatten | length' $packageJson)"
echo "You have $numOfPackages components in your list and"
numOfFolders="$(cd ./src/ec/packages/ && echo ec-component-*/ | wc -w)"
echo "you have $numOfFolders packages folders in your filesystem.";

if [ $numOfFolders == $numOfPackages ]
  then
    echo "All good for now, then..."
elif [ $(($numOfFolders - $numOfPackages)) -lt 0 ]
  then
    echo "It seems you are about to release more components than the ones we have."
elif [ $(($numOfFolders - $numOfPackages)) -gt 0 ]
  then
    echo "Ops, why do you have $((numOfFolders - numOfPackages)) folder(s) more..?"
    echo "Looks like you might be forgetting something to release..."
fi

echo -e "_____________________________________________________________________\n"

# STEP 3 - Check the packages against the folders.
echo "Checking the packages list against the folders you have:"
packages=($(<$packageJson $jq -r '.dependencies | keys | .[] | sub("@ecl-twig/"; ""; "g") | @sh'))
packagesFolders=(./src/ec/packages/ec-component-*)
foldersArray=()

for package in "${packagesFolders[@]}"; do
  package=${package##*/}
  if [ $package == "ec-components" ]
    then
      continue
  fi
  foldersArray+=("'$package'")
done

# If we are lucky the two arrays will just be the same.
A=${foldersArray[@]}
B=${packages[@]}

if [ "$A" == "$B" ]
  then
    echo "Yes, it seems that you're all set!!! Nice ;)"
else
  echo "We found issues, trying to guess what they are about..."
  # We try to find the mismatches.
  packagesDiff=()
  for i in "${foldersArray[@]}"; do
    skip=
    for j in "${packages[@]}"; do
      [[ $i == $j ]] && { skip=1; break; }
    done
    [[ -n $skip ]] || packagesDiff+=("$i")
  done

  if [ ${#packagesDiff[@]} -eq 0 ]
  then
    echo "We can't apparently detect the problem from here..."
  else
    for error in ${packagesDiff[@]}; do
      echo "Check this package, please: $error"
    done
  fi
fi;
echo -e "_____________________________________________________________________\n"
