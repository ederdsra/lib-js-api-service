const siteData = {
    calls : {
        getSites: {
            url: process.env.SITES_API_URL + "/v1/sites",
            params: {
                "headers": {
                    "APIKey": process.env.SITES_API_KEY, 
                    "Authorization": "", 
                    "DT-API-KEY": process.env.SITES_API_KEY
                }, 
                "params": {}
            },
            response: {
                data: {},
                status: 200,
                statusText: 'OK',
                headers: {},
                config: {}
            }
        }
    }
};

export default siteData;