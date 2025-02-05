import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import { HomeService } from "../home.service";
import { paitentData } from "../Models/patientData";

import { department, IJson, IpatientData } from "./department";

@Component({
  selector: "app-home",
  imports: [CommonModule, AsyncPipe],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  data: any;
  //paitent: any[];

   constructor(private dataService: HomeService) {

    //this.paitent = paitentData;
 }



  ngOnInit(): void {
    this.dataService.getBodyJson().subscribe((result) => {
      this.data = result;
      console.log(result);
    });
  }

  //API request for the search function


}
