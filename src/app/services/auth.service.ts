import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(username:string,password:string){
    if(username=== 'Kutty' && password=== '1409')
    {
      return 200;
    }else{
      return 403;
    }
  }
}
