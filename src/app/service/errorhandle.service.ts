import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandleService {

  constructor() { }

  log(e){
    console.log(e);
  }
}
