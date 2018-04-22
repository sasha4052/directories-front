
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Directory} from "../models/directories.model";

@Component({
  selector: 'app-dirfiles',
  templateUrl: './dirfiles.component.html',
  styleUrls: ['./dirfiles.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class dirfilesComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<dirfilesComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public close() {
    this.matDialogRef.close();
  }

}
