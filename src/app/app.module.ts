import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectoriesComponent } from './directories/directories.component';
import { AppRoutingModule } from './app.routing.module';
import {DirectoriesService} from './directories/directories.service';
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material";
import {dirfilesComponent} from "./dirfiles/dirfiles.component";

//import {AddDirectoriesComponent} from './Directories/add-Directories.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectoriesComponent,
    dirfilesComponent
    //AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers: [DirectoriesService],
  bootstrap: [AppComponent],
  entryComponents: [dirfilesComponent]
})
export class AppModule { }
