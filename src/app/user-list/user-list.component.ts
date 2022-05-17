import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userserv: UserProfileService) {

   let cname=this. userserv.getCompanyName();

   console.log(cname);
  }

  ngOnInit(): void {
  }

}
