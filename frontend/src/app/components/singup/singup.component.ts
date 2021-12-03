import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  user = {

    username:"",
    email:"",
    password:"",
    roles: "",
    cursos:''

  }
  constructor(
    private authService : AuthService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }
  signUp(){
    this.authService.singUp(this.user)
    .subscribe( 
      res =>{
       
        localStorage.setItem('token',res.token)
        localStorage.setItem('token',res.token)
        localStorage.setItem('id',res.id)
        if(this.user.roles == 'estudiante'){
           this.router.navigate(['/estudiante'])
        }else if(this.user.roles == 'instructor'){
          this.router.navigate(['/instructor'])
        }else{
          alert('tu rol debe ser estudiante o instructor')
          this.router.navigate(['/singUp'])
        }
      
      }
     
    )
  }
}
