// src/azampay/checkout.js
const azampay = require('azampay').default;
const { getToken } = require('./auth');
const config = require('../config/azampayConfig');

// Bank Checkout
async function bankCheckout(bankCheckoutPayload) {
  try {
    const accessToken = await getToken();
    const instance = new azampay.instance({ accessToken, apiKey: config.apiKey });
    const response = await instance.bankCheckout(bankCheckoutPayload);
    return response;
  } catch (error) {
    console.error('Error during bank checkout:', error);
    throw error;
  }
}

// MNO Checkout
async function mnoCheckout(mnoCheckoutPayload) {
  try {
    const accessToken = await getToken();
    const instance = new azampay.instance({ accessToken, apiKey: config.apiKey });
    const response = await instance.mnoCheckout(mnoCheckoutPayload);
    return response;
  } catch (error) {
    console.error('Error during MNO checkout:', error);
    throw error;
  }
}

module.exports = { bankCheckout, mnoCheckout };
