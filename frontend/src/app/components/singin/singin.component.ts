import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  user = {
    email: "",
    password: ""
  }
  constructor(
      private authService : AuthService,
      private router : Router
    ) { }

  ngOnInit(): void {
  }
 
  signIn(){
    this.authService.singIn(this.user)
    .subscribe( 
      res =>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this.router.navigate(['/estudiante'])
      }
     
    )
  }
}
