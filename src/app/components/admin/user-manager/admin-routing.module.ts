import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAllUsersComponent } from '../list-all-users/list-all-users.component';
import { UpdateUserComponent } from '../../users/update-user/update-user.component';

const routes: Routes = [
    {
        path: '', component: ListAllUsersComponent,
        children: [
            { path: '', component: ListAllUsersComponent },
            { path: 'edit/:id', component: UpdateUserComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }