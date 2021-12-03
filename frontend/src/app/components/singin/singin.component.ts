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
        if (res.token){
        
          localStorage.setItem('token',res.token)
          localStorage.setItem('id',res.id)
          if(res.roles == 'estudiante'){
            this.router.navigate(['/estudiante'])
          }else{
            this.router.navigate(['/instructor'])
          }
        
        }
        
      }
     
    )
  }
}
