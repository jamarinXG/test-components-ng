import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'register-geolocation-top',
    templateUrl: './register-geolocation-top.component.html',
    styleUrls: ['./register-geolocation-top.scss'],
    animations: [
      trigger('hideMsg', [
        state('hide', style({
          opacity: 0
      })),
      state('show', style({
          opacity: 1
      })),
        transition('* => *', animate(300))
    ]),
  ]
  })

  export class RegisterGeolocationTop {

    @Input()
    currentCountry?: string;

    @Input()
    message?: string;

    @Input()
    hide?: boolean;

    countrySelected?: string;

  constructor() {}

    get stateName() {
      return this.hide ? 'hide' : 'show';
    }
  
    closeMsg() {
      this.hide = !this.hide;
    }
  
    changeLocation(country: string | undefined) {
      this.closeMsg();
      this.countrySelected = 'Country changed to ' + country;
    }
  }

