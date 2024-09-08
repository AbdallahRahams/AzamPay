// src/azampay/auth.js
const azampay = require('azampay').default;
const config = require('../config/azampayConfig');

async function getToken() {
  const payload = {
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    apiKey: config.apiKey,
    appName: config.appName,
    env: config.env,
  };

  try {
    const response = await azampay.getToken(payload);
    return response.data.accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
}

module.exports = { getToken };
