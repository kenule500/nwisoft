import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from './profile.model';


@Injectable({providedIn: 'root'})
export class HomeService {
    private _profile = new BehaviorSubject<Profile>({
        name: 'kenule nwinee',
        about: `My name is Kenule Nwinee, a full stack developer with 4 years experience,
                With a knowledge of angular, ionic, nestjs, currently working at Busy Expand located at rumuigbo port harcourt.
                I develop application on all platforms

                `,
        picture: '../../assets/all-app.png'
    });
  
    get profile() {
        return this._profile.asObservable();
    }


}