import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { cursos } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private URL = 'http://localhost:8000/api'
  
  Cursos: cursos[] = [];

  constructor(
    private httpClient : HttpClient
    ) { }

  getCursos(){
    return this.httpClient.get<cursos[]>(this.URL + '/cursos')
  }
  getCursosUsuario(autor: any){
    return this.httpClient.get<cursos[]>(this.URL + '/autor/'+autor)
  }
  postCrearCurso(curso : any){
    return this.httpClient.post<cursos[]>(this.URL+'/cursos',curso)
  }


}
