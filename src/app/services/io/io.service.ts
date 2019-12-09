import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IoService {

  constructor() {}

  api(options: any) {
    const syncRequest = new XMLHttpRequest();
    let response: any;
    const headers: any = {};

    try {
      syncRequest.open(options.method, options.url, false);
      if (options.headers) {
        for (const header of Object.keys(options.headers) ) {
          syncRequest.setRequestHeader(header, options.headers[header]);
        }
      }

      if (options.method === 'POST' && options.body) {
        syncRequest.setRequestHeader('Content-type', 'application/json');
        syncRequest.send(JSON.stringify(options.body));
      } else {
        syncRequest.send();
      }

      response = {
        status: syncRequest.status,
        body: undefined,
      };

      try {
        response.body = JSON.parse(syncRequest.responseText);
      } catch (e) {
        response.body = {
          error: e,
          on: 'front',
          responseText: syncRequest.responseText
        };
      }

    } catch (error) {
      response = {
        status: 500,
        body: { error, on: 'front' },
      };
    }

    return response;
  }
}
