import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { LeadEdit, Selected, UpdateLead, Company } from './../lead';

@Component({
  selector: 'app-lead-edit',
  templateUrl: './lead-edit.component.html',
  styles: ['select{    width: 100%;}']
})
export class LeadEditComponent implements OnInit {
  public label: any;
  public items: any = [];
  public loading = true;
  public id: number;
  public closeResult: string;
  newContact: boolean = false;
  index: number;
  searchText: string;
  selectedCompany: any = [];
  model = new UpdateLead('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

  loadingSelected: boolean = false;
  selected: any = [];

  
  dbWebsite:string;
  dbIndustry:string;
  dbAddress:string;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;

    this.httpSelected();
    this.httpGet();
    this.httpCompany();
  }


  httpCompany() {
    console.log("httpCompany");
    this.loadingSelected = false;
    this.http.get<Company[]>(this.configService.base_url() + 'lead/getCompany', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loadingSelected = false;
      this.selectedCompany = data['result']['data'];

 
      console.log(this.selectedCompany);
    });
  }
  
  dbCompany: boolean = false;
  httpGet() {
    this.loading = true;
    this.http.get<LeadEdit[]>(this.configService.base_url() + 'lead/edit/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {

      this.items = data['result']['data'];
      if (data['result']['data']['id_company'] > 0) {
        this.dbCompany = true;

      
      }
      this.model = new UpdateLead(
        data['result']['data']['id_user'],
        data['result']['data']['id_title'],
        data['result']['data']['id_lead_source'],
        data['result']['data']['id_industry'],
        data['result']['data']['first_name'],
        data['result']['data']['last_name'],
        data['result']['data']['email'],
        data['result']['data']['mobile'],
        data['result']['data']['phone'],
        data['result']['data']['company'],
        data['result']['data']['website'],
        data['result']['data']['address_street'],
        data['result']['data']['address_city'],
        data['result']['data']['address_state'],
        data['result']['data']['address_code'],
        data['result']['data']['opportunity'],
        data['result']['data']['id_company'],
        data['result']['data']['id_lead_status']
      );

      this.dbWebsite  =  data['result']['data']['dbWebsite'] ;
      this.dbIndustry =  data['result']['data']['dbIndustry'] ;
      this.dbAddress  =  data['result']['data']['dbAddress'] ;


      console.log(data);
      this.loading = false;
    });
  }

  httpSelected() {

    this.http.get<Selected[]>(this.configService.base_url() + 'lead/selected', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loadingSelected = false;
      this.selected = data['result'];
      console.log(this.selected);
    });
  }

  get diagnostic() { return JSON.stringify(this.model); }


  submit: boolean = false;
  onSubmit(value = "") {

    this.submit = true;
    this.http.post(this.configService.base_url() + 'lead/update',
      {
        "id_lead": this.id,
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

  onChange(id) {
    id = id.replace(/ +/g, "");
    var res = id.split(":");
    this.index = res[0] - 1;

    this.dbWebsite  = this.selectedCompany[this.index]['website'] ;
    this.dbIndustry = this.selectedCompany[this.index]['industry'] ;
    this.dbAddress = this.selectedCompany[this.index]['address'] ;
  }

}
