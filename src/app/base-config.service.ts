import { Injectable } from '@angular/core';
import { UserProfileService } from './user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class BaseConfigService {

  url="www.something";
  constructor(private usersrv: UserProfileService) {

    let user=this.usersrv.getAddress();
    console.log(user);

   }
}
