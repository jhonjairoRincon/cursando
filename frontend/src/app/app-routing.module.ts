import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadingComponent } from './components/lading/lading.component';
import { SinginComponent } from './components/singin/singin.component';

const routes: Routes = [
  {
    path: '',
    component:LadingComponent
  },
  {
    path: "singIn",
    component: SinginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
