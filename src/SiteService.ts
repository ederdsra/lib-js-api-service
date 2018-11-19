import { ApiService } from './base/ApiService';

class _siteService extends ApiService {
  // let my:string = "";
  // constructor() {
  //   this.my = 'aaaaaa';
  // }
  site() {
    return this.call('sites', '/v1/sites', {}, 'GET');
  }

  // add(itemName) {
  //   return http
  //     .request({
  //       url: this.baseUrl + "appdata/" + this.appKey + "/Groceries",
  //       method: 'POST',
  //       headers: this.getHeaders(),
  //       content: JSON.stringify({
  //         Name: itemName
  //       })
  //     })
  //     .then(this.validateCode)
  //     .then(this.getJson)
  //     .then(data => {
  //       console.info(`Added item with id ${data._id}.`)
  //       return {
  //         id: data._id,
  //         name: itemName,
  //         done: false,
  //         deleted: false
  //       }
  //     })
  // }

  // update(item) {
  //   console.log('putting', item, JSON.stringify({
  //     Name: item.name,
  //     Done: item.done,
  //     Deleted: item.deleted
  //   }))
  //   return http
  //     .request({
  //       url: this.baseUrl + "appdata/" + this.appKey + "/Groceries/" + item.id,
  //       method: 'PUT',
  //       headers: this.getHeaders(),
  //       content: JSON.stringify({
  //         Name: item.name,
  //         Done: item.done,
  //         Deleted: item.deleted
  //       })
  //     })
  //     .then(this.validateCode)
  //     .then(this.getJson)
  //     .then(data => {
  //       console.info(data)
  //       console.info(`Updated item with id ${item.id}.`)
  //       return item
  //     })
  // }

  // delete(item) {
  //   console.log('deleting ', item)
  //   return http
  //     .request({
  //       url: this.baseUrl + "appdata/" + this.appKey + "/Groceries/" + item.id,
  //       method: 'DELETE',
  //       headers: this.getHeaders()
  //     })
  //     .then(this.validateCode)
  //     .then(this.getJson)
  //     .then(data => {
  //       console.info(data)
  //       console.info(`Updated item with id ${item.id}.`)
  //       return item
  //     })
  // }

  // getHeaders(toAppend = {}) {
  //   return Object.assign({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Kinvey ' + this.token,
  //   },
  //   toAppend)
  // }
}

export const SiteService = new _siteService();
