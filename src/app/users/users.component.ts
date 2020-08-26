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

  userList = [{name : 'John', color : 'red'},
            {name : 'Ria' , color : 'yellow'},
            {name : 'Miya' , color : 'orange'}
          ]

}
