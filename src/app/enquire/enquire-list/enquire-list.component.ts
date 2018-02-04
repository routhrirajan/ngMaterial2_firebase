import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEnquireUser } from 'app/enquire';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from 'app/shared';

@Component({
    selector: 'app-enquiry-list',
    templateUrl: 'enquire-list.component.html'
})

export class EnquireListComponent implements OnInit {
    enquiries: Observable<IEnquireUser[]>
    constructor(private route: ActivatedRoute,
        private _userService: AuthenticationService
    ) { }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.enquiries = data['enquiries'];
        });
    }

    CreateUser(email: string) {
        const password = this.randomPassword(6);
        this._userService.emailSignUp(email, password);
    }
    randomPassword(length: number): string {
        const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890';
        let pass = '';
        for (let x = 0; x < length; x++) {
            const i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }
        return pass;
    }
}
