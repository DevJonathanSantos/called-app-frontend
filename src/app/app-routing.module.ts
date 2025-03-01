import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './modules/user/pages/list/list.component';
import { UserDetailComponent } from './modules/user/pages/detail/detail.component';

import { DepartmentListComponent } from './modules/department/pages/list/list.component';
import { DepartmentDetailComponent } from './modules/department/pages/detail/detail.component';

import { ChurchListComponent } from './modules/church/pages/list/list.component';
import { ChurchDetailComponent } from './modules/church/pages/detail/detail.component';

import { CalledListComponent } from './modules/called/pages/list/list.component';
import { CalledDetailComponent } from './modules/called/pages/detail/detail.component';




const routes: Routes = [
    { path: 'user-list', component: UserListComponent },
    { path: 'user-edit/:id', component: UserDetailComponent },
    { path: 'user-register', component: UserDetailComponent },

    { path: 'department-list', component: DepartmentListComponent },
    { path: 'department-edit/:id', component: DepartmentDetailComponent },
    { path: 'department-register', component: DepartmentDetailComponent },

    { path: 'church-list', component: ChurchListComponent },
    { path: 'church-edit/:id', component: ChurchDetailComponent },
    { path: 'church-register', component: ChurchDetailComponent },

    { path: 'called-list', component: CalledListComponent },
    { path: 'called-register', component: CalledDetailComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
