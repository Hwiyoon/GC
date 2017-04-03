import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import {Http, Headers} from "@angular/http";
import {MdSnackBar} from '@angular/material'
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id : string;
  password : string;
  loginstatus: boolean;

  constructor(private _http:Http, private snackbar: MdSnackBar, private router: Router) {
    this.loginstatus = false;
  }

  ngOnInit() {
  }

  loginProcess(){

    // if(this.id === "study" && this.password === "1234") {
    //   console.log("로그인 성공")
    // }
    // else {
    //   console.log("로그인 실패")
    // }

    this.router.navigate(['/home']);
    this.loginstatus = true;

    let headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(this.id +":"+ this.password));
    headers.append("Content-Type", "application/x-www-form-urlencoded");
      this._http.get("http://www.goodcheck.co.kr/login", {headers: headers})

    .map(res => res.json())
      .subscribe(posts =>
      {
        if (posts.response) {
         // this.snackbar.open('비밀번호가 맞습니다.', '확인', {duration: 3000})
          this.router.navigate(['/home'])
        } else {
          this.snackbar.open('비밀번호가 맞지 않습니다.', '확인', {duration: 3000})
        }
        this.loginstatus = false;
      }
      )

  };
}
