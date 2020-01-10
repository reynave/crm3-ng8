import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Company, NewCompany, Selected } from './company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public label: any;
  public items: any;
  public itemsSelected: any = [];
  public loading: boolean = true;
  loadingSelected: boolean = true;
  selected: any = [];
  public id: number;
  public closeResult: string;
  newContact: boolean = false;
  modalTitle: string = "";
  modalStatus: number;
  objIndex: any;
  searchText: string;
  selectModal:string= "0";
  id_user: string = "1";
  model = new NewCompany('','','','','','0','','','','','');
      
  dbCompany: boolean = false;
  selectedCompany: any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private configService: ConfigService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {

    this.httpSelected();
    this.httpGet();
  }
  
  httpGet() {
    this.loading = true;
    this.itemsSelected = [];
    this.http.get<Company[]>(this.configService.base_url() + 'company', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data'];
      console.log(data);
      this.loading = false;
    }, error => {
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
  


  submit:boolean= false;
  
  onSubmit(value = "") {

    this.submit= true;
    this.http.post(this.configService.base_url() + 'company/insert',
      {
        "data": this.model
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          console.log(data);
          this.submit= false;
          if (value == 'next') {
            this.httpGet();
            this.model = new NewCompany('','','','','','0','','','','','');
          }
          else {
           this.router.navigate(['/company/',data['result']['id'] ]);
            this.modalService.dismissAll();
        
          }
        

        },
        error => {
          console.log(error);
          console.log(error.error.text);
        }
      );
  }

  get diagnostic() { return JSON.stringify(this.model); }


  fn_delete() {
  
    this.http.post(this.configService.base_url() + 'company/fn_delete',
    {
      "data": this.itemsSelected
    }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        console.log(data);
        this.httpGet();
        this.modalService.dismissAll();
      },
      error => {
        console.log(error);
        console.log(error.error.text);
      }
    );



  }

  open(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
 

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  fn_check(x) {
    this.objIndex = this.items.findIndex((obj => obj.id == x.id));
    if (this.items[this.objIndex]['check'] == true) {
      this.items[this.objIndex]['check'] = false;
    } else {
      this.items[this.objIndex]['check'] = true;
    }
    var object = {
      'id': x.id,
      'name': x.name,
    }
    var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
    if (objectSelect == -1) {
      this.itemsSelected.push(object);
    }else{
      this.itemsSelected.splice(objectSelect, 1);
    }
    console.log(this.itemsSelected);
  }

  fn_removeItemSelected(x) {
    this.objIndex = this.items.findIndex((obj => obj.id == x.id));
    var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
    if (this.items[this.objIndex]['check'] == false) {
      this.items[this.objIndex]['check'] = true;
    } else {
      this.items[this.objIndex]['check'] = false;
    }
    this.itemsSelected.splice(objectSelect, 1);
  }

}
