import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { ConfigService } from './../service/config.service';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Contact, Selectedcompany, NewContact } from './contact';

declare var $;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
  modelContact: any;
  dbCompany: boolean = false;
  selectedCompany: any = [];
  amount: string;
  total:string;
  companies:any= [];
  id_company:string = "0";
  constructor(
    private http: HttpClient,
    private router: Router,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private configService: ConfigService, 
    private activatedRoute: ActivatedRoute, 
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  filter:any = "";
  ngOnInit() {
     
    this.filter = this.activatedRoute.snapshot.params.filter;
    this.httpSelected();
    this.httpGet();
     
  }
 
  
  httpGet() {
    this.loading = false;
 

    $('#dtable').DataTable({
      //  stateSave: true,
      ajax: {
        url: this.configService.base_url() + "contact/index/",
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
            return '<a href="#/contact/' + row[0] + '"><b>' + data + '</b></a>';
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

  fnFilterDecode(){
   
    if( this.filter ){
      var filter = JSON.parse(atob(this.filter));
      console.log('fnFilterDecode' );
      this.id_company = filter['id_company'];
    } 
    
  }


  fnFilterByCompanies(e){
    console.log(e.target.value);

    var filter = {
      id_company : e.target.value
    }

    this.filter = btoa(JSON.stringify(filter));
    this.router.navigate(['contact/filter/', this.filter]);
    this.httpGet(); 
  }

  requestEmit(event) {
    if (event) {
      this.router.navigate(['contact', event]);
    }
    this.modalService.dismissAll();
  }


  httpSelected() {

    this.http.get<Selectedcompany[]>(this.configService.base_url() + 'contact/selected', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loadingSelected = false;
      this.selected = data['result'];
      //  console.log(this.selected);
    });
  }



  submit: boolean = false;



  fn_delete() {

    this.http.post(this.configService.base_url() + 'contact/fn_delete',
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
        //  console.log(error);
        //  console.log(error.error.text);
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
