/* globals global */
let dtEcosystem: { [apiName: string]: { baseUrl: any; key: any } } = {
  sso: {
    baseUrl: process.env.SSO_API_URL,
    key: process.env.SSO_API_KEY,
  },
  location: {
    baseUrl: process.env.LOCATIONS_API_URL,
    key: process.env.LOCATIONS_API_KEY,
  },
  business: {
    baseUrl: process.env.BUSINESSES_API_URL,
    key: process.env.BUSINESSES_API_KEY,
  },
  notifications: {
    baseUrl: process.env.NOTIFICATIONS_API_URL,
    key: process.env.NOTIFICATIONS_API_KEY,
  },
  sites: {
    baseUrl: process.env.SITES_API_URL,
    key: process.env.SITES_API_KEY,
  },
};

export { dtEcosystem };
