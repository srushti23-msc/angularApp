import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  mydata
    : any
  constructor(private contus: HttpClient) {

    contus.get("https://reqres.in/api/users?page=2").subscribe((data) => { this.mydata = data })
  }

  ngOnInit(): void {
  }

}
