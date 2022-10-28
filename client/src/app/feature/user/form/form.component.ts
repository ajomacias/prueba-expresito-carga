import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../types/user';
import { initialUserSave, UserSaveDto } from '../types/userSaveDto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  public user : UserSaveDto = initialUserSave();
  
  
  constructor(
    private userService : UserService,
    private routed : ActivatedRoute,
    private router : Router
  ) { }


  ngOnInit(): void {
    this.routed.queryParams.subscribe(params=>this.getUser(params));
  }

  private getUser(params : Params){
   console.log(params['user'])
    const id = params['user'] || null;

    if(!id) return;

    this.userService.find(id).subscribe(
      (res)=>{
        if(!res.success) console.log('error to load user')
        else this.user= res.data as UserSaveDto
      });
  }

  public handlerClickAccept(){
   
    this.saveOrUpdate();

  }

  public handlerClickCancel(){

    this.user = initialUserSave();

    this.router.navigate(['/user'])

  }

  private saveOrUpdate(){

    if(this.user._id) this.update()
    else this.save()

  }

  private save(){
    this.userService.save(this.user).subscribe(
      (res)=>{
        if(!res.success) console.log(res.data)
        else this.router.navigate(['/user'])
        
      }
    )
  }

  private update(){
    this.userService.update(this.user).subscribe(
      (res)=>{
        if(!res.success) console.log(res.data)
        else this.router.navigate(['/user'])
      }
    )
  }

}
