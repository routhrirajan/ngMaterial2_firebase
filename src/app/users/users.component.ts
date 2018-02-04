import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
displayedColumns = ['Name', 'Email', 'Mobile', 'Status', 'Signed In', 'Created'];
  constructor() { }

  ngOnInit() {
  }

}
