import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor (
  ) { }

  sleep(ms:number) {
   return new Promise(resolve => setTimeout(resolve, ms));
 }

}
