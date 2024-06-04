import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit{
  constructor(private fb:FormBuilder,private us:UserService){}
  userReg:FormGroup;
  
  @Input() userToBeEdit:User;
  flag:boolean=false;

  ngOnInit(): void {
   this.userReg=this.fb.group(
    {
      id:[0],
      name:[],
      emailId:[],
      password:[]
    });
  
   this.us.getUser()
  }
  ngOnChanges(){
    if(this.userReg!=null)
      {
        this.userReg.patchValue(
          {
            id:this.userToBeEdit.id,
            name:this.userToBeEdit.name,
            emailId:this.userToBeEdit.emailId,
            password:this.userToBeEdit.password
          }
        );
        this.flag=true
      }
  }
  onSubmitUserForm(){
    if(!this.flag){
      this.us.saveUser(this.userReg.value).subscribe();
      alert('User created successfully')
      this.userReg.reset();
    }
    else{
      this.us.updateUser(this.userReg.value).subscribe();
      alert('User datails updated successfully..!')
      this.userReg.reset();
      console.log("git push success")
      window.location.reload();
    }
   
 
  }

  


}
