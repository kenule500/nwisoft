import { ContactService } from './contact.service';
import { Contact } from './contact.model';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit, OnDestroy {
  contact: Contact[];
  private contactSub: Subscription;
  map: any;
  infoWindows: any = [];
  markers: any = [
    {
      title: "Nwisoft",
      latitude: "4.846350",
      longitude: "6.987080"
    }
  ]

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  
  constructor(private contactService: ContactService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.contactSub = this.contactService.contacts.subscribe(data => {
      this.contact = data;
    })
    
  }

  ionViewDidEnter(){
    this.showMap();
  }

  async presentAlert() {
    let alert = this.alertCtrl.create({
      message: 'Your Message has been received ',
      buttons: ['Dismiss']
    });
    (await alert).present();
  }

  onSubmit(form: NgForm) {
    const data: Contact = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    };
    
    this.contactService.addContact(data);
    form.resetForm();
    this.presentAlert();
  }


  showMap() {
    const location = new google.maps.LatLng(4.846350, 6.987080);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement,  options);
    this.addMarkersToMap(this.markers)

  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' +
                              '<p>Latitude: ' + marker.latitude +'</p>' +
                              '<p>Longitude: ' + marker.longitude +'</p>' +
                            '</div>';

    let infoWindow = new google.maps.infoWindow({
      content: infoWindowContent
    });

    marker.addListener('mouseover', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow)
  }

  closeAllInfoWindows() {
    for (let window of this.infoWindows) {
      window.close();
    }
  }

  
  ngOnDestroy() {
    if (this.contactSub) {
      this.contactSub.unsubscribe();
    }
  }
}
