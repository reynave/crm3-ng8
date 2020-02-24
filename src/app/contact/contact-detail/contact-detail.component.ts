import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CompanyDetail, Selected } from './../../company/company';  
import {  UpdateContact  } from './../contact';
import { NewOpportunity } from './../../opportunity/opportunity';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  public label: any;
  public company: any = [];
  public lead_source: any = [];
  public title: any = [];
  public user: any = [];
  public items: any = [];
  
  public loading = true;
  public id: string;
  public closeResult: string;
  newContact: boolean = false;
  index: number;
  searchText: string;
  selectedCompany: any = [];
  model:any=[];
  dataOpportunity:any=[];
  dataOpportunityStage : any = [];
  loadingSelected: boolean = false;
  selected: any = [];
  isReadOnly:boolean=true;
  newOpportunity:any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
    private modalService: NgbModal,
    config: NgbModalConfig,
    private configService: ConfigService
  ) {
    
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;

    this.httpGet();
  }

  requestEmit(event) {
    if(event == 'fn_newOpportunity'){
      this.httpGet();
    }
    this.modalService.dismissAll();
  }



  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'contact/detail/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data'];
      this.company = data['result']['company'];
      this.lead_source = data['result']['lead_source'];
      this.title = data['result']['title'];
      this.user = data['result']['user'];
      this.dataOpportunity = data['result']['opportunity'];
      this.dataOpportunityStage = data['result']['stage'];
 
      this.newOpportunity = new NewOpportunity(
        data['result']['data']['id_user'],
        '',
        '',
        this.id,
        data['result']['data']['id_company'], 
        [],
        "","");

      this.model = new UpdateContact(
        data['result']['data']['id_company'],
        data['result']['data']['email'],
        data['result']['data']['first_name'],
        data['result']['data']['id_lead_source'],
        data['result']['data']['id_title'],
        data['result']['data']['id_user'],
        data['result']['data']['last_name'],
        data['result']['data']['mobile'],
        data['result']['data']['phone'],
        data['result']['data']['position'],
        data['result']['data']['department'],
        
      );
      console.log(this.model);
      console.log(data);
      this.loading = false;
    },error => {
      console.log(error);
      console.log(error.error.text);
    });
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


  fn_update() {

    this.loading = true;
    console.log(this.model);
    this.http.post(this.configService.base_url() + 'contact/update',
      {
        "id": this.id,
        "data": this.model
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          console.log(data); 
          this.httpGet();
          this.loading = false;
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
  }

 
  fn_delete() {
    if (confirm('Delete this Contact ?')) {

      this.http.post(this.configService.base_url() + 'contact/fn_deleteSolo',
        {
          "id": this.id
        }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/contact/']);

        },
        error => {
          // console.log(error);
          // console.log(error.error.text);
        }
      );

    }
  }


  fn_newOpportunity(){
    this.loading = true;
    console.log(this.model);
    this.http.post(this.configService.base_url() + 'opportunity/fn_newOpportunity',
      {
        "id": this.id,
        "data": this.newOpportunity
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          console.log(data);  
          this.loading = false;
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
  }

  
}
