import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RecmmendationsComponent as rec } from "./rec/recmmendations.component";
import { PatientComponent as patient } from "./patient/patient.component";
export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "recmmendation",
    component: rec,
  },
  {
    path: "patient",
    component: patient,
  },
];
