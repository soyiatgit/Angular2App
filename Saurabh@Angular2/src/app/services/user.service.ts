import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

@Injectable()
export class UserService {

    constructor(private _http: Http) { }
    private getUserUrl = 'data/data.json';
    private users = [
        { personal: { name: 'Saurabh', age: 24 }, role: 'Web Developer', hobby: 'Coding' },
        { personal: { name: 'Sunil', age: 24 }, role: 'Manual Tester', hobby: 'Drinking tea' },
        { personal: { name: 'Digvijay', age: 24 }, role: 'Onsite Tester', hobby: 'Gaming' },
        { personal: { name: 'Vinod', age: 24 }, role: 'C# Developer', hobby: 'Flirting' }
    ];

    getUsers() {
        //return this.users;
        //code for real time urls
        //return this._http.get(this.getUserUrl)
        //        .map((response: Response) => response.json())
        //        .catch(this._errorHandler);
        //return Observable..interval(3000).from(this.users);
        return Observable
            .interval(500)
            .take(this.users.length) // end the observable after it pulses N times
            .map((i) => { return this.users[i]; });
    }

    addUser(user: any) {
        this.users.push(user);
    }

    _errorHandler(error: Response) {
        return Observable.throw(error || "Server error");
    }
}