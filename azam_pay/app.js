// src/app.js
const { bankCheckout, mnoCheckout } = require('./src/azampay/checkout');
const { disburse } = require('./src/azampay/disburse');

// Sample payloads for bank and MNO checkouts
const bankCheckoutPayload = {
  amount: '1000',
  currencyCode: 'TZS',
  merchantAccountNumber: '123456789',
  merchantMobileNumber: '255700000000',
  merchantName: 'Merchant Name',
  otp: '123456',
  provider: 'CRDB',
  referenceId: 'unique-reference-id',
};

const mnoCheckoutPayload = {
  accountNumber: '255700000000',
  amount: '1000',
  currency: 'TZS',
  externalId: 'unique-external-id',
  provider: 'Mpesa',
};

const disbursePayload = {
  source: {
    countryCode: 'TZ',
    fullName: 'Source Full Name',
    bankName: 'Source Bank Name',  // Added required field
    currency: 'TZS',  // Added required field
    accountNumber: '1234567890',  // Added required field
  },
  destination: {
    countryCode: 'TZ',
    fullName: 'Destination Full Name',
    accountNumber: '255700000000',
    bankName: 'Destination Bank Name',  // Added required field
    currency: 'TZS',  // Added required field
  },
  amount: '1000',
  externalReferenceId: 'unique-external-id',  // Added required field
  transferDetails: 'Transfer details here',  // Added required field
};

// Initiate Bank Checkout
async function initiateBankCheckout() {
  try {
    const response = await bankCheckout(bankCheckoutPayload);
    console.log('Bank Checkout Response:', response);
  } catch (error) {
    console.error('Error in bank checkout:', error);
  }
}

// Initiate MNO Checkout
async function initiateMnoCheckout() {
  try {
    const response = await mnoCheckout(mnoCheckoutPayload);
    console.log('MNO Checkout Response:', response);
  } catch (error) {
    console.error('Error in MNO checkout:', error);
  }
}

// Initiate Disbursement
async function initiateDisbursement() {
  try {
    const response = await disburse(disbursePayload);
    console.log('Disbursement Response:', response);
  } catch (error) {
    console.error('Error in disbursement:', error);
  }
}

// Example execution
initiateBankCheckout();
initiateMnoCheckout();
initiateDisbursement();
