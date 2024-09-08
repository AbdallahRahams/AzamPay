// src/azampay/disburse.js
const azampay = require('azampay').default;
const { getToken } = require('./auth');
const config = require('../config/azampayConfig');

async function disburse(disbursementPayload) {
  try {
    const accessToken = await getToken();
    const instance = new azampay.instance({ accessToken, apiKey: config.apiKey });
    const response = await instance.disburse(disbursementPayload);
    return response;
  } catch (error) {
    console.error('Error during disbursement:', error);
    throw error;
  }
}

module.exports = { disburse };
