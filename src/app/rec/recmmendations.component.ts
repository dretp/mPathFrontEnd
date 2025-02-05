import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import {recmm as recData} from "../Models/recData";
@Component({
  selector: 'app-recmmendations',
  imports: [CommonModule,AsyncPipe],
  templateUrl: './recmmendations.component.html',
  styleUrl: './recmmendations.component.css'
})
export class RecmmendationsComponent {

  reccmendations:any[]

  constructor() {
    this.reccmendations = recData;
  }



}
