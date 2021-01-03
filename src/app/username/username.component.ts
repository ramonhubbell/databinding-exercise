import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userName = '';
  // isFieldEmpty = true;

  constructor() { }

  ngOnInit(): void {
  }

  // onUpdateUsername (event: Event){
  //   this.userName = (<HTMLInputElement>event.target).value;
  // }

  // activateButton(){
  //   this.isFieldEmpty = true;
  //   console.log(this.isFieldEmpty);
  // }

  // resetUserName(){
  //   this.userName = '';
  // }

}
