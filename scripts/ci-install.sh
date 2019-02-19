# Exit the script on any command with non 0 return code
set -e

# Go to project root
cd "$(dirname "$0")"
cd ..

# Install dependencies with yarn
yarn install

# Make sure git is clean (no changes to yarn.lock)
if [ -n "$(git status --porcelain)" ]; then
  echo "Your git status is not clean. Please update yarn.lock. Aborting.";
  exit 1;
fi
