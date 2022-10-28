import { Component, OnInit } from '@angular/core';
import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users : User[] =[];
  private currentId : string = '';
  
  constructor(
    private userService : UserService
  ) { }


  ngOnInit(): void {
    this.getUsers();
  }

  public handlerDelete(id : string){
   this.currentId = id;
   this.delete();
  }

  public onSearch(value : string){
   
    if(!value.length) this.getUsers();

    this.userService.search(value).subscribe(
      (res)=> {
        this.users = [res.data as User]
      }
    )

  }


  private getUsers(){
    this.userService.findAll().subscribe(
      (res)=> {
        if(!res.success) console.log(res.data)
        else this.users = res.data as User[]
      }
    )
  }

  private searchUser(idUser : string){

    

  }

  private delete(){

    this.userService.delete(this.currentId).subscribe(
      (res)=>{
        if(!res.success) console.log(res.data)
        else{
          this.users = this.users.filter(user=>user._id !=this.currentId);
          this.currentId = '';
        }
      }
    )

  }

}
