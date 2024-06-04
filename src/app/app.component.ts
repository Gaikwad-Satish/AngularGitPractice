import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
patchEditData($event: User) {
throw new Error('Method not implemented.');
}
editUser: User;
  
  
  ngOnInit(): void {
    
    
  }
  title = 'user_crud_app';

  
  
 



}
