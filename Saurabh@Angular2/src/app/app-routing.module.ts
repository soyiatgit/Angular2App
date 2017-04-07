import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { UserComponent }  from './user.component';
import { AddUserComponent }  from './adduser.component';
import { ParentComponent }  from './parent.component';
import { ChildComponent }  from './child.component';

const routes: Routes = [
    { path: '', redirectTo : '/users', pathMatch :'full' },
    { path: 'users', component: UserComponent },
    { path: 'addUsers', component: AddUserComponent },
    { path: 'editUsers/:name', component: AddUserComponent },
    { path: 'parent-child', component: ParentComponent },
    //the below wild card path matches any url entered in browser, so if the entered url doesn't match any of the above url; the below component is displayed.
    //Make sure this is at the end else it will always get matched first and no other routes will be looked up for matching. This can be used for displaying 
    //Page not found kind of components
    { path: '**', component: AddUserComponent }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], 
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

export const RoutedComponents = [UserComponent, AddUserComponent, ParentComponent, ChildComponent];
