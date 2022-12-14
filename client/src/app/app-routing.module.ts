import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';

const routes: Routes = [
  {
  path : '',
  component : HomeComponent
  },
  {
    path : 'user',
    loadChildren : ()=>
    import('./feature/user/user.module').then(m=> m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
