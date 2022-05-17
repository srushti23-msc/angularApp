import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor() { }

  getAddress()
  {
    let addr={

      area:'baner',
      pincode:'46545',
      locality:'town'
    }

    return addr;
  }

  getCompanyName()
  {
    return 'T-systems';
  }
}
