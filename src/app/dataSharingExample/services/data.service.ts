import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  get data() {
    return [1, 2, 3, 4, 5];
  }
}
