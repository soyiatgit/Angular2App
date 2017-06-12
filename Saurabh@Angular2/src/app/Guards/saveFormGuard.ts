import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AddUserComponent } from '../adduser.component';

@Injectable()
export class SaveFormsGuard implements CanDeactivate<AddUserComponent> {

    //implement the below method from CanDeactivate interface, the method gets three params as shown below,
    // call any method of component instance to provide a boolean or promise or Observable return value.
    // The return IDBCursorWithValue should BeforeUnloadEvent of type : Observable<boolean>|Promise<boolean>|boolean
    canDeactivate(component: AddUserComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return component.isAnyDataUnsaved();
    }

}