import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CompanyDetail, Selected, UpdateCompany } from './../company';
import { NewContact } from './../../contact/contact';
import { NewBranch } from './../../branch/branch';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  public label: any;
  public items: any = [];
  myContact:any = [];
  public loading = true;
  public id:string;
  public closeResult: string;
  modalTitle:string = "";
  objIndex:any;
  searchText : string;  
  isReadOnly:boolean=true;
  modelContact:any;
  modelBranch:any;
  modealCompany: any;
  industry:any = [];
  user:any = [];
  company_class:any=[];
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private configService: ConfigService
  ) { 

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.modelContact =  new NewContact('0','','','','','0',"1",this.id,'','');
    this.modelBranch = new NewBranch(this.id,'','1','','','','','','','');
    this.httpSelected();
    this.httpGet();
  }

  requestEmit(event) {
    if(event == 'fn_newOpportunity'){
      this.httpGet();
    }
    this.modalService.dismissAll();
  }

  deal:any =[];
  archived:any =[];

  myBranch:any = [];
  myOpportunity:any = [];
  priceList:any=[];
  httpGet() {
    this.loading = true;
    this.http.get<CompanyDetail[]>(this.configService.base_url() + 'company/detail/'+ this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data'];
      this.myContact = data['result']['contact'];
      this.myOpportunity = data['result']['opportunity'];
      this.deal = data['result']['deal'];
      this.archived = data['result']['archived'];
      
      this.industry =  data['result']['industry'];
      this.user =  data['result']['user'];
      this.company_class =  data['result']['company_class'];
       
      this.modealCompany = new UpdateCompany(
        data['result']['data']['bill_country'],
        data['result']['data']['bill_city'],
        data['result']['data']['bill_code'],
        data['result']['data']['bill_state'],
        data['result']['data']['bill_street1'],
        data['result']['data']['ship_country'],
        data['result']['data']['ship_city'],
        data['result']['data']['ship_code'],
        data['result']['data']['ship_state'],
        data['result']['data']['ship_street1'],
        data['result']['data']['email'],
        data['result']['data']['fax'], 
        data['result']['data']['id_industry'],
        data['result']['data']['name'],
        data['result']['data']['phone'],
        data['result']['data']['website'],
        data['result']['data']['id_user'],
        data['result']['data']['id_company_class'] 
        
      );
      this.myBranch = data['result']['branch'];
      this.priceList = data['result']['priceList'];
    
      this.loading = false;
 
 
    },error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  selected:any = [];
  httpSelected() {

    this.http.get<Selected[]>(this.configService.base_url() + 'company/selected', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.selected = data['result'];
    });
  }
  

  open(content) {
    this.modalService.open(content, {size:"lg"}).result.then((result) => {
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

  fn_delete(){
    if(confirm('Delete this company ?')){
    
      this.http.post(this.configService.base_url() + 'company/fn_deleteSolo',
      {
        "id": this.id
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => { 
          this.router.navigate(['/company/']);

        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
    
    }
  }


  fn_update(){
    this.loading = true; 
    this.http.post(this.configService.base_url() + 'company/update',
      {
        "id": this.id,
        "data": this.modealCompany
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


  submit: boolean = false;
  onSubmitContact() { 
    this.submit = true;
    this.http.post(this.configService.base_url() + 'contact/insert',
      {
        "id": this.id,
        "data": this.modelContact
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => { 
          this.submit = false;
          this.httpGet();
          this.modelContact =  new NewContact('0','','','','','0',"1",this.id,'','');
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
  }

  onSubmitBranch() { 
    this.submit = true;
    this.http.post(this.configService.base_url() + 'branch/insert',
      {
        "id": this.id,
        "data": this.modelBranch
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => { 
          this.submit = false;
          this.httpGet();
          this.modelBranch = new NewBranch(this.id,'','1','','','','','','','');
   
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
  }

}
