import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { errorUtils } from 'src/app/utils/error';
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
    const id = params['user'] || null;

    if(!id) return;

    this.userService.find(id).subscribe(
      {
        next : (res)=> this.user = res.data as UserSaveDto,
        error : (err)=>console.log(errorUtils.covertErrorToResponseAPI(err).error)
      }

    )
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
      {
        next : (_)=> this.router.navigateByUrl('/user'),
        error : (err)=>console.log(errorUtils.covertErrorToResponseAPI(err).error)

      }
    )
  }

  private update(){
    this.userService.update(this.user).subscribe(
     {
      next : (_)=> this.router.navigateByUrl('/user'),
      error : (err)=>console.log(errorUtils.covertErrorToResponseAPI(err).error)
     }
    )
  }

}
