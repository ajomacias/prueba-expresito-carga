import { Component, OnInit } from '@angular/core';
import { errorUtils } from 'src/app/utils/error';
import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public users: User[] = [];
  private currentId: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public handlerDelete(id: string) {
    this.currentId = id;
    this.delete();
  }

  public onSearch(value: string) {
    if (!value.length) this.getUsers();

    this.userService.search(value).subscribe({
      next: (res) => (this.users = [res.data as User]),
      error: (err) =>
        console.log(errorUtils.covertErrorToResponseAPI(err).error),
    });
  }

  private getUsers() {
    this.userService.findAll().subscribe({
      next: (res) => (this.users = res.data as User[]),
      error: (err) =>
        console.log(errorUtils.covertErrorToResponseAPI(err).error),
    });
  }

  private searchUser(idUser: string) {}

  private delete() {
    this.userService.delete(this.currentId).subscribe({
      next: (_) => {
        this.users = this.users.filter((user) => user._id != this.currentId);
        this.currentId = '';
      },
      error: (err) =>
        console.log(errorUtils.covertErrorToResponseAPI(err).error),
    });
  }
}
