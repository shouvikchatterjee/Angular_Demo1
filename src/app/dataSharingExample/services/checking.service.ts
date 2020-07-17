import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckingService {

  constructor() { }
  check(){
    console.log('Can you check pls?');
  }
}
