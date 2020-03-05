import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Opportunity } from './../opportunity/opportunity';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {
  public label: any;
  public items: any;
  public itemsSelected: any = [];
  public loading: boolean = true;
  loadingSelected: boolean = true;
  selected: any = [];
  public id: number;
  public closeResult: string;
  newContact: boolean = false;
  objIndex: any;
  selectModal:string= "0";
  id_user: string = "1";
  model:any;

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
    this.httpGet();
  }

  requestEmit(event) {
    if(event){
      this.router.navigate(['opportunity',event]);
    }
   
    this.modalService.dismissAll();
  }
  
  total:number;
  httpGet() {
    this.loading = true;
    this.itemsSelected = [];
    this.http.get(this.configService.base_url() + 'deal', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['result']['data'];
      this.total = data['result']['total'];
     //  console.log(data);
      this.loading = false;
    }, error => {
      console.log(error);
      console.log(error.error.text);
    });
  }


  fn_delete() {
  
    this.http.post(this.configService.base_url() + 'opportunity/fn_delete',
    {
      "data": this.itemsSelected
    }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
       //  console.log(data);
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
      'contact': x.contact,
      'company': x.company,
      
    }
    var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
    if (objectSelect == -1) {
      this.itemsSelected.push(object);
    }else{
      this.itemsSelected.splice(objectSelect, 1);
    }
   //  console.log(this.itemsSelected);
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

  fn_next(){
    
  }

}
