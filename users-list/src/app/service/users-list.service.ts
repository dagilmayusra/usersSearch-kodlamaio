import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private httpClient:HttpClient) { }

  getUser(value:string):Observable<User>{
    return this.httpClient.get<User>("https://api.github.com/users/"+ value);
  }
}
