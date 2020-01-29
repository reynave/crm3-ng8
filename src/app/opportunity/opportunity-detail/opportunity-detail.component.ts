import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { OpportunityDetail, OpportunityClosedLose, OpportunityClosedWin } from './../opportunity';
import { Newquote } from './../../quote/quote'; 
import { OpportunityUpdate, UpdateOpportunity } from './../opportunity';

@Component({
  selector: 'app-opportunity-detail',
  templateUrl: './opportunity-detail.component.html',
  styleUrls: ['./opportunity-detail.component.css']
})
export class OpportunityDetailComponent implements OnInit {
  public label: any;
  public items: any = [];
  myContact: any = [];
  public loading = true;
  public id: number;
  public closeResult: string;
  stage: any = [];
  objIndex: any;
  searchText: string;
  id_stage: string;
  currentDate = new Date();
  id_stageNext: string;
  editable: boolean = false;
  modelContact: any;
  modelBranch: any;
  product: any = []
  isReadOnly:boolean= true;
  myBranch: any = [];
  user: any = [];
  width: string;
  modelClosedWin: any;
  modelClosedLose: any;
  finish: boolean = false;
  stageNotes: string;
  quoteModel: any;
  quotes: any; 
  business:any=[];
  model:any=[];
  lead_source:any=[];
  updateOpportunity:any;
  contact:any=[];
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
    this.items = {
      start_date: {
        year: 0,
        month: 0,
        day: 0,
      }, 
    }
    this.httpGet();
  }
 
  requestEmit(event) {
    this.httpGet();
    this.modalService.dismissAll();
  }


  httpGet() {
    this.loading = true;
    this.http.get<OpportunityDetail>(this.configService.base_url() + 'opportunity/detail/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.items = data['result']['data'];
      this.stage = data['result']['stage'];
      this.quotes = data['result']['quotes'];
      this.width = data['result']['width'];
      this.id_stage = data['result']['data']['id_stage'];
      this.product = data['result']['product'];
      this.business =  data['result']['business'];
      var objIndex = this.stage.findIndex((obj => obj.id == this.id_stage));
      this.stageNotes = this.stage[objIndex]['notes'];

      this.contact = data['result']['contact'];
      this.user = data['result']['user'];
      this.loading = false;
      this.modelClosedWin = new OpportunityClosedWin('', this.currentDate, data['result']['data']['id_user']);
      this.modelClosedLose = new OpportunityClosedLose('', this.currentDate, data['result']['data']['id_user']);

      this.quoteModel = new Newquote(0, '', '', '', '', 0, 0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', true);
      this.lead_source =  data['result']['lead_source'];
      this.updateOpportunity = new UpdateOpportunity(
        data['result']['data']['id_user'],
        data['result']['data']['id_opportunity_business'],
        data['result']['data']['id_lead_source'],
        data['result']['data']['name'],
        data['result']['data']['amount'],
        data['result']['data']['closed_date'],
        data['result']['data']['start_date']
      );


      this.model = new OpportunityUpdate(data['result']['data']['name'],data['result']['data']['id_lead_source'],data['result']['data']['id_user'],data['result']['data']['id_contact'] );
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  onClosed(i) {
    if (i == 'win') {
      var data = this.modelClosedWin;

    } else if (i == 'lose') {
      var data = this.modelClosedLose;
    }
    this.http.post(this.configService.base_url() + 'opportunity/updateClosed',
      {
        "id": this.id,
        "data": data,
        "status": i
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {

        if (i == 'win') {
          this.router.navigate(['/win/', this.id]);

        } else if (i == 'lose') {
          this.router.navigate(['/lose/', this.id]);

        }
        this.finish = true;
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );

  }



  fn_editable() {

  }
  showUpdateStage: boolean = false;
  stageCurrent: string;


  nextStage(x) {
    this.stageCurrent = x.name;
    this.id_stageNext = x.id;
    if (this.items["id_stage"] == x.id) {
      this.showUpdateStage = false;
    } else if (this.items["id_stage"] != x.id) {
      this.showUpdateStage = true;
    }

    this.stageNotes = x.notes;

    this.id_stage = x.id;
    this.stage.map(a => a.current = false);
    var objIndex = this.stage.findIndex((obj => obj.id == x.id));
    this.stage[objIndex]['current'] = "current";
  }


  updateStage() {
    this.http.post(this.configService.base_url() + 'opportunity/updateStage',
      {
        "id": this.id,
        "id_stage": this.id_stageNext
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        this.showUpdateStage = false;
        this.httpGet();
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

  doneStage(x) {

    var objIndex = this.stage.findIndex((obj => obj.id == x.id));


    if (x.done === false) {
      this.stage[objIndex]['done'] = "done";
    } else {
      this.stage[objIndex]['done'] = false;

    }

    this.http.post(this.configService.base_url() + 'opportunity/doneState',
      {
        "id_opportunity": this.id,
        "id_stage": this.stage[objIndex]['id'],
        "done": this.stage[objIndex]['done'],
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );


  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
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
    if (confirm('Delete this Opportunity ?')) {

      this.http.post(this.configService.base_url() + 'opportunity/fn_deleteSolo',
        {
          "id": this.id
        }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          this.router.navigate(['/opportunity/']);

        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );

    }
  }

  fn_newQuote() {
    console.log(this.quoteModel);
    this.loading = true;
    this.http.post(this.configService.base_url() + 'opportunity/fn_newQuote',
      {
        "id": this.id,
        "data": this.quoteModel
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
          this.loading = false;
          this.router.navigate(['/quote/', data['result']['id']]);
          this.modalService.dismissAll();
         

      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

  fn_update() {
 
    this.http.post(this.configService.base_url() + 'opportunity/update',
      {
        "id": this.id,
        "data": this.updateOpportunity
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          console.log(data); 
          this.httpGet();
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
  }

}
