import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from '../models/userSingin.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8000/api'
  
  constructor(
    private http : HttpClient,
    private router : Router

    ) { }
  singUp(user: any){
    return this.http.post<any>(this.url + "/auth/register",user)

  }
  singIn(user: any){
    
    return this.http.post<any>(this.url + "/auth/login",user)
  }

  loggedIn(){
    
      return localStorage.getItem('token')  
    }
  getToken(){
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/singIn'])
  }
  
}
