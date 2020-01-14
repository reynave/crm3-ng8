import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SortablejsOptions } from 'ngx-sortablejs';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Editquote } from './../quote';
import { config } from 'rxjs';

//declare var $: any;

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  public label: any;
  public items: any = [];
  quote_item: any = [];
  myContact: any = [];
  public loading = true;
  public id: number;
  public closeResult: string;
  quoteModel: any = [];
  isReadOnly: boolean = true;
  total: string;
  pricing: any = [];
  faC: string = '<i class="far fa-check-square"></i>';
  faUC: string = '<i class="far fa-square"></i>';



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
    this.quoteModel = {
      expirationDate: {
        year: 0,
        month: 0,
        day: 0,
      }
    }
    this.httpGet();
  }
  quote_status: any = [];
  activity: any = [];
  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'quote/detail/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.items = data['result']['data'];
      this.quote_item = data['result']['quote_item'];
      this.pricing = data['result']['pricing'];
      this.loading = false;
      this.quote_status = data['result']['quote_status'];
      this.total = data['result']['total'];
      this.activity = data['result']['activity'];

      this.quoteModel = new Editquote(
        data['result']['data']['name'],
        data['result']['data']['expired_date'],
        data['result']['data']['id_quote_status'],
        data['result']['data']['description'],
        data['result']['data']['discount'],
        data['result']['data']['tax'],
        data['result']['data']['shipping'],
        data['result']['data']['id_user'],
        data['result']['data']['email'],
        data['result']['data']['phone'],
        data['result']['data']['fax'],

        data['result']['data']['bill_name'],
        data['result']['data']['bill_street1'],
        data['result']['data']['bill_street2'],
        data['result']['data']['bill_city'],
        data['result']['data']['bill_state'],
        data['result']['data']['bill_code'],
        data['result']['data']['country'],

        data['result']['data']['ship_name'],
        data['result']['data']['ship_street1'],
        data['result']['data']['ship_street2'],
        data['result']['data']['ship_city'],
        data['result']['data']['ship_state'],
        data['result']['data']['ship_code'],
        data['result']['data']['country'],
        data['result']['data']['syncing']
      );
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  //https://github.com/SortableJS/ngx-sortablejs
  eventOptions: SortablejsOptions = {
    onUpdate: () => {
      console.log(this.quote_item);
      this.loading = true;
      this.http.post(this.configService.base_url() + 'quote/fn_sortable_item',
        {
          "data": this.quote_item
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
    },
  };

  fn_sync(status) {
    var note;
    if (status == true) {
      note = "Do you want disable syncing with Opportunity ? ";
    } else if (status == false) {
      note = "Do you want syncing with Opportunity ? ";
    }
    if (confirm(note)) {

      this.loading = true;
      this.http.post(this.configService.base_url() + 'quote/fn_sync',
        {
          "id": this.id,
          "status": status
        }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          console.log(data);
          this.loading = false;
          this.items['syncing'] = status;
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );

    }



  }

  fn_updateQuote() {
    this.loading = true;

    this.http.post(this.configService.base_url() + 'quote/fn_updateQuote',
      {
        "id": this.id,
        "data": this.quoteModel
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.loading = false;
        this.httpGet();
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

  requestEmit(event) {
    this.httpGet();
    this.modalService.dismissAll();
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

  fn_removeQuoteitem(x) {
    this.loading = true;
    var objIndex = this.quote_item.findIndex((obj => obj.id == x.id));
    this.quote_item.splice(objIndex, 1);

    this.http.post(this.configService.base_url() + 'quote/fn_removeQuoteitem',
      {
        "id": x.id,
        "id_quote": this.id
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.loading = false;
        this.quote_item = data['result']['quote_item'];
        this.pricing = data['result']['pricing'];
        this.total = data['result']['total'];
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );

  }

  fn_updateQuoteitem(x) {
    this.loading = true;
    this.http.post(this.configService.base_url() + 'quote/fn_updateQuoteitem',
      {
        "id": this.id,
        "data": x
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.loading = false;
        this.quote_item = data['result']['quote_item'];
        this.pricing = data['result']['pricing'];
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

  fn_update_status(id_quote_status) {
    if (id_quote_status != this.items['id_quote_status']) {


      this.loading = true;
      this.http.post(this.configService.base_url() + 'quote/fn_update_status',
        {
          "id": this.id,
          "id_quote_status": id_quote_status
        }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          console.log(data);
          this.loading = false;
          this.items['id_quote_status'] = id_quote_status;
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
    }
  }

  show_description(x) {
    var objIndex = this.quote_item.findIndex((obj => obj.id == x.id));
    this.quote_item[objIndex]['hide_description'] = false;

  }
  hide_description(x) {
    var objIndex = this.quote_item.findIndex((obj => obj.id == x.id));
    this.quote_item[objIndex]['hide_description'] = true;

  }

  print(){
    var url = 'quote/print/'+this.id;
    window.open(url, '_blank'); 
  }


}
