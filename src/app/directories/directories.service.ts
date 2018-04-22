import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Directory } from '../models/directories.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DirectoriesService {

  constructor(private http:HttpClient) {}

  //private userUrl = 'http://localhost:8080/user-portal/user';
  private directoryListUrl = '/api';

  public getDirectories() {
    return this.http.get<Directory[]>(this.directoryListUrl);
  }

  public deleteDirectory(directory) {
    return this.http.delete(this.directoryListUrl + "/"+ directory.id);
  }

  public createDirectory(directory) {
    return this.http.post<String>(this.directoryListUrl, directory.path);
  }

  public getDirFiles(directory){
    return this.http.get<String[]>(this.directoryListUrl+ "/"+ directory.id);
  }

}
