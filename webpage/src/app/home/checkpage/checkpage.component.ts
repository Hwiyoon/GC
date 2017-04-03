import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkpage',
  templateUrl: './checkpage.component.html',
  styleUrls: ['./checkpage.component.css']
})
export class CheckpageComponent implements OnInit {

  sideBarStatus = false;

  constructor() { }

  ngOnInit() {
  }

  changeTheSideBar(){
    this.sideBarStatus = !this.sideBarStatus
  }

}
