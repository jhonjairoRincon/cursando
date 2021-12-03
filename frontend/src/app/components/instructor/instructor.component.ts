import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service'
import { UserService } from 'src/app/services/user.service';
import { userSingUp } from 'src/app/models/userSingUp';


@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  cursos = {
    
    name: '',
    categoria: '',
    autor: '',
   
   
}
  public usuario: any = [];
 
  constructor( 
    public userService : UserService,
    public cursosService : CursosService
    ) { }


  ngOnInit(): void {

   const id =  localStorage.getItem('id')
   const user = this.userService.getUsuario(id)
    .subscribe(
      (res: any) => {
        this.usuario = this.userService.user = res;
        
        this.getCursosUser(this.usuario.username)
       
      }
    )
   
  }
  getCursosUser(userName:any){
    this.cursosService.getCursosUsuario(userName)
    .subscribe(
      res => {
        this.cursosService.Cursos = res;
        
      }
    )
  }

  crearCurso(){
    const id =  localStorage.getItem('id')
    const user = this.userService.getUsuario(id).subscribe(
      (res:any)=>{
        this.usuario = this.userService.user = res;
        
      }
    )
    this.cursos.autor = this.usuario.username
    this.cursosService.postCrearCurso(this.cursos)
    .subscribe(
      res =>{
         console.log('curso creado')
      }
    )    
  }

}
