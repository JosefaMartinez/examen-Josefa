import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { QuejasComponent } from './components/quejas/quejas.component';
import { LibrosComponent } from './components/libros/libros.component';

const routes: Routes = [
  {path: '',component:  HomeComponent},
  {path: 'Quejas', component:QuejasComponent },
  {path: 'Libros', component:LibrosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
