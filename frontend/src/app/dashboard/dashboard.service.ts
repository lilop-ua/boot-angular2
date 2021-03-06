import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class DashboardService {

    constructor(private http: Http) {

    }

    getSmth(url: string): Observable<Response> {
        return this.http.get(url);
    }

}
