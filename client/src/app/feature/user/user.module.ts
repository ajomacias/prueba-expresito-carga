import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component'

const routes : Route[] = [
    {
        path : '',
        component : UserComponent
    },
    {
        path : 'view',
        component : FormComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes), FormsModule, CommonModule

],
    exports: [],
    declarations: [UserComponent, FormComponent, SearchComponent],
    providers: [],
})

export class UserModule { }
