import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { RouterModule, Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic SW50dUNhbmRpZGF0ZTpJbnR1VGVzdA=='
  })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  

  constructor(private router: Router, private http: HttpClient, private localStorageService: LocalStorageService) { } 

  httpHeaders:any;
  options:any;
  url:any;
  username:any;
  password:any;

  user = {
    Username: "IntuCandidate",
    Password: "IntuTest"
  }
 
  ngOnInit() {
    this.url = 'https://dl5opah3vc.execute-api.ap-south-1.amazonaws.com/latest/login';
  }

  clicked() {
    if(this.username == 'IntuCandidate' && this.password == 'IntuTest'){
      return this.http.post<any>(this.url, this.user ,httpOptions).subscribe(
        res => {
          if(res){          
            this.localStorageService.storeOnLocalStorage(res.token);
            this.router.navigateByUrl('/devices');
          }
        },
        err => {
  
        }
    )
  }    else {
    alert("Incorrect Username and Password")
  }
}
 
}
