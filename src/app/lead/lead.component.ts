import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Lead, Selected, Company, Newlead } from './lead';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
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
  selectModal:string= "0";
  leadStatus: string = "0";
  id_lead_status:string = "1";
  id_user: string;
  model:any;
  dbCompany: boolean = false;
  selectedCompany: any = [];
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
    this.id_user = this.configService.id_user();
    this.model = new Newlead(this.id_user, '1', '1', '0', '', '', '', '', '', '', '', '', '', '', '', '0','1');
    this.httpGet();
    this.httpSelected();
  }
  
  httpGet() {
    this.loading = true;
    this.itemsSelected = [];
    this.http.get<Lead[]>(this.configService.base_url() + 'lead', {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.configService.errorToken(data);  
      this.items = data['result']['data']; 
      this.loading = false;
    });
  }

  httpSelected() {

    this.http.get<Selected[]>(this.configService.base_url() + 'lead/selected', {
      headers: this.configService.headers()
    }).subscribe(data => { 
      this.configService.errorToken(data); 
      this.loadingSelected = false;
      this.selected = data['result'];
      // console.log(this.selected);
    });
  }

  httpCompany() {
    // console.log("httpCompany");
    this.loadingSelected = false;
    this.http.get<Company[]>(this.configService.base_url() + 'lead/getCompany', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loadingSelected = false;
      this.selectedCompany = data['result']['data'];
      // console.log(this.selectedCompany);
    });
  }

  submit:boolean= false;
  
  onSubmit(value = "") {

    this.submit= true;
    this.http.post(this.configService.base_url() + 'lead/insert',
      {
        "data": this.model
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          // console.log(data);
          this.submit= false;
          if (value == 'next') {
            this.httpGet();
            this.model = new Newlead(this.id_user, '1', '1', '0', '', '', '', '', '', '', '', '', '', '', '', '0','1');
          }
          else {
            this.router.navigate(['/lead/',data['result']['id_lead'] ]);
            this.modalService.dismissAll();
          }
        

        },
        error => {
          // console.log(error);
          // console.log(error.error.text);
        }
      );
  }

  get diagnostic() { return JSON.stringify(this.model); }

  fn_updateLeadStatus() {
    this.http.post(this.configService.base_url() + 'lead/fn_updateLeadStatus',
    {
      "data": this.itemsSelected,
      "id_lead_status" :this.id_lead_status
    }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        // console.log(data);
        this.httpGet();
        this.modalService.dismissAll();
      },
      error => {
        // console.log(error);
        // console.log(error.error.text);
      }
    );
  }

  fn_delete() {
  
    this.http.post(this.configService.base_url() + 'lead/fn_delete',
    {
      "data": this.itemsSelected
    }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        // console.log(data);
        this.httpGet();
        this.modalService.dismissAll();
      },
      error => {
        // console.log(error);
        // console.log(error.error.text);
      }
    );



  }

  open(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
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
      return `with: ${reason}`;
    }
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
