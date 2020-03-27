import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SortablejsOptions } from 'ngx-sortablejs'; 
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from './../service/config.service'; 

declare var $;
@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {
  public label: any;
  public items: any;
  public loading = true;
total:string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
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
    this.modalService.dismissAll();
  }



  httpGet() {
    this.loading = false;
    var formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    $('#dtable').DataTable({
      //  stateSave: true,
      ajax: {
        url: this.configService.base_url() + "sales_order/index/",
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
            return '<a href="#/lead/' + row[0] + '"><b>' + data + '</b></a>';
          }
        }, 

        {
          "targets": 4,
          "render": function (data, type, row, meta) {
            return '<div class="text-right">'+formatter.format(data)+'</div>';
          },
        }
        
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



  open(content) {
    this.modalService.open(content);
  }

}
