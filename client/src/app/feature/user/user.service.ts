import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSaveDto } from './types/userSaveDto';
import { ResponseAPI } from './types/responseApi';

@Injectable({
  providedIn : 'root'
})
export class UserService {

  private url = environment.url + '/user';

  constructor(
    private http : HttpClient
  ) { }

  find(id : string){
    return this.http.get<ResponseAPI>(`${this.url}/${id}`);

  }

  findAll():Observable<ResponseAPI>{
    return this.http.get<ResponseAPI>(this.url);
  }

  delete(id : string){
    return this.http.delete<ResponseAPI>(`${this.url}/${id}`)
  }

  update(user : UserSaveDto){

    return this.http.put<ResponseAPI>(this.url, user)

  }

  save(user : UserSaveDto){

    return this.http.post<ResponseAPI>(this.url, user)
  }
  search(userId : string){


    return this.http.get<ResponseAPI>(`${this.url}/search/${userId}`)
    
  }
}