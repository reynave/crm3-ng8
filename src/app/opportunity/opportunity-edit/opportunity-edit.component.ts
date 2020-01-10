import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { OpportunityEdit, OpportunityUpdate } from './../opportunity';

@Component({
  selector: 'app-opportunity-edit',
  templateUrl: './opportunity-edit.component.html',
  styleUrls: ['./opportunity-edit.component.css']
})
export class OpportunityEditComponent implements OnInit {
  public label: any;
  public company: any = [];
  public lead_source: any = [];
  public contact: any = [];
  public user: any = [];
  public items: any = [];
  
  public loading = true;
  public id: number;
  public closeResult: string;
  newContact: boolean = false;
  index: number;
  searchText: string;
  selectedCompany: any = [];
  model:any=[];

  loadingSelected: boolean = false;
  selected: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;

    this.httpGet();
  }


  httpGet() {
    this.loading = true;
    this.http.get<OpportunityEdit>(this.configService.base_url() + 'opportunity/edit/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data'];
      this.lead_source = data['result']['lead_source'];
      this.contact = data['result']['contact'];
      this.user = data['result']['user'];
     
      this.model = new OpportunityUpdate(data['result']['data']['name'],data['result']['data']['id_lead_source'],data['result']['data']['id_user'],data['result']['data']['id_contact'] );
      console.log(data);
      console.log(this.model );
      this.loading = false;
    },error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  get diagnostic() { return JSON.stringify(this.model); }


  submit: boolean = false;
  onSubmit() {

    this.submit = true;
    console.log(this.model);
    this.http.post(this.configService.base_url() + 'opportunity/update',
      {
        "id": this.id,
        "data": this.model
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          console.log(data);
          this.submit = false;
        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
  }


}
