import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CompanyDetail, Selected } from './../company';
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
  public id:number;
  public closeResult: string;
  modalTitle:string = "";
  objIndex:any;
  searchText : string;  

  modelContact:any;
  modelBranch:any;
 
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
    this.modelContact =  new NewContact('0','','','','','0',"1",this.id);
    this.modelBranch = new NewBranch(this.id,'','1','','','','','','','');
    this.httpSelected();
    this.httpGet();
  }
  myBranch:any = [];
  myOpportunity:any = [];
  httpGet() {
    this.loading = true;
    this.http.get<CompanyDetail[]>(this.configService.base_url() + 'company/detail/'+ this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data'];
      this.myContact = data['result']['contact'];
      this.myOpportunity = data['result']['opportunity'];
     
      this.myBranch = data['result']['branch'];
      
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


  get diagnosticContact() { return JSON.stringify(this.modelContact); }
  get diagnosticBranch() { return JSON.stringify(this.modelBranch); }


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
          this.modelContact =  new NewContact('0','','','','','0',"1",this.id);
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
