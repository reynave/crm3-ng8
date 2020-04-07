import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
 
import { NewUser } from './user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})



export class UserComponent implements OnInit {
  public label: any;
  public items: any = [];
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
  modelContact:any;
  dbCompany: boolean = false;
  selectedCompany: any = [];
  amount:string;
  model : any = new NewUser("","","","","");
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
    this.httpGet();

  }
  parent : any = [];
  httpGet() {
    this.loading = true;
    this.itemsSelected = [];
    this.http.get(this.configService.base_url() + 'user', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data'];
      this.parent = data['result']['parent'];
    
     // this.modelContact = new NewContact('0', '', '', '', '', '0', this.id_user,'0');
      console.log(data);
      this.loading = false;
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  
  requestEmit(event) {
    if(event){
      this.router.navigate(['contact',event]);
    }
    this.modalService.dismissAll();
  }

  

  fn_insert() { 
    this.loading = true;
    this.http.post(this.configService.base_url() + 'user/insert',
      {
        "data": this.model 
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => { 
          console.log(data);
          this.loading = false;
          this.router.navigate(['/user/', data['result']['id']]); 
          this.modalService.dismissAll();
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
  }
 

  fn_delete() {

    this.http.post(this.configService.base_url() + 'contact/fn_delete',
      {
        "data": this.itemsSelected
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          console.log(data);
          this.httpGet();
          this.modalService.dismissAll();
        },
        error => {
          console.log(error);
          console.log(error.error.text);
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
      'company' : x.company,
    }
    var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
    if (objectSelect == -1) {
      this.itemsSelected.push(object);
    }else{
      this.itemsSelected.splice(objectSelect, 1);
    }
    console.log(this.itemsSelected);
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


class ItemsClass {
  public id: string; 
  public user_access: any; 
  public user_group: any; 
  public code: string; 
  public max_discount: string;  
  public currency: string; 
  public target_amount_year: string; 
  public name: string; 
  public email: string; 
  public input_date: string; 
  public status: string;  
  public child: ItemsClass[];
}


class NavigationModel {
  public title: string;
  public url?: string;
  public children: NavigationModel[];
}
