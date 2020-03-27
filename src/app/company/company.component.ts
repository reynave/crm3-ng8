import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Company, NewCompany, Selected } from './company';


declare var $;

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
  selectModal: string = "0";
  id_user: string = "1";
  total: string = "";
  model = new NewCompany('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

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
    this.loading = false;
    $('#dtable').DataTable({
      //  stateSave: true,
      ajax: {
        url: this.configService.base_url() + "company/index/",
        type: 'GET',
        headers: {
          'Key': this.configService.key(),
          'Token': this.configService.token(),
          'Content-Type': 'application/json'
        },

      },
      aoColumnDefs: [{ "asSorting": false, "aTargets": [0] }],
      lengthMenu: [50, 100, 200],
      order: [[1, "asc"]],
      columnDefs: [ {
        "targets": 1,
        "render": function (data, type, row, meta) {
          return '<a href="#/company/' + row[0] + '"><b>' + data + '</b></a>';
        }
      }],
      initComplete: function () {

        this.api().columns('.select-filter').every(function () {
          var column = this;
          var select = $('<select><option value=""> - Show All - </option></select>')
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
  user: any = [];
  company_class: any = [];
  httpSelected() {

    this.http.get<Selected[]>(this.configService.base_url() + 'company/selected', {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.id_user = data['result']['id_user'];
      this.model['id_user'] = data['result']['id_user'];
      this.user = data['result']['user'];
      this.company_class = data['result']['company_class'];
      this.loadingSelected = false;
      this.selected = data['result'];
      //  console.log(this.selected);
    });
  }



  submit: boolean = false;

  onSubmit(value = "") {

    this.submit = true;
    this.http.post(this.configService.base_url() + 'company/insert',
      {
        "data": this.model
      }, {
      headers: this.configService.headers()
    }).subscribe(
      data => {
        //  console.log(data);
        this.submit = false;
        if (value == 'next') {
          this.httpGet();
          this.model = new NewCompany('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
          this.model['id_user'] = this.id_user;
        }
        else {
          this.router.navigate(['/company/', data['result']['id']]);
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
    this.modalService.open(content, { size: 'lg' });
  }

  copyAddress() {
    this.model['ship_street'] = this.model['bill_street'];
    this.model['ship_city'] = this.model['bill_city'];
    this.model['ship_state'] = this.model['bill_state'];
    this.model['ship_code'] = this.model['bill_code'];
    this.model['ship_country'] = this.model['bill_country'];

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
    } else {
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

}
