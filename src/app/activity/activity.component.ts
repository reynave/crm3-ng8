import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
  constructor(
    private http: HttpClient,
    private router : Router,
    private modalService: NgbModal,
    config: NgbModalConfig,
  ) { 

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
      
    this.http.get('https://s01.crm.co.id/api/demo/', { responseType: 'json' })
      .subscribe(data => { this.items = data['activity']; console.log(this.items); this.loading = false; });
   
  }
  fn_next(){
    this.router.navigate(['/lead/1']);
    this.modalService.dismissAll();
  }

  modal_updateStatus(content, title, status) {
    this.modalTitle = title;
    this.modalStatus =  status;
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(content, json) {
    this.json = json;
    console.log(this.json);
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {
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

  fn_check(x){
    console.log(x);

    this.objIndex = this.items.findIndex((obj => obj.unique == x.unique ));

    
    if(    this.items[this.objIndex]['check'] == true){
      this.items[this.objIndex]['check'] = false;
    }else{
      this.items[this.objIndex]['check'] = true;
    }
    var object = { 
      'unique' : x.unique,
      'name' : x.name,
      'status'  : x.status,
    }
   
    var objectSelect = this.itemsSelected.findIndex((obj => obj.unique == x.unique ));
    console.log(objectSelect);
    if(objectSelect == -1){

      this.itemsSelected.push(object);
    }

    console.log(this.objIndex, x.unique);
  }

  fn_removeItemSelected(x){
    this.objIndex = this.items.findIndex((obj => obj.unique == x.unique ));
    var objectSelect = this.itemsSelected.findIndex((obj => obj.unique == x.unique ));
    
    if(    this.items[this.objIndex]['check'] == false){
      this.items[this.objIndex]['check'] = true;
    }else{
      this.items[this.objIndex]['check'] = false;
    }
    this.itemsSelected.splice(objectSelect, 1);
  }


}
