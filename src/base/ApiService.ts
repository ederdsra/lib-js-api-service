import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { dtEcosystem } from './dt-ecosystem';

/**
 * Parent service class. Has common configs and methods.
 */
export class ApiService {
  /**
   * function to call business api endpoint
   * @param api ex: (sso, business, location)
   * @param url ex: (/businesses) preference don't use first bar
   * @param query it's and what will be posted or used as get
   * @param method (post, get, put, path, delete) and so on
   **/
  call(apiName: string, endpoint: string, query: object, method: string, bearerToken: string = '') {
    return new Promise((resolve, reject) => {
      let call: any = null;
      let baseUrl = dtEcosystem[apiName].baseUrl.replace(/\/$/, '');

      let headers = {
        'DT-API-KEY': dtEcosystem[apiName].key,
        APIKey: dtEcosystem[apiName].key,
        Authorization: bearerToken ? bearerToken : '',
      };

      switch (method.toUpperCase()) {
        case 'GET':
          call = axios.get(baseUrl + endpoint, {
            params: query,
            headers: headers,
          });
          break;
        case 'POST':
          call = axios.post(baseUrl + endpoint, query, {
            headers: headers,
          });
          break;

        default:
          reject('Method not found');
          break;
      }
      call
        .then((r: any) => {
          console.log(r);
          resolve(r);
        })
        .catch((e: any) => {
          console.error(e);
          reject(e);
        });
    });
  }

//   validateCode(response: any) {
//     return new Promise((resolve, reject) => {
//       if (response.statusCode >= 200 && response.statusCode < 300) {
//         resolve(response);
//       }
//       console.log('Response with code: ' + response.statusCode + '\nContent: ' + response.content.toString());
//       reject('Response with code: ' + response.statusCode + '\nContent: ' + response.content.toString());
//     });
//   }

//   getJson(response: any) {
//     return new Promise((resolve, reject) => {
//       console.info('Content: ' + response.content.toString());
//       resolve(response.content.toJSON());
//     }).catch(e => {
//       console.error('Error parsing JSON response: ' + e);
//       throw 'Error parsing JSON response: ' + e;
//     });
//   }
}
