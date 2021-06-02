import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import { Post } from './models/post.model';




@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor(private http:HttpClient) { }

  getChef():Observable <any[]>{
    return this.http.get<any[]>('http://localhost:3000/chefs')
  }

  getChefById(id):Observable <any[]>{
    return this.http.get<any[]>('http://localhost:3000/chefs/'+id);
  }


  getData():Observable<Post[]>{
   return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/users')
  }




 



}
