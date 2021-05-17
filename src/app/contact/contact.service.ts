import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";
import { Contact } from './contact.model';
import { take, tap, delay, map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class ContactService {

    private _contacts = new BehaviorSubject<Contact[]>([
        {   
            id: '111',
            name: 'kenule',
            email: 'k@gmail.com',
            message: 'how can i help you'
        },
        {
            id: '222',
            name: 'kale',
            email: 'kale@gmail.com',
            message: 'yes u can help me'
        }
    ]);

    get contacts () {
        return this._contacts.asObservable();
    }

    addContact (data: Contact) {
        this._contacts.next(this._contacts.getValue().concat([data]));
        // return this.contacts.pipe(
        //     take(1),
        //     tap(contacts => {
        //         this._contacts.next(this._contacts.getValue().concat([data]));
        //     })
        // );
        
    }
}