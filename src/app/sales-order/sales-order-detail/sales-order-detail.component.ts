import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SortablejsOptions } from 'ngx-sortablejs';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SalesOrder, EditSalesOrder } from './../sales-order'; 
import { config } from 'rxjs';


@Component({
  selector: 'app-sales-order-detail',
  templateUrl: './sales-order-detail.component.html',
  styleUrls: ['./sales-order-detail.component.css']
})
export class SalesOrderDetailComponent implements OnInit {
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
  sales_order_status: any = [];
  activity: any = [];
  attachment : any = [];
  user:any=[];
  contact :any= [];
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
    this.httpGet();
  }

  httpGet() {
    this.loading = true;
    this.http.get(this.configService.base_url() + 'sales_order/detail/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.items = data['result']['data'];
      this.quote_item = data['result']['quote_item'];
      this.pricing = data['result']['pricing']['pricing'];
      this.loading = false;
      this.sales_order_status = data['result']['sales_order_status'];
      this.total = data['result']['total'];
      this.activity = data['result']['activity'];
      this.attachment = data['result']['attachment'];
      this.contact = data['result']['contact'];
      this.user = data['result']['user'];

      this.quoteModel = new EditSalesOrder(
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
      this.http.post(this.configService.base_url() + 'sales_order/fn_sortable_item',
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

  fn_updateSO() {
    this.loading = true;

    this.http.post(this.configService.base_url() + 'sales_order/fn_updateSO',
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

  fn_removeQuoteitem(x) {
    this.loading = true;
    var objIndex = this.quote_item.findIndex((obj => obj.id == x.id));
    this.quote_item.splice(objIndex, 1);

    this.http.post(this.configService.base_url() + 'sales_order/fn_removeQuoteitem',
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
    this.http.post(this.configService.base_url() + 'sales_order/fn_updateQuoteitem',
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

  fn_update_status(id_sales_order_status) {
    if (id_sales_order_status != this.items['id_sales_order_status']) {


      this.loading = true;
      this.http.post(this.configService.base_url() + 'sales_order/fn_update_status',
        {
          "id": this.id,
          "id_sales_order_status": id_sales_order_status
        }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          console.log(data);
          this.loading = false;
          this.items['id_sales_order_status'] = id_sales_order_status;
          this.items['sales_order_status'] = data['result']['name'];
          this.items['editable'] = data['result']['editable'];
          
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
    }
  }
 
  selectedFile=null;
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }

  onUpload(){
    const fd = new FormData();
    fd.append('files',this.selectedFile, this.selectedFile.name);
    fd.append('token', this.configService.token() );
    fd.append('id_module', this.id );
    
    console.log(fd, this.configService.token() );
    this.http.post(this.configService.base_url() + 'upload/quotes_attachment',fd,{
      reportProgress: true,
      observe: 'events'
    })
    .subscribe(
      event => {
        if(event.type === HttpEventType.UploadProgress){
          console.log(event ); // handle event here
        }else if( event.type === HttpEventType.Response ){
          console.log(event ); // handle event here
        }
       
      },
      data => {
        console.log(data); 
        this.attachment = data['result']['attachment'];

      }
      
    );
  }

  fn_attach_delete(x){
    this.loading = true;
   
    this.http.post(this.configService.base_url() + 'sales_order/fn_attach_delete',
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

  print(){
    var url = 'salesOrder/print/'+this.id;
    window.open(url, '_blank'); 
  }

  uploadERP(){
    alert('this CRM doesn\'t support connection to ERP, Please contact your developer first !')
  }


}
