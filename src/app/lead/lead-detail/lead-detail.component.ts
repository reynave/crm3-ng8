import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LeadDetail, SelectUser, Opportunity, UpdateLead, LeadConvert } from './../lead';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.css']
})
export class LeadDetailComponent implements OnInit {
  public label: any;
  public items: any = [];
  public loading = true;
  public id: number;
  public closeResult: string;
  newContact: boolean = false;
  modalTitle: string = "";
  modalStatus: number;
  objIndex: any;
  searchText: string;
  isReadOnly: boolean = true;
  lead: any = [];
  lead_status: any = [];
  customer_class : any = [];
  title: any = [];
  lead_source: any = [];
  industry: any = [];
  showNewActivity :boolean=false;
  activity:any=[];
  opportunity_stage:any = [];
  leadConvert:any = [];
  company:any = []; 
  user: any = [];
  contacts:any=[];

  accessRules : any = [];
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
    this.accessRules = this.configService.access_right();
    console.log('accessRules',this.accessRules);
    this.httpGet(); 
  }

  product: any = [];
  httpGet() {
    this.items = {
      company: {
        new: false,
        id: "",
        name: "",
      },
      lead_status: {
        id: "",
        name: "",
        color: "",
      }
    }

    this.loading = true;
    this.http.get<LeadDetail[]>(this.configService.base_url() + 'lead/detail/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {

      console.log(data);
      this.items = data['result']['lead'];
      this.title = data['result']['title'];
      this.lead_source = data['result']['lead_source'];
      this.industry = data['result']['industry'];
      this.user = data['result']['user'];
      this.lead_status = data['result']['lead_status'];
      this.product = data['result']['product'];
      this.customer_class = data['result']['customer_class'];
      this.opportunity_stage =  data['result']['opportunity_stage'];
      this.company =  data['result']['company'];


      this.lead = new UpdateLead(
        data['result']['lead']['id_user'],
        data['result']['lead']['id_title'],
        data['result']['lead']['id_lead_source'],
        data['result']['lead']['id_industry'],
        data['result']['lead']['first_name'],
        data['result']['lead']['last_name'],
        data['result']['lead']['email'],
        data['result']['lead']['mobile'],
        data['result']['lead']['phone'],
        data['result']['lead']['company'],
        data['result']['lead']['website'],
        data['result']['lead']['address_street'],
        data['result']['lead']['address_city'],
        data['result']['lead']['address_state'],
        data['result']['lead']['address_code'],
        data['result']['lead']['address_country'],
        data['result']['lead']['opportunity'], 
        data['result']['lead']['position'],
        data['result']['lead']['amount'],

      );

      this.leadConvert = new LeadConvert(
        true,
        '',
        true,
        '',
        data['result']['lead']['opportunity'],
        data['result']['lead']['amount'],
        data['result']['lead']['id_user'],
        ''
      );

      // console.log(data);
      this.loading = false;
    });
  }

  fn_selectContact(id){
    console.log(id);
    this.loading = true;
    this.http.get(this.configService.base_url() + 'lead/selectContact/' + id, {
      headers: this.configService.headers()
    }).subscribe(data => { 
      
      this.contacts = data['result']['contacts'];  
      console.log(this.contacts);
      this.loading = false;
    });
  }
 
  onChangeLeadStatus(id) {

    id = id.replace(/ +/g, "");
    var res = id.split(":");
    this.http.post(this.configService.base_url() + 'lead/onChangeLeadStatus',
      {
        "id_lead": this.id,
        "id_lead_status": res[1]
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.items['lead_status']['color'] = data['result']['data']['color'];
        this.items['lead_status']['name'] = data['result']['data']['name'];

      },
      error => {
        // console.log(error);
        // console.log(error.error.text);
      }
    );
  }

  open(content) {
    this.modalService.open(content, { size: "lg" }).result.then((result) => {
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

  fn_delete() {
    if (confirm('Delete this lead ?')) {

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

  fn_deleteProduct(x) {

    var objIndex = this.product.findIndex((obj => obj.id == x.id ));
    this.product.splice(objIndex, 1);

    this.http.post(this.configService.base_url() + 'lead/fn_deleteProduct',
      {
        "id": x.id
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
      },
      error => {
         console.log(error);
         console.log(error.error.text);
      }
    );
  }

  loadingConvert: boolean = false;
  onConvert() {
    this.loading = true;
    this.loadingConvert = true;

    this.http.post(this.configService.base_url() + 'lead/convert',
      {
        "id": this.id,
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        // console.log(data);
        this.loadingConvert = false;
        this.loading = false;
        this.modalService.dismissAll('just closed');
        this.router.navigate(['/lead/converted/', this.id]);
      },
      error => {
        // console.log(error);
        // console.log(error.error.text);
      }
    );
  }

  fn_update() {
    this.loading = true;
    this.http.post(this.configService.base_url() + 'lead/update',
      {
        "id_lead": this.id,
        "data": this.lead
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => { 
        console.log(data);
        this.httpGet();
      },
      error => {
        this.loading = false;
        console.log(error);
        console.log(error.error.text);
      }
    );

  }

  requestEmit(event) {
    this.httpGet();
    this.modalService.dismissAll();
  }

  fn_newActivity(){
    this.showNewActivity=true;
  }

  fn(){
    
  }
}
