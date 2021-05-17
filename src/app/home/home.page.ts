import {  HomeService } from './home.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from './profile.model';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  abilities: any[];
  automaticClose = false;

  profile: Profile;
  private contactSub: Subscription;
  constructor(private homeService: HomeService, private contactService: ContactService) {}

  ngOnInit() {
    this.contactSub = this.contactService.contacts.subscribe(data => {
      console.log(data);
    })
  }

  ionViewDidEnter(){
    this.contactSub = this.contactService.contacts.subscribe(data => {
      console.log(data);
    })
  }

 

  ngOnDestroy() {
    if (this.contactSub) {
      this.contactSub.unsubscribe()
    }
  }
}
