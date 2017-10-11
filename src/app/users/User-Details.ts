import { Component, OnInit } from '@angular/core';
import { angularFireDatabase, FirebaseListObservable } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import as firebase from 'firebase/app';

@Component({
    selector: 'app-first-time-user',
    templateUrl: './first-time-user.component.html',
    styleUrl: ['./first-time-user.component.css']
})
exportclass FirstTimeUserComponent implements OnInIt{
    data: FirebaseListObservable<any[]>;

    constructor(af: angularFireDatabase) {
        this.data = angularFireDatabase.list('/UserDeails');
    }
    ngOnInit() {     
    }
}