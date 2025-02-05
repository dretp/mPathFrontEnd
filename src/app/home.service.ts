import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { department as Department, IJson } from "./home/department";
import { Observable, Observer } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class HomeService {
  private url = "https://localhost:7041/patient/list";
  private authToken = "";
  constructor(private http: HttpClient) {}

  getBodyJson(): Observable<any[]> {
    console.log("About to grab token for patient list");
    this.authToken = localStorage.getItem("token") || "";
    console.log(`Token grabbed for patient list ${this.authToken}`);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "MHP-TOKEN": this.authToken,
      }),
    };

    return this.http.get<any[]>(this.url, httpOptions);
  }
}
