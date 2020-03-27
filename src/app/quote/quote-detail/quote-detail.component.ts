import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
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
  public id: string;
  public closeResult: string;
  quoteModel: any = [];
  isReadOnly: boolean = true;
  total: string;
  pricing: any = [];
  faC: string = '<i class="far fa-check-square"></i>';
  faUC: string = '<i class="far fa-square"></i>';
  quote_status: any = [];
  activity: any = [];
  attachment: any = [];


  constructor(
    private http: HttpClient,
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
    this.items = {
      status: {
        id: "",
        notes: "",
      }
    }
    this.httpGet();
  }
  contact: any = [];
  user: any = []; profile: any = [];
  fileOutput: any = [];

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
      this.profile = data['result']['profile'];
      this.contact = data['result']['contact'];
      this.quote_status = data['result']['quote_status'];
      this.total = data['result']['total'];
      this.activity = data['result']['activity'];
      this.attachment = data['result']['attachment'];
      this.user = data['result']['user'];
      this.fileOutput = data['result']['fileOutput'];
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
        data['result']['data']['syncing'],

        data['result']['data']['contact']['id'],
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
      note = "Do you want syncing with Opportunity ? ";
    } else if (status == false) {
      note = "Do you want disable syncing with Opportunity ? ";
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
    this.modalService.open(content, { size: 'lg' });
  }

  fn_max_discount(){
    if (this.quoteModel['discount'] > this.profile['max_discount']) {
      alert("Your maximum discount is " + this.profile['max_discount'] + " %"); 
      this.httpGet();
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
  
    if (x.discount > this.profile['max_discount']) {
      alert("Your maximum discount is " + this.profile['max_discount'] + " %");
      
      this.httpGet();
    } else { 
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


  selectedFile = null; uploadLoading: boolean = false;
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    const fd = new FormData();
    fd.append('files', this.selectedFile, this.selectedFile.name);
    fd.append('token', this.configService.token());
    fd.append('id_module', this.id);
    this.uploadLoading = true;
    console.log(fd, this.configService.token());
    this.http.post(this.configService.base_url() + 'upload/quotes_attachment', fd)
      .subscribe(

        data => {
          this.uploadLoading = false;
          console.log(data);
          this.attachment = data['result']['attachment'];
          this.selectedFile = "";
        }

      );
  }

  fn_attach_delete(x) {
    this.loading = true;

    this.http.post(this.configService.base_url() + 'quote/fn_attach_delete',
      {
        "id": x.id,
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.loading = false;
        var objIndex = this.attachment.findIndex((obj => obj.id == x.id));
        this.attachment.splice(objIndex, 1);
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

  show_description(x) {
    var objIndex = this.quote_item.findIndex((obj => obj.id == x.id));
    this.quote_item[objIndex]['hide_description'] = false;

  }
  hide_description(x) {
    var objIndex = this.quote_item.findIndex((obj => obj.id == x.id));
    this.quote_item[objIndex]['hide_description'] = true;

  }

  approved(id_quote_status) {
    this.loading = true;
    this.http.post(this.configService.base_url() + 'quote/approved',
      {
        "id": this.id,
        "id_quote_status": id_quote_status,
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        this.httpGet();
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }


  generate() {

    this.http.get(this.configService.base_url() + 'output/quote/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.httpGet();
      var url = data['url'];
      window.open(url, '_blank').focus();
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });

  }


  send() {
    this.loading = true;
    this.http.post(this.configService.base_url() + 'quote/send',
      {
        "id": this.id,
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        this.httpGet();
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );

  }




  test: string = "";

}
