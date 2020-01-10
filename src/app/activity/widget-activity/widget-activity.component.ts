import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { Activity, GetSelected, WidgetActivty, widgetList } from './../activity';

@Component({
  selector: 'app-widget-activity',
  templateUrl: './widget-activity.component.html',
  styleUrls: ['./widget-activity.component.css']
})
export class WidgetActivityComponent implements OnInit {
  time = { hour: 13, minute: 30 };
  meridian = true;

  newtask: boolean = false;
  loading: boolean = false;
  request: string;
  id: string;
  items: any = [];
  date: any = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate()
  };
  activity: any = [];
  history: any = [];
  id_activity_type: number = 1;
  model: any = new WidgetActivty(this.id_activity_type, '', '', this.date, '', '', '', '', '', false, '', '', '', '');
  id_user: string = "1";
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.request = this.route.snapshot.url[0].path;
    this.id = this.route.snapshot.url[1].path;
    console.log(this.date);
    this.httpGet();
    this.httpData();
  }

  id_activity_priority: string;
  opportunity: any = [];

  httpGet() {
    this.loading = true;
    this.http.get<GetSelected[]>(this.configService.base_url() + 'activity/getSelected/' + this.request + '/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.items = data['result'];
      this.opportunity = data['result']['opportunity'];
      this.id_activity_priority = this.id, data['result']['data']['id_activity_priority'];
      this.model = new WidgetActivty(this.id_activity_type, '', this.id_user, this.date, this.request, this.id, data['result']['data']['id_activity_priority'], '0', '', false, '', '', '', '');
      console.log(this.opportunity);

      if(this.request == 'opportunity'){
        this.model['id_opportunity'] = this.id;
      }

    },
      error => {
        console.log(error);
        console.log(error.error.text);
      });
  }

  httpData() {
    this.loading = true;
    this.http.get<widgetList[]>(this.configService.base_url() + 'activity/widgetList/' + this.request + '/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.activity = data['result']['activity'];
      this.history = data['result']['history'];

    });
  }

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() {
    this.newtask = false;
    this.http.post(this.configService.base_url() + 'activity/insert',
      {
        "data": this.model,
        "id": this.id,
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          this.httpData();
          this.model['subject'] = "";
          this.model['comment'] = "";
          this.model['id_activity_priority'] = this.id_activity_priority;

        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
  }

  cancelNewTask() {
    this.newtask = false;
  }
  fn_editActivity(x) {
    var objIndex = this.activity.findIndex((obj => obj.id == x.id));
    if (this.activity[objIndex]['edit'] == false) {
      this.activity[objIndex]['edit'] = true;
    } else {
      this.activity[objIndex]['edit'] = false;
    }
  }
  fn_closeActivity(x) {
    var objIndex = this.activity.findIndex((obj => obj.id == x.id));
    this.activity[objIndex]['edit'] = false;

  }
  fn_detailHistory(x) {
    var objIndex = this.history.findIndex((obj => obj.id == x.id));
    if (this.history[objIndex]['edit'] == false) {
      this.history[objIndex]['edit'] = true;
    } else {
      this.history[objIndex]['edit'] = false;
    }
  }



  public tabEvent($event) {
    this.model.id_activity_type = $event.nextId;
  }

  onClosed(id) {
    // delete 
    var objIndex = this.activity.findIndex((obj => obj.id == id));
    this.activity.splice(objIndex, 1);
    this.http.post(this.configService.base_url() + 'activity/onClosed',
      {
        "id": id
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          this.httpData();
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
  }

  onComment(comment, id) {

    this.http.post(this.configService.base_url() + 'activity/onComment',
      {
        "id": id,
        "comment": comment
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


  fn_deleteSolo(id) {
    // delete 
    var objIndex = this.activity.findIndex((obj => obj.id == id));
    this.activity.splice(objIndex, 1);

    this.http.post(this.configService.base_url() + 'activity/fn_deleteSolo',
      {
        "id": id
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

}
