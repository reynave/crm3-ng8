import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Contact, Selectedcompany, NewContact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public label: any;
  public items: any;
  public itemsSelected: any = [];
  public loading: boolean = true;
  loadingSelected: boolean = true;
  selected: any = [];
  public id: number;
  public closeResult: string;
  newContact: boolean = false;
  modalTitle: string = "";
  modalStatus: number;
  objIndex: any;
  searchText: string;
  selectModal: string = "0";
  id_user: string = "1";
  modelContact: any;
  dbCompany: boolean = false;
  selectedCompany: any = [];
  amount: string;
  total:string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private configService: ConfigService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {

    this.httpSelected();
    this.httpGet();

  }

  httpGet() {
    this.loading = true;
    this.itemsSelected = [];
    this.http.get<Contact[]>(this.configService.base_url() + 'contact', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data'];
      this.total = data['result']['total'];

      this.modelContact = new NewContact('0', '', '', '', '', '0', this.id_user, '0', '', '');
      console.log(this.total);
      this.loading = false;
    }, error => {
      //  console.log(error);
      //  console.log(error.error.text);
    });
  }


  requestEmit(event) {
    if (event) {
      this.router.navigate(['contact', event]);
    }
    this.modalService.dismissAll();
  }


  httpSelected() {

    this.http.get<Selectedcompany[]>(this.configService.base_url() + 'contact/selected', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loadingSelected = false;
      this.selected = data['result'];
      //  console.log(this.selected);
    });
  }



  submit: boolean = false;



  fn_delete() {

    this.http.post(this.configService.base_url() + 'contact/fn_delete',
      {
        "data": this.itemsSelected
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        //  console.log(data);
        this.httpGet();
        this.modalService.dismissAll();
      },
      error => {
        //  console.log(error);
        //  console.log(error.error.text);
      }
    );



  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }



  fn_check(x) {
    this.objIndex = this.items.findIndex((obj => obj.id == x.id));
    if (this.items[this.objIndex]['check'] == true) {
      this.items[this.objIndex]['check'] = false;
    } else {
      this.items[this.objIndex]['check'] = true;
    }
    var object = {
      'id': x.id,
      'name': x.name,
      'company': x.company,
    }
    var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
    if (objectSelect == -1) {
      this.itemsSelected.push(object);
    } else {
      this.itemsSelected.splice(objectSelect, 1);
    }
    //  console.log(this.itemsSelected);
  }

  fn_removeItemSelected(x) {
    this.objIndex = this.items.findIndex((obj => obj.id == x.id));
    var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
    if (this.items[this.objIndex]['check'] == false) {
      this.items[this.objIndex]['check'] = true;
    } else {
      this.items[this.objIndex]['check'] = false;
    }
    this.itemsSelected.splice(objectSelect, 1);
  }



}
