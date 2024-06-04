import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent implements OnInit{
 
  
  constructor(private us:UserService){}
  users:User[];

  @Output() editData=new EventEmitter<User>();
  
  ngOnInit(): void {
    this.us.getUsers().subscribe(
      (data:User[])=>{
                        this.users=data;
                      }
    )
  }
  onEditUser(user:User)
  {
    this.editData.emit(user);
  }

  onDeleteUser(id:number)
  {
    if(confirm('Are you sure you want to delete this user entry')){
      this.us.deleteUser(id).subscribe();
      window.location.reload();
    }

  }
  

}
