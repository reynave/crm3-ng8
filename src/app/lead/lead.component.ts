import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Lead, Selected, Company, Newlead } from './lead';

declare var $;

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
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
  leadStatus: string = "0";
  id_lead_status:string = "1";
  id_user: string;
  model:any;
  total:string;
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
    this.id_user = this.configService.id_user();
    this.model = new Newlead(this.id_user, '1', '1', '0', '', '', '', '', '', '', '', '','', '', '', '', '0','1',"","","","","1",{ "year": 1980,
    "month": 3,
    "day": 5},false);
    this.httpGet();
    this.httpSelected();
  }


  httpGet() {
    this.loading = false;
 

    $('#dtable').DataTable({
      //  stateSave: true,
      ajax: {
        url: this.configService.base_url() + "lead/index/",
        type: 'GET',
        headers: {
          'Key': this.configService.key(),
          'Token': this.configService.token(),
          'Content-Type': 'application/json'
        },

      },
      aoColumnDefs: [{ "asSorting": false, "aTargets": [0] }],
      lengthMenu: [50, 100, 200],
      order: [[2, "asc"]],
      columnDefs: [
        {
          "targets": 0, 
          "render": function (data, type, row, meta) {
            return data +  ' <span class="ml-2 text-white text-'+row[8]+'"><i class="fas fa-circle"></i></span>';
          }
        },
        {
          "targets": 1,
          "render": function (data, type, row, meta) {
            return  data;
          }
        }, 
        {
          "targets": 2,
          "render": function (data, type, row, meta) {
            return '<a href="#/lead/' + row[0] + '"><b>' + data + '</b></a>';
          }
        }, 
        
      ],
      initComplete: function () {

        this.api().columns('.select-filter').every(function () {
          var column = this;
          var select = $('<select><option value="">Show all</option></select>')
            .appendTo($(column.footer()).empty())
            .on('change', function () {
              var val = $.fn.dataTable.util.escapeRegex(
                $(this).val()
              );

              column
                .search(val ? '^' + val + '$' : '', true, false)
                .draw();
            });

          column.data().unique().sort().each(function (d, j) {
            select.append('<option value="' + d + '">' + d + '</option>')
          });
        });
      }
    });

  }

 

  httpSelected() {

    this.http.get<Selected[]>(this.configService.base_url() + 'lead/selected', {
      headers: this.configService.headers()
    }).subscribe(data => { 
      this.configService.errorToken(data); 
      this.loadingSelected = false;
      this.selected = data['result'];
      // console.log(this.selected);
    });
  }

  httpCompany() {
    // console.log("httpCompany");
    this.loadingSelected = false;
    this.http.get<Company[]>(this.configService.base_url() + 'lead/getCompany', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loadingSelected = false;
      this.selectedCompany = data['result']['data'];
      // console.log(this.selectedCompany);
    });
  }

  fnRequestCompanyData(){
    console.log(this.model['id_company']);
    this.loading = true;
    this.http.get(this.configService.base_url() + 'lead/getCompany/?id='+this.model['id_company'], {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      console.log(data);
      this.model['isDuplicate'] = true;
      this.model['website'] = data['result']['data'][0]['website'];
      this.model['phone'] = data['result']['data'][0]['phone'];
      this.model['fax'] = data['result']['data'][0]['fax'];
      this.model['website'] = data['result']['data'][0]['website'];
      this.model['id_company_class'] = data['result']['data'][0]['id_company_class'];

      this.model['address_street'] = data['result']['data'][0]['bill_street1'];
      this.model['address_city'] = data['result']['data'][0]['bill_city'];
      this.model['address_state'] = data['result']['data'][0]['bill_state'];
      this.model['address_code'] = data['result']['data'][0]['bill_code'];
      this.model['address_country'] = data['result']['data'][0]['bill_country']; 

    
     // this.selectedCompany = data['result']['data'];
      // console.log(this.selectedCompany);
    });
  }


  submit:boolean= false;
  
  onSubmit(value = "") {

    this.submit= true;
    this.http.post(this.configService.base_url() + 'lead/insert',
      {
        "data": this.model
      }, {
        headers: this.configService.headers()
      }).subscribe(
        data => {
          // console.log(data);
          this.submit= false;
          if (value == 'next') {
            this.httpGet();
            this.model = new Newlead(this.id_user, '1', '1', '0', '', '', '', '', '', '', '', '','', '', '', '', '0','1',"","","","",'1',{ "year": 1980,
            "month": 3,
            "day": 5},false);
          }
          else {
            this.router.navigate(['/lead/',data['result']['id_lead'] ]);
            this.modalService.dismissAll();
          }
        

        },
        error => {
           console.log(error);
           console.log(error.error.text);
        }
      );
  }

  
  fn_updateLeadStatus() {
    this.http.post(this.configService.base_url() + 'lead/fn_updateLeadStatus',
    {
      "data": this.itemsSelected,
      "id_lead_status" :this.id_lead_status
    }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        // console.log(data);
        this.httpGet();
        this.modalService.dismissAll();
      },
      error => {
        // console.log(error);
        // console.log(error.error.text);
      }
    );
  }

  fn_delete() {
  
    this.http.post(this.configService.base_url() + 'lead/fn_delete',
    {
      "data": this.itemsSelected
    }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        // console.log(data);
        this.httpGet();
        this.modalService.dismissAll();
      },
      error => {
        // console.log(error);
        // console.log(error.error.text);
      }
    );



  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
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
      'company': x.company,
    }
    var objectSelect = this.itemsSelected.findIndex((obj => obj.id == x.id));
    if (objectSelect == -1) {
      this.itemsSelected.push(object);
    }else{
      this.itemsSelected.splice(objectSelect, 1);
    }
    // console.log(this.itemsSelected);
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
