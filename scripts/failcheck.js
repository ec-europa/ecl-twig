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
    DRONE_JOB_STATUS,
  } = process.env;

  if (!GH_TOKEN) {
    console.info('GH_TOKEN environment variable is required!');
    return;
  }

  if (!DRONE_REPO || !DRONE_COMMIT_SHA || !DRONE_JOB_STATUS) {
    console.info(
      'Current script depends on Drone CI 0.8 environment variables.'
    );
    console.info(
      'Please see https://0-8-0.docs.drone.io/environment-reference'
    );
    console.log('Required: DRONE_REPO, DRONE_COMMIT_SHA, DRONE_BUILD_STATUS');
    return;
  }
  console.log(DRONE_JOB_STATUS);
  let payload = {};

  try {
    payloadDrone = {
      state: DRONE_JOB_STATUS,
      target_url: DRONE_BUILD_LINK,
      description: 'Build completed!',
      context: 'continuous-integration/drone/push',
    };
  } catch (error) {
    payloadDrone = {
      state: 'error',
      target_url: DRONE_BUILD_LINK,
      description: 'Could not get data about Netlify deployment.',
      context: 'continuous-integration/drone/push',
    };
  }

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
  console.log('Status check for the drone build successfully updated with status:' + DRONE_JOB_STATUS);
};


try {
  run();
} catch (error) {
  console.error(error);
}
