import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Opportunity } from './opportunity';

declare var $;

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {
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
  selectModal: string = "0";
  id_user: string = "1";
  model: any;

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
    if (event) {
      this.router.navigate(['opportunity', event]);
    }

    this.modalService.dismissAll();
  }

  total: number;


  httpGet() {
    this.loading = false;

    var formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    $('#dtable').DataTable({
      //  stateSave: true,
      ajax: {
        url: this.configService.base_url() + "opportunity/index/",
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
      columnDefs: [
       
        {
          "targets": 1,
          "render": function (data, type, row, meta) {
            return '<a href="#/opportunity/' + row[0] + '"><b>' + data + '</b></a>';
          }
        },

        {
          "targets": 5,
          "render": function (data, type, row, meta) {
            return '<div class="text-right">'+formatter.format(data)+'</div>';
          },
        }

        
      ],
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
      'contact': x.contact,
      'company': x.company,

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
