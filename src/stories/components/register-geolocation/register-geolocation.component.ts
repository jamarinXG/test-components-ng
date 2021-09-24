import { Component, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'register-geolocation-modal',
    templateUrl: './register-geolocation.component.html'
  })
  export class RegisterGeolocationModal {

    @Input()
    currentCountry?: string;

    @Input()
    modalBody?: string;

    closeResult?: string;
    countrySelected?: string;
    countryList: Array<{code: string, text: string}> = [{code: "ja", text: "Japonés"}, {code: "en", text: "Inglés"}, {code: "de", text: "Holandés"}, {code: "zh", text: "Chino"}];


    constructor(
        private modalService: NgbModal
        ) {}
  
        openModal(content: any) {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    dismiss(reason?: any) {
      this.modalService.dismissAll(reason);
    }

    changeLocation(country?: string) {
      this.countrySelected = 'Country changed to ' + country;
      this.modalService.dismissAll('By changing country');
    }
  }

