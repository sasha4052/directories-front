import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Directory } from '../models/directories.model';
import { DirectoriesService } from './directories.service';
import {MatDialog} from "@angular/material";
import {dirfilesComponent} from "../dirfiles/dirfiles.component";

@Component({
  selector: 'app-directories',
  templateUrl: './directories.component.html',
  styles: []
})
export class DirectoriesComponent implements OnInit {

  directories: Directory[];
  files: String[];
  directory: Directory = new Directory();
  constructor(private router: Router, private directoriesService: DirectoriesService,public dialog: MatDialog) {

  }


  ngOnInit() {
    this.directoriesService.getDirectories()
      .subscribe( data => {
        this.directories = data;
      });
  };

  deleteDirectory(directory: Directory): void {
    this.directoriesService.deleteDirectory(directory)
      .subscribe( data => {
        this.directories = this.directories.filter(u => u !== directory);
      })
  };

  createDirectory(): void {
    this.directoriesService.createDirectory(this.directory)
      .subscribe( data => {
        if(data != null) alert("Директория создана успешно.");
        else alert("Такой директории не существует.");
        this.directoriesService.getDirectories()
          .subscribe( data => {
            this.directories = data;
          });
      });

  };

  public openModal(directory: Directory){
    this.directoriesService.getDirFiles(directory).subscribe(data => {
      this.dialog.open(dirfilesComponent, {data : {files : data, dir: directory.path}})
    })

  }


}
