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
  id_activity_type: number = 100;
  model: any = new WidgetActivty(this.id_activity_type, 0, "", 0, '', '', this.date, this.date, this.date, "00:00", "00:00");
  user: any = [];
  closeResult: any;
  showNewActivity: boolean = false;
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
    this.httpData();

    /*$(window).scroll(function (event) {
      var st = $(this).scrollTop();
   
      if(st > 335){
         $('#activityTabs').addClass('position-ontop');
      }else{
        $('#activityTabs').removeClass('position-ontop');
      }
    });*/


  }

  activityLatest: Activity[] = [];
  activityHistory: Activity[] = [];

  httpData() {

    this.http.get(this.configService.base_url() + 'activity/httpData/' + this.module + '/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        this.activityLatest = data['result']['latest'];
        this.activityHistory = data['result']['history'];
        console.log(this.activityLatest);
      },
      error => {
        console.log(error);
      }
    );
  }

  httpGet() {
    this.http.get(this.configService.base_url() + 'activity/httpGet/' + this.module + '/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(
      data => {

        this.items = data['result']['data']
        this.model['id_user'] = data['result']['data']['id_user'];
        this.model['id_person'] = this.id;
        this.model['id_module'] = data['result']['data']['id_module'];

        this.user = data['result']['user'];
      },
      error => {
        console.log(error);
      }
    );
  }


  get diagnostic() { return JSON.stringify(this.model); }

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

        // this.httpData();   
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
}
