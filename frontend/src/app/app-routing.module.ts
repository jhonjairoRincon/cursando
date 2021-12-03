import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { LadingComponent } from './components/lading/lading.component';
import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';

import { AuthGuard } from './auth.guard'

const routes: Routes = [
  {
    path: '',
    component:LadingComponent
  },
  {
    path: "singIn",
    component: SinginComponent
  },
  {
    path: "singUp",
    component: SingupComponent
  },
  {
    path: "estudiante",
    component: EstudianteComponent,
    canActivate :[AuthGuard]
  },
  {
    path: "instructor",
    component: InstructorComponent,
    canActivate :[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
