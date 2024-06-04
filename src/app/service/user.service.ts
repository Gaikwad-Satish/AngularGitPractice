import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  saveUser(user:User)
  {
     return this.http.post('http://localhost:3000/user',user);
     

  }
  getUsers()
  {
    return this.http.get('http://localhost:3000/user');
    
  }
  updateUser(user:User)
  {
    return this.http.put('http://localhost:3000/user/'+user.id,user);
  }
  deleteUser(id:number)
  {
    return this.http.delete('http://localhost:3000/user/'+id);
  }
  











}
