import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { CompanyEdit, Selected, UpdateCompany } from './../../company/company';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
 
  public label: any;
  public items: any = [];
  public loading = true;
  public id: number;
  public closeResult: string;
  newContact: boolean = false;
  index: number;
  searchText: string;
  selectedCompany: any = [];
  model = new UpdateCompany('', '', '', '', '', '', '', '', '', '', '');

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

    this.httpSelected();
    this.httpGet();
  }


  httpGet() {
    this.loading = true;
    this.http.get<CompanyEdit[]>(this.configService.base_url() + 'company/edit/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {

      this.items = data['result']['data'];
     
      this.model = new UpdateCompany(
        data['result']['data']['address_city'],
        data['result']['data']['address_code'],
        data['result']['data']['address_state'],
        data['result']['data']['address_street'],
        data['result']['data']['email'],
        data['result']['data']['fax'],
        data['result']['data']['id'],
        data['result']['data']['id_industry'],
        data['result']['data']['name'],
        data['result']['data']['phone'],
        data['result']['data']['website']
      );

      console.log(data);
      this.loading = false;
    },error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  httpSelected() {

    this.http.get<Selected[]>(this.configService.base_url() + 'company/selected', {
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
    this.http.post(this.configService.base_url() + 'company/update',
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
