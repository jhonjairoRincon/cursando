import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { userSingUp } from '../models/userSingUp'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'http://localhost:8000/api'
  user: userSingUp[] = [];
  constructor(
    private httpClient : HttpClient
  ) { }
  getUsuario(id: any){
    return this.httpClient.get<userSingUp[]>(this.URL + '/user/'+id)
  }
  

}
