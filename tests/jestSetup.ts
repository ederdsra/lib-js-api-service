// Set environment variable
const envData = {
    API_ACCOUNT_URL: "https://account-api.dev.rezserve.net",
    API_ACCOUNT_KEY: "key",

    PAYMENT_API_URL: "https://payments-api.dev.rezserve.net",
    PAYMENT_API_KEY: "key",

    SITES_API_URL: "https://sites-api.dev.rezserve.net",
    SITES_API_KEY: "key"
};

process.env = Object.assign(process.env, envData);