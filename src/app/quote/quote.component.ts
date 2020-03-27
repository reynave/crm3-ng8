import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SortablejsOptions } from 'ngx-sortablejs';
import { ConfigService } from './../service/config.service'; 


declare var $;

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public label: any;
  public items: any;
  public loading = true;
total :string;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute, 
    private configService: ConfigService
  ) { 
  }

  ngOnInit() {

    this.httpGet();
  }


  httpGet() {
    this.loading = false;

    var formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
    var vers;
    $('#dtable').DataTable({
      //  stateSave: true,
      ajax: {
        url: this.configService.base_url() + "quote/index/",
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
            vers = row[7] != '0' ? 'ver '+row[7] : "";
            return '<a href="#/quote/' + row[0] + '"><b>' + data + ' '+vers+'</b></a><div>'+row[8]+'</div>';
          }
        }, 

        {
          "targets": 3,
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

 


}
