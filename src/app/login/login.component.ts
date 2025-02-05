import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {LoginService} from '../login.service';
import {HomeComponent} from '../home/home.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

   username : string = ""
   password: string  = ""
  data:any

  constructor(private router : Router,private loginSvc : LoginService) {


  }

  ngOnInit() {


  }
    homePage(){
    this.router.navigate(['/home']);
  }
  onSubmit(){
    this.loginSvc.login(this.username,this.password).subscribe((result) => {
      this.data = result;
      // redirect to login page
     // this.homePage()
     console.log(result)
     if(result.token.length > 0)
     {
       this.homePage()
       console.log(this.username + this.password)
     }
     console.log(this.username + this.password)
     console.log("cannot login invalid username or password");

    });

  }

}

