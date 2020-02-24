import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from './../../service/config.service';
import { NewContact } from './../contact';


@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {
  @Output()
  uploaded = new EventEmitter<string>();

  public loading = true;
  public id: string;
  public closeResult: string;
  modelContact: any;
  module: string = this.activatedRoute.snapshot.url[0].path;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.modelContact = new NewContact('', '', '', '', '', '', '', '','','');
    this.httpGet();
  }

  lead_source:any = [];
  company:any = [];
  title:any = [];
  user:any = [];

  httpGet() {
    this.loading = true;
    var url = this.configService.base_url() + 'contact/widget_new_contact/' + this.module + '/' + this.id;
    console.log(url);
    this.http.get(url, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.lead_source = data['result']['lead_source'];
      this.company = data['result']['company'];

      this.title = data['result']['title'];
      this.user = data['result']['user'];
      
      this.modelContact = new NewContact(
        '',
        '',
        '',
        '',
        '',
        '',
        data['result']['data']['id_user'],
        '','','');
      console.log(data);
      this.loading = false;
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }

  onSubmit() {
    this.loading = true;
    this.http.post(this.configService.base_url() + 'contact/insert',
      { 
        "data": this.modelContact
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.loading = false;
        if (this.module == 'contact') { 
          this.uploaded.emit( data['result']['id']);
        } else {
          this.uploaded.emit();
        }

      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );
  }

  close(){
    this.uploaded.emit();
  }
}
