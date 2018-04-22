import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectoriesComponent } from './directories/directories.component';
//import {AddDirectoriesComponent} from './directories/add-directories.component';

const routes: Routes = [
  { path: 'directories', component: DirectoriesComponent }
  //{ path: 'add', component: AddDirectoriesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
