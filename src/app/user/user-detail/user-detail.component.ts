import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { EditUser, NewTargetAmount } from './../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public label: any;
  public itemsSelected: any = [];
  public loading: boolean = true;
  id: string;
  model: any = [];
  newTargetAmount: any = new NewTargetAmount('', '');
  user_access: any = [];
  user_group: any = [];
  user_target: any = [];
  parent: any = [];


  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private configService: ConfigService
  ) {
  }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.httpGet();
  }

  httpGet() {
    this.loading = true;
    this.itemsSelected = [];
    this.http.get(this.configService.base_url() + 'user/detail/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.model = new EditUser(
        data['result']['data']['id_parent'],
        
        data['result']['data']['first_name'],
        data['result']['data']['last_name'],

        data['result']['data']['id_user_access'],
        data['result']['data']['id_user_group'],

        data['result']['data']['code'],
        data['result']['data']['max_discount'],

        data['result']['data']['email'],
        data['result']['data']['status'],
        "",
        data['result']['data']['target_amount_year'],
      );

      this.parent = data['result']['parent'];
      this.user_access = data['result']['user_access'];
      this.user_group = data['result']['user_group'];
      this.user_target = data['result']['user_target'];

      this.loading = false;
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  fn_update() {
    this.loading = true;
    this.http.post(this.configService.base_url() + 'user/fn_update',
      {
        "id": this.id,
        "data": this.model,
        "user_target": this.user_target,
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.httpGet();
        this.loading = false;
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }


  fn_insertTargetAmount() {
    this.loading = true;
    this.http.post(this.configService.base_url() + 'user/fn_insertTargetAmount',
      {
        "id": this.id,
        "data": this.newTargetAmount,
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.httpGet();
        this.loading = false;
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }



}
