import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service'; 
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  public label: any;
  public items: any;
  public itemsSelected: any = [];
  public loading = true;
  public id:number;
  public closeResult: string;
  json :any;
  newContact: boolean = false;
  modalTitle:string = "";
  modalStatus:number;
  objIndex:any;
  searchText : string;

  showActivity:boolean=false;

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


  httpGet() {
    this.loading = true;
    this.itemsSelected = [];
    this.http.get(this.configService.base_url() + 'activity', {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data); 
      this.items = data['result']['data']; 
      this.loading = false;
    });
  }

  fn_next(){
    this.router.navigate(['/lead/1']);
    this.modalService.dismissAll();
  }

  modal_updateStatus(content, title, status) {
    this.modalTitle = title;
    this.modalStatus =  status;
    this.modalService.open(content, {size: 'lg'});
  }

  open(content, json) {
    
    this.json = json;
    this.modalService.open(content, {size: 'lg'});
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
    }else{
      this.itemsSelected.splice(objectSelect, 1);
    }
    // console.log(this.itemsSelected);
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
