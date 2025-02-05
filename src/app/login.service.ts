import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, Observer, tap} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://localhost:7041/auth';

  constructor(private http:HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password }).pipe(
      tap((rsp: any) => {
        localStorage.setItem('token', rsp.token);
      })
    );
  }
}
