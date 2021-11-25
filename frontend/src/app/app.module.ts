import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './components/curso/curso.component';
import { HeaderComponent } from './components/header/header.component';
import { LadingComponent } from './components/lading/lading.component';
import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';


import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './interseptor.guard';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { InformacionComponent } from './components/informacion/informacion.component';


@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    HeaderComponent,
    LadingComponent,
    SinginComponent,
    SingupComponent,
    EstudianteComponent,
    TecnologiasComponent,
    InformacionComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
