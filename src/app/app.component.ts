import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import {RecmmendationsComponent as rec} from "./rec/recmmendations.component"
import {LoginComponent} from "./login/login.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HomeComponent, HttpClientModule, CommonModule,LoginComponent ,rec],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  data: any;
  /*s
  constructor(private http: HttpClient) {
    this.http
      .get("http://localhost:4000/department/list")
      .subscribe((response) => {
        this.data = response;
        console.log(response);
      });
      */
}
