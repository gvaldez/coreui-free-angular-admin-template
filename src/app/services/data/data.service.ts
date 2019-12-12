import { Injectable } from '@angular/core';

import { IoService } from '@service/io';
import { environment as env } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor (
    private io: IoService,
  ) {}

  gatherData () {
    const token = localStorage.getItem('acces_token');
    const response = this.io.api({
      url: `${env.auth.host}/api/bi/data`,
      method: 'GET',
      headers: {  Authorization: `Bearer ${token}` }
    });

    console.log(response);

    if (response.status === 200) {
      return response.body;
    }

    return [];
  }


}
