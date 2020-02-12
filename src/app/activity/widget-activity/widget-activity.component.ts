import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Activity, GetSelected, WidgetActivty, widgetList } from './../activity';

declare var $: any;

@Component({
  selector: 'app-widget-activity',
  templateUrl: './widget-activity.component.html',
  styleUrls: ['./widget-activity.component.css']
})
export class WidgetActivityComponent implements OnInit {

  loading: boolean = false;
  module: string;
  id: string;
  items: any = [];
  date: any = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  };
  activity: any = [];
  history: any = [];
  id_activity_type: string = "100";
  model: any= [];
  user: any = [];
  closeResult: any;
  showNewActivity: boolean = false;
  id_user:string = "";
  
  activityLatest: Activity[] = [];
  activityHistory: Activity[] = [];

  related:string = "Related to";
  related_result:any = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private modalService: NgbModal,
    config: NgbModalConfig,
  ) {

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.module = this.route.snapshot.url[0].path;
    this.id = this.route.snapshot.url[1].path;

    this.httpGet();
    this.httpHistory();

    /*$(window).scroll(function (event) {
      var st = $(this).scrollTop();
   
      if(st > 335){
         $('#activityTabs').addClass('position-ontop');
      }else{
        $('#activityTabs').removeClass('position-ontop');
      }
    });*/


  }

  httpHistory() {

    this.http.get(this.configService.base_url() + 'activity/httpHistory/' + this.module + '/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.activityLatest = data['result']['latest'];
        this.activityHistory = data['result']['history'];
    //    console.log(this.activityLatest);
      },
      error => {
     //   console.log(error);
      }
    );
  }

  httpGet() {
    this.http.get(this.configService.base_url() + 'activity/httpGet/' + this.module + '/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        
        this.items = data['result']['data'];
        this.model = new WidgetActivty(this.id_activity_type, this.id_user, "", "0", '', '', this.date, this.date, this.date, "00:00", "00:00",'0','0');

        this.model['id_user'] = data['result']['data']['id_user'];
        this.model['id_person'] = data['result']['data']['person'][0]['id'];
        this.model['id_module'] = data['result']['data']['id_module'];
        this.id_user = data['result']['id_user'];
        this.user = data['result']['user'];
          },
      error => {
        console.log(error);
      }
    );
  }

  fn_related(event){
    if( event == 'contact'){
      this.related = 'Contact';  
      this.model['id_module_related'] = "300";

    }else  if( event == 'lead'){
      this.related = 'Lead';     
      this.model['id_module_related'] = "200";

    }else  if( event == 'company'){
      this.related = 'Company';     
      this.model['id_module_related'] = "400";

    }else  if( event == 'opportunity'){
      this.related = 'Opportunity';
      this.model['id_module_related'] = "500";

    }else  if( event == 'quote'){
      this.related = 'Quote';
      this.model['id_module_related'] = "800";

    }else  if( event == 'deal'){
      this.related = 'Deal';
      this.model['id_module_related'] = "520";

    }else  if( event == 'sales_order'){
      this.related = 'Sales Order';
      this.model['id_module_related'] = "550";

    }else  if( event == 'lost'){
      this.related = 'Lost';
      this.model['id_module_related'] = "510";

    } 
    this.model['id_module_related_target'] = "";


    this.http.get(this.configService.base_url() +  event + '/index' , {
      headers: this.configService.headers()
    }).subscribe(
      data => { 
        this.related_result = data['result']['data'];
        console.log(data); 
      },
      error => {
        console.log(error);
      }
    );
 
    console.log(event);
  }

  
  onInsert() {

    this.http.post(this.configService.base_url() + 'activity/insert',
      {
        "data": this.model,
        "id": this.id,
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.model['subject'] = null;
        this.model['description'] = null;

        // this.httpHistory();   
        if (Array.isArray(data['result']['latest']) == false) {
          this.activityLatest.unshift(data['result']['latest']);
        }

        if (Array.isArray(data['result']['history']) == false) {
          this.activityHistory.unshift(data['result']['history']);
        }

      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

  tabEvent($event) {
    this.model['id_activity_type'] = $event.nextId;
  }


  fn_closed(x) {
    var objIndex = this.activityLatest.findIndex((obj => obj.id == x.id));
    this.activityLatest.splice(objIndex, 1);

    this.activityHistory.unshift(x); 
    this.http.post(this.configService.base_url() + 'activity/fn_closed',
      {
        "id": x.id,
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

  fn_remove(x) {
    var objIndex = this.activityLatest.findIndex((obj => obj.id == x.id));
    this.activityLatest.splice(objIndex, 1);

    this.http.post(this.configService.base_url() + 'activity/fn_remove',
      {
        "id": x.id,
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


  showHistory(i){
    if(  this.activityHistory[i]['show'] == false ){
      this.activityHistory[i]['show'] = true;
    }else{
      this.activityHistory[i]['show'] = false;
    }
   
  }
  showLatest(i){
    if(  this.activityLatest[i]['show'] == false ){
      this.activityLatest[i]['show'] = true;
    }else{
      this.activityLatest[i]['show'] = false;
    }
   
  }
}
