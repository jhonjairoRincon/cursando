import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  
  constructor(
    private cursosService : CursosService
  ) { }

  ngOnInit(): void {
    this.cursosService.getCursos()
    .subscribe(
      res => {
        this.cursosService.Cursos = res;
        console.log(res)
      }
    )
  }

}
