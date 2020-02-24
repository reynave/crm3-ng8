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
  model: any = [];
  user: any = [];
  closeResult: any;
  showNewActivity: boolean = false;
  id_user: string = "";

  activityLatest: Activity[] = [];
  activityHistory: Activity[] = [];



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
    console.log( this.route.snapshot);
    this.module = this.route.snapshot.url[0].path;
    this.id = "false";
    if( this.route.snapshot.url[1] ){
      this.id = this.route.snapshot.url[1].path;
    }

    this.httpGet();
    this.httpHistory();


  }

  httpHistory() { 
    var link = this.configService.base_url() + 'activity/httpHistory/' + this.module + '/' + this.id;
   
    this.http.get(link, {
      headers: this.configService.headers()
    }).subscribe(
      data => { 
        this.activityLatest = data['result']['latest'];
        this.activityHistory = data['result']['history'];
      },
      error => {
        console.log(error);
      }
    );
  }

  httpGet() {
    var link = this.configService.base_url() + 'activity/httpGet/' + this.module + '/' + this.id;
    console.log('link',link, this.module );
    this.http.get(link, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.items = data['result']['data'];
        this.model = new WidgetActivty(this.id_activity_type, this.id_user, "", "0", '', '', this.date, this.date, this.date, "00:00", "00:00", data['result']['data']['id_company'], data['result']['data']['id_opporunty'], 0);

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



  onInsert() {

    this.http.post(this.configService.base_url() + 'activity/onInsert',
      {
        "data": this.model,
        "id": this.id,
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {

        this.model['subject'] = null;
        this.model['description'] = null;
        this.model['amount'] = 0;

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

  fn_comments(comments, id, index,closed) {
    console.log(comments, id, index);
    
    this.http.post(this.configService.base_url() + 'activity/fn_comments',
      {
        "id_activity": id,
        "comments" : comments,
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => { 
        console.log(data);
        if(closed == 0){
          console.log(closed);
          this.activityLatest[index]['activity_comment'].push(data['result']['data']);
        } else if(closed == 1){
          console.log(closed);
          this.activityHistory[index]['activity_comment'].push(data['result']['data']);
        }
      //  this.activityHistory.unshift(data['result']['data']);
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );

  }

  fn_closed(x) {
    var objIndex = this.activityLatest.findIndex((obj => obj.id == x.id));
    this.activityLatest.splice(objIndex, 1);


    this.http.post(this.configService.base_url() + 'activity/fn_closed',
      {
        "id": x.id,
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {

        this.activityHistory.unshift(data['result']['data']);
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

      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }


  showHistory(i) {
    if (this.activityHistory[i]['show'] == false) {
      this.activityHistory[i]['show'] = true;
    } else {
      this.activityHistory[i]['show'] = false;
    }

  }
  showLatest(i) {
    if (this.activityLatest[i]['show'] == false) {
      this.activityLatest[i]['show'] = true;
    } else {
      this.activityLatest[i]['show'] = false;
    }

  }
}
