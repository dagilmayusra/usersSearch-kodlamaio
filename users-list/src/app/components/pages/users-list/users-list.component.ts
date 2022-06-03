import { UsersListService } from './../../../service/users-list.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users:User[];

  constructor(private usersListService:UsersListService) { }

  ngOnInit(): void {
  }

  userName:string='';

  clickMe(){
    let list=[];
    this.usersListService.getUser(this.userName).subscribe(data =>{
      list.push(data);
    })
    this.users=list;
  }

}
