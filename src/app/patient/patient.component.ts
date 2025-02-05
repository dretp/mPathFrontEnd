import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";

@Component({
  selector: "app-patient",
  imports: [CommonModule, AsyncPipe],
  templateUrl: "./patient.component.html",
  styleUrl: "./patient.component.css",
})
export class PatientComponent {
  constructor() {}
}
