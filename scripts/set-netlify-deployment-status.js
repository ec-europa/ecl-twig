#!/usr/bin/env node

const path = require('path');
const fetch = require('node-fetch');

const run = async () => {
  const {
    GH_TOKEN,
    DRONE_REPO,
    DRONE_COMMIT_SHA,
    DRONE_COMMIT_BRANCH,
    DRONE_BUILD_LINK,
  } = process.env;

  if (!GH_TOKEN) {
    console.info("Won't be able to communicate Netlify deployment to Github.");
    console.info('GH_TOKEN environment variable is required!');
    return;
  }

  if (!DRONE_REPO || !DRONE_COMMIT_SHA) {
    console.info(
      'Current script depends on Drone CI 0.8 environment variables.'
    );
    console.info(
      'Please see https://0-8-0.docs.drone.io/environment-reference'
    );
    console.log('Required: DRONE_REPO, DRONE_COMMIT_SHA');
    return;
  }

  let payload = {};

  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const deploymentResult = require(path.resolve(
      __dirname,
      '../netlify_deployment_result.json'
    ));

    if (DRONE_COMMIT_BRANCH && DRONE_COMMIT_BRANCH === 'master') {
      payload = {
        state: 'success',
        target_url: deploymentResult.url,
        description: 'Production deployment completed!',
        context: 'drone/netlify',
      };
    } else {
      payloadNetlify = {
        state: 'success',
        target_url: deploymentResult.deploy_url,
        description: 'Preview ready!',
        context: 'drone/netlify',
      };

      payloadDrone = {
        state: 'success',
        target_url: deploymentResult.deploy_url,
        description: 'Build completed!',
        context: 'continuos-integration/drone/push',
      };
    }
  } catch (error) {
    payload = {
      state: 'error',
      target_url: DRONE_BUILD_LINK,
      description: 'Could not get data about Netlify deployment.',
      context: 'drone/netlify',
    };
  }

  // @see https://developer.github.com/v3/repos/statuses
  await fetch(
    `https://api.github.com/repos/${DRONE_REPO}/statuses/${DRONE_COMMIT_SHA}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-Charset': 'utf-8',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GH_TOKEN}`,
      },
      body: JSON.stringify(payloadNetlify),
    }
  );

  await fetch(
    `https://api.github.com/repos/${DRONE_REPO}/statuses/${DRONE_COMMIT_SHA}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-Charset': 'utf-8',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GH_TOKEN}`,
      },
      body: JSON.stringify(payloadDrone),
    }
  );

  console.log('Status check for the drone build successfully updated!');
};

try {
  run();
} catch (error) {
  console.error(error);
}
