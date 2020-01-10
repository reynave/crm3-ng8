import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { ContactEdit, Selectedcompany, UpdateContact } from './../contact';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  public label: any;
  public company: any = [];
  public lead_source: any = [];
  public title: any = [];
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
    this.http.get<ContactEdit[]>(this.configService.base_url() + 'contact/edit/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data'];
      this.company = data['result']['company'];
      this.lead_source = data['result']['lead_source'];
      this.title = data['result']['title'];
      this.user = data['result']['user'];
     
      this.model = new UpdateContact(
        data['result']['data']['id_company'],
        data['result']['data']['email'],
        data['result']['data']['first_name'],
        data['result']['data']['id_lead_source'],
        data['result']['data']['id_title'],
        data['result']['data']['id_user'],
        data['result']['data']['last_name'],
        data['result']['data']['mobile'],
        data['result']['data']['phone']
      );
      console.log(data);
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
    this.http.post(this.configService.base_url() + 'contact/update',
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
