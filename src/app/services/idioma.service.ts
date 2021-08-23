import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export class langChange {
    constructor() { }
    private changLayCallS = new Subject<any>();

    changLayCalled$ = this.changLayCallS.asObservable();
    changLay() {
        this.changLayCallS.next();
    }
}