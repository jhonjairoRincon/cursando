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
  getCursosUsuario(){
    return this.httpClient.get<cursos[]>(this.URL + '/cursosUsuarios')
  }
}
