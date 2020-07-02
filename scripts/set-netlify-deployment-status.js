#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, no-console */
const fetch = require('node-fetch');

const run = async () => {
  const NETLIFY_API = 'https://api.netlify.com/api/v1';

  const {
    GH_TOKEN,
    DRONE_REPO,
    DRONE_COMMIT_SHA,
    DRONE_COMMIT_BRANCH,
    DRONE_BUILD_LINK,
    DRONE_BUILD_NUMBER,
    DEPLOY_CONTEXT,
    NETLIFY_SITE_ID,
    NETLIFY_AUTH_TOKEN,
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

  const context = DEPLOY_CONTEXT;
  let payload = {};

  try {
    const deploymentsResponse = await fetch(
      `${NETLIFY_API}/sites/${NETLIFY_SITE_ID}/deploys`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Accept-Charset': 'utf-8',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${NETLIFY_AUTH_TOKEN}`,
        },
      }
    );

    const deployments = await deploymentsResponse.json();

    const currentDeployment = deployments.find(
      deployment => deployment.title === `Drone build: ${DRONE_BUILD_NUMBER}`
    );

    const siteDeploymentResponse = await fetch(
      `${NETLIFY_API}/sites/${NETLIFY_SITE_ID}/deploys/${currentDeployment.id}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Accept-Charset': 'utf-8',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${NETLIFY_AUTH_TOKEN}`,
        },
      }
    );

    const siteDeployment = await siteDeploymentResponse.json();

    if (DRONE_COMMIT_BRANCH && DRONE_COMMIT_BRANCH === 'master') {
      payload = {
        state: 'success',
        target_url: siteDeployment.deploy_ssl_url,
        description: 'Production deployment completed!',
        context,
      };
    } else {
      payload = {
        state: 'success',
        target_url: siteDeployment.deploy_ssl_url,
        description: 'Preview ready!',
        context,
      };
    }
  } catch (error) {
    payload = {
      state: 'error',
      target_url: DRONE_BUILD_LINK,
      description: 'Could not get data about Netlify deployment.',
      context,
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
      body: JSON.stringify(payload),
    }
  );

  console.log('Status on pull request successfully updated!');
};

try {
  run();
} catch (error) {
  console.error(error);
}
