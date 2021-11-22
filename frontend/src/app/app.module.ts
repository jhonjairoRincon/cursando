import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './components/curso/curso.component';
import { HeaderComponent } from './components/header/header.component';
import { LadingComponent } from './components/lading/lading.component';
import { SinginComponent } from './components/singin/singin.component';


@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    HeaderComponent,
    LadingComponent,
    SinginComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
