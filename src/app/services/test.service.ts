import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  data = [
    { fName: 'Prosenjit', lName: 'Saha' },
    { fName: 'Souvik', lName: 'Dey' },
    { fName: 'Nabanita', lName: 'Roy' },
    { fName: 'Estilo', lName: 'Chatterjee' },
  ];

  ob = [
    {id:1,firstName:'Shouvik',lastName:'Chatterjee',age:30,gender:"Male"},
    {id:2,firstName:'Chotu',lastName:'Dey',age:32,gender:"Male"},
    {id:3,firstName:'Prosen',lastName:'Saha',age:26,gender:"Male"},
    {id:4,firstName:'Indra',lastName:'Dasgupta',age:30,gender:"Male"},
    {id:5,firstName:'Arup',lastName:'Sarkar',age:36,gender:"Male"},
    {id:6,firstName:'Bina',lastName:'Pani',age:20,gender:"Female"},
    {id:7,firstName:'Aish',lastName:'Rai',age:26,gender:"Female"},
    {id:8,firstName:'Sush',lastName:'Sen',age:29,gender:"Female"}    
];

}