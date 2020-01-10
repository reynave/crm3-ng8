import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LeadDetail, SelectUser, Opportunity } from './../lead';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styles: ['td {    vertical-align: text-top;    padding-bottom: 8px;}']
})
export class LeadDetailComponent implements OnInit {
  public label: any;
  public items: any = [];
  public loading = true;
  public id:number;
  public closeResult: string;
  newContact: boolean = false;
  modalTitle:string = "";
  modalStatus:number;
  objIndex:any;
  searchText : string;  
  modelOpportunity:any;
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
    this.httpGet();
    this.httpSelectUser();
  }

  lead_status:any = [];
  httpGet() {
    this.loading = true;
    this.http.get<LeadDetail[]>(this.configService.base_url() + 'lead/detail/'+ this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {

    
      this.items = data['result']['data'];
      this.lead_status = data['result']['lead_status'];
      // console.log(data);
      this.modelOpportunity = new Opportunity(data['result']['data']['opportunity'],data['result']['data']['id_user']);
      this.loading = false;
    });
  }

  user:any = [];
  httpSelectUser(){
    this.http.get<SelectUser[]>(this.configService.base_url() + 'lead/httpSelectUser/', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.user = data['result']['user']; 
      // console.log(data);
    });
  }

  onChangeLeadStatus(id){
 
    id = id.replace(/ +/g, "");
    var res = id.split(":");
    // console.log(res[1]);
    this.http.post(this.configService.base_url() + 'lead/onChangeLeadStatus',
    {
      "id_lead": this.id,
      "id_lead_status":res[1]
    }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        // console.log(data);
        this.items['lead_status_color'] = data['result']['data']['color'];
        this.items['lead_status_name'] = data['result']['data']['name'];
        
      },
      error => {
        // console.log(error);
        // console.log(error.error.text);
      }
    );
  }

  open(content) {
    this.modalService.open(content,{size:"lg"}).result.then((result) => {
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
    if(confirm('Delete this lead ?')){
    
      this.http.post(this.configService.base_url() + 'lead/fn_deleteSolo',
      {
        "id_lead": this.id
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          // console.log(data);
          this.router.navigate(['/lead/']);

        },
        error => {
          // console.log(error);
          // console.log(error.error.text);
        }
      );
    
    }
  }


  get diagnostic() { return JSON.stringify(this.modelOpportunity); }
  loadingConvert: boolean = false;
  onConvert() {
    this.loading = true;
    this.loadingConvert = true;
  
    this.http.post(this.configService.base_url() + 'lead/convert',
      {
        "id": this.id,
        "data": this.modelOpportunity
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          // console.log(data);
          this.loadingConvert = false; 
          this.loading = false;
          this.modalService.dismissAll('just closed');
          this.router.navigate(['/lead/converted/',this.id ]);
        },
        error => {
          // console.log(error);
          // console.log(error.error.text);
        }
      );
  }

}
