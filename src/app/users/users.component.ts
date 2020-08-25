import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fruits = [{name : 'apple', color : 'red'},
            {name : 'banana' , color : 'yellow'},
            {name : 'orange' , color : 'orange'}
          ]

}
