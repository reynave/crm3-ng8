# AI Agent Guide — CRM3 (Angular 8) — `crm3-ng8`

> Dokumen ini adalah "otak" bagi AI agent agar bisa memahami struktur kode, router,
> dan gaya penulisan project **CRM3** (SalesTrax) di `C:\xampp7433\htdocs\crm.co.id`.
> Scope dokumen ini hanya untuk folder `crm3-ng8` (frontend Angular 8) beserta
> backend `api-v1` (CodeIgniter 3) yang menjadi API-nya.

---

## 1. Ringkasan Proyek (Overview)

CRM3 (branding di UI: **SalesTrax**) adalah aplikasi **CRM (Customer Relationship
Management)** dengan alur bisnis:

**Lead → Contact → Company → Opportunity → Quote → Deal → Sales Order** (plus
modul pelengkap: Activities, Lost, Reports, Users, Access Right, Master Data).

Folder induk `crm.co.id` berisi beberapa sub-proyek:

| Folder | Keterangan |
| --- | --- |
| `crm3-ng8` | **Frontend Angular 8 (fokus dokumentasi ini)** |
| `api-v1` | Backend REST API — **CodeIgniter 3 (PHP)** |
| `login` | Modul login terpisah (legacy / pendukung) |
| `mobile` | Versi mobile |
| `crm3-ng8-android` | Wrapper Android |
| `LIVE` | Salinan untuk deployment |
| `api-v1.zip`, `crma2118_s02dev.sql` | Artefak backup |

Frontend (`crm3-ng8`) adalah **SPA Angular 8** dengan **hash routing**, satu
`AppModule` besar (tanpa lazy-loading / feature modules), dan berkomunikasi ke
backend CodeIgniter melalui **REST JSON + token JWT** yang disimpan di
`localStorage`.

---

## 2. Struktur Direktori

### 2.1 Root `crm3-ng8`

```
crm3-ng8/
├── angular.json          # konfigurasi Angular CLI (project "app", prefix "app")
├── karma.conf.js         # unit test (Karma/Jasmine)
├── master-db-crm3.sql    # dump database
├── package.json
├── tsconfig.json / tsconfig.app.json / tsconfig.spec.json
├── tslint.json           # aturan lint (codelyzer)
├── e2e/                  # end-to-end (Protractor)
├── dist/                 # hasil build
├── node_modules/
├── AI-AGENT/             # dokumentasi AI agent (file ini)
└── src/
    ├── index.html
    ├── main.ts
    ├── polyfills.ts
    ├── styles.css        # global CSS
    ├── test.ts
    ├── favicon.ico
    ├── assets/           # bootstrap 4.4.1, jquery, jquery-ui, img, config.js
    ├── environments/
    │   ├── environment.ts         # dev
    │   └── environment.prod.ts    # production
    └── app/
        ├── app.module.ts
        ├── app-routing.module.ts
        ├── app.component.ts
        └── <feature-folder>/ ...  # lihat daftar di bawah
```

### 2.2 Folder fitur di `src/app`

Setiap folder mewakili satu modul/fitur. Pola file per folder:

- `*.component.ts` / `*.component.html` / `*.component.css` / `*.component.spec.ts`
- `*.ts` — file model/class data (contoh `lead.ts`, `sales-order.ts`, `quote.ts`)
- Sub-folder untuk varian halaman: `-detail`, `-create`, `-edit`, `-new`, `-modal`,
  `-print`, `-catalog`, `-product`, `-converd`, dsb.

Daftar folder fitur:

| Folder | Fungsi |
| --- | --- |
| `dashboard` | Dashboard + chart (Chart.js, d3-funnel) |
| `lead` | Leads (list, detail, convert, converted) |
| `contact` | Contacts (list, detail, new) |
| `company` | Companies (list, detail) |
| `opportunity` | Opportunities (list, detail, edit, new, modal) |
| `deal` | Deals (list, detail) |
| `lost` | Opportunities Lost (list, detail) |
| `quote` | Quotations (list, detail, print) |
| `sales-order` | Sales Orders (list, detail, create, print) |
| `price-list` | Products / Price List (list, detail, modal, product, catalog) |
| `customer-class` | Customer Class + Price-by-Class (`class-price-list`) |
| `activity` | Activities (+ `widget-activity`) |
| `access-right` | Access Right (list, detail) |
| `access-data` | Access Data Level |
| `account` | Account |
| `user` | Users (list, detail) |
| `profile` | My Profile |
| `master-*` | Master Data (industry, lead-source, class, currency, opportunity-closed) |
| `reports` | `sales-target` (Sales Target report) |
| `navigator` | **Komponen navbar global** (`app-navigator`) |
| `login` | Login + `relogin` |
| `warning` | Halaman peringatan akses ditolak |
| `notfound` | Halaman 404 |
| `guard` | Route guard (`active-guard.guard`) |
| `service` | Shared service (`config.service`, `errorhandle.service`) |
| `branch` | Hanya berisi `branch.ts` (model) |

### 2.3 Catatan penting (file sampah/duplikat)

Terdapat file duplikat/backup yang **harus diabaikan** oleh AI agent:

- `src/app/service/config.service - Copy.ts`
- `src/app/guard/active-guard.guard copy.ts`
- `src/assets/config.js` — **legacy, TIDAK dipakai**. Sumber konfigurasi yang benar
  adalah `src/environments/environment.ts`.

---

## 3. Stack Teknologi

### Frontend (`crm3-ng8`) — dari `package.json`

- **Angular 8.2.4** (`@angular/*` `~8.2.4`), **TypeScript ~3.5.3**, **RxJS ~6.4.0**, **zone.js ~0.9.1**
- **@angular/http ^7.2.16** (modul legacy) — dipakai bersama `HttpClientModule` dari `@angular/common/http`
- **@ng-bootstrap/ng-bootstrap ^5.3.0** — modal, dropdown, dsb.
- **ng2-currency-mask ^5.3.1** — input mata uang Rupiah
- **ngx-loading ^8.0.0** — spinner loading (`<ngx-loading>`)
- **ngx-sortablejs ^3.1.4** + **sortablejs ^1.10.2** — drag & drop
- **@angular/router ~8.2.4**, **@angular/forms ~8.2.4** (FormsModule / template-driven)

Library frontend (dimuat via `index.html` / `assets`):

- **Bootstrap 4.4.1** (lokal di `src/assets/bootstrap-4.4.1-dist`)
- **jQuery 3.4.1** + **jQuery UI 1.12.1** (lokal)
- **DataTables 1.10.20** (CDN) — tabel server-side
- **Chart.js 2.9.3** (CDN) — grafik
- **d3 3.5.3** + **d3-funnel** (CDN) — funnel chart
- **Font Awesome 5.8.2** (CDN)
- Google Fonts: **Open Sans**, **Source Sans Pro**

### Backend (`api-v1`)

- **CodeIgniter 3** (PHP, lihat `api-v1/index.php` & `application/`)
- Database **MySQL** (tabel prefix `crm3_*`), timezone `Asia/Jakarta`
- Autentikasi **JWT** (library `Jwt_lib`)
- Server-side DataTables via library `ssp`
- Struktur: `application/controllers`, `application/models`, `application/views`,
  `application/config`, `application/libraries`, dst.

---

## 4. Arsitektur Aplikasi Frontend

### 4.1 Pola modul tunggal (tanpa lazy loading)

- Hanya ada **satu `AppModule`** (`src/app/app.module.ts`).
- **Semua** komponen di-declare di `declarations: [...]`.
- **Semua** route didefinisikan di `AppRoutingModule` (`app-routing.module.ts`).
- Tidak ada feature modules, tidak ada lazy loading, tidak ada shared modules.
- `bootstrap: [AppComponent]`.

### 4.2 `AppComponent` minimal

```ts
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(){ console.log('Ng '+VERSION.full); }
}
```

- `AppComponent` **hanya berisi `<router-outlet>`** (template inline, tanpa file HTML).
- Navbar **bukan** di `AppComponent`, melainkan komponen `<app-navigator>` yang
  di-include manual di awal template setiap halaman.

### 4.3 `main.ts` & `index.html`

- Bootstrap standar `platformBrowserDynamic().bootstrapModule(AppModule)`.
- `index.html` memuat CSS/JS global (Bootstrap, jQuery, jQuery UI, DataTables,
  Chart.js, d3, d3-funnel) dan `<base href="./">`.

### 4.4 Services (root-scoped)

Semua service menggunakan `providedIn: 'root'` (singleton, tanpa perlu didaftarkan
di `providers` `AppModule`):

- **`ConfigService`** (`src/app/service/config.service.ts`) — pusat konfigurasi,
  token, header HTTP, dan hak akses.
- **`ErrorhandleService`** (`src/app/service/errorhandle.service.ts`) — util logging
  sederhana (belum banyak dipakai).
- **`ActiveGuardGuard`** (`src/app/guard/active-guard.guard.ts`) — route guard.

`AppModule.providers` hanya berisi konfigurasi currency mask:

```ts
providers: [
  { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
]
```

---

## 5. Router (Lengkap)

### 5.1 Konfigurasi global

```ts
RouterModule.forRoot(routes, { useHash: true })
```

- Menggunakan **hash routing**: URL tampil sebagai `/#/path`.
- Setiap route (hampir semua) punya `data: { title: '...' }`.
- Rute sensitif dilindungi `canActivate: [ActiveGuardGuard]`.

### 5.2 Daftar route lengkap

> `g` = `canActivate: [ActiveGuardGuard]` (butuh login + hak akses).
> Tanpa `g` = publik (tanpa guard).

| Path | Component | Title | Guard |
| --- | --- | --- | --- |
| `''` | `DashboardComponent` | Dashboard | g |
| `login` | `LoginComponent` | Login | — |
| `login/relogin` | `ReloginComponent` | Login | — |
| `dashboard` | `DashboardComponent` | Dashboard | g |
| `dashboard/:period` | `DashboardComponent` | Dashboard | g |
| `profile` | `ProfileComponent` | My Profile | g |
| `accessRight` | `AccessRightComponent` | Access Right | g |
| `accessRight/:id` | `AccessRightDetailComponent` | Access Right | g |
| `accessData` | `AccessDataComponent` | Access Data Level | g |
| `activity` | `ActivityComponent` | Activities | g |
| `activity/:filter` | `ActivityComponent` | Activities By Filter | g |
| `lead` | `LeadComponent` | Leads | g |
| `lead/converted` | `ConvertedComponent` | Conversion Leads | g |
| `lead/converted/:id` | `LeadConverdComponent` | Conversion Leads Detail | g |
| `lead/:id` | `LeadDetailComponent` | Leads Detail | g |
| `contact` | `ContactComponent` | Contacts | g |
| `contact/:id` | `ContactDetailComponent` | Contacts | g |
| `contact/filter/:filter` | `ContactComponent` | Contacts Filter | g |
| `company` | `CompanyComponent` | Companies | g |
| `company/:id` | `CompanyDetailComponent` | Company Detail | g |
| `CCPriceList` | `ClassPriceListComponent` | Price by Class | g |
| `CCPriceList/:id` | `ClassPriceListComponent` | Price by Class | g |
| `opportunity` | `OpportunityComponent` | Opportunities | g |
| `opportunity/:id` | `OpportunityDetailComponent` | Opportunity Detail | g |
| `opportunity/edit/:id` | `OpportunityEditComponent` | Contact | g |
| `opportunity/new/:id_company/:id_contact` | `OpportunityNewComponent` | New Opportunity | g |
| `deal` | `DealComponent` | Deals | g |
| `deal/:id` | `DealDetailComponent` | Deal Detail | g |
| `lost` | `LostComponent` | Lost | g |
| `lost/:id` | `LostDetailComponent` | Lost Detail | g |
| `quote` | `QuoteComponent` | Quotations | g |
| `quote/:id` | `QuoteDetailComponent` | Quotation Detail | g |
| `quote/print/:id` | `QuotePrintComponent` | Print Quotation | g |
| `salesOrder` | `SalesOrderComponent` | Sales Order | g |
| `salesOrder/modal/create` | `SalesOrderCreateComponent` | Create Sales Order | g |
| `salesOrder/:id` | `SalesOrderDetailComponent` | Sales Order | g |
| `salesOrder/print/:id` | `SalesOrderPrintComponent` | Print Sales Order | g |
| `user` | `UserComponent` | Users | g |
| `user/:id` | `UserDetailComponent` | Users Detail | g |
| `priceList` | `PriceListComponent` | Products | g |
| `priceList/modal/:module` | `PriceListModalComponent` | Products List | g |
| `priceList/:id` | `PriceListDetailComponent` | Product Detail | g |
| `priceList/product/:id` | `PriceListProductComponent` | Product Detail | g |
| `master/currency` | `MasterCurrencyComponent` | Master Currency | g |
| `master/industry` | `MasterIndustryComponent` | Master Industry | g |
| `master/leadSource` | `MasterLeadSourceComponent` | Master Lead Source | g |
| `master/class` | `MasterClassComponent` | Master Class | g |
| `master/opportunityClosed` | `MasterOpportunityClosedComponent` | Master Opportunities Closed | g |
| `master/account` | `AccountComponent` | Account | — |
| `reports/salesTarget` | `SalesTargetComponent` | Sales Target | — |
| `warning/:path/:target` | `WarningComponent` | — | — |
| `**` | `NotfoundComponent` | (kosong) | — |

### 5.3 Konvensi path

- Nama path **camelCase** untuk modul (`salesOrder`, `priceList`, `CCPriceList`,
  `leadSource`), campuran untuk master (`master/class`, `master/currency`).
- Detail memakai `:id`, print memakai `print/:id`, create/edit/new memakai prefix
  (`new/...`, `edit/:id`, `modal/create`).
- Navigasi internal pakai `[routerLink]="[ '/path' ]"` atau `this.router.navigate(['/path', id])`.
- Hash link manual di DataTables render: `'<a href="#/lead/' + row[0] + '">...'`.

---

## 6. Autentikasi & Otorisasi

### 6.1 Alur login

1. `LoginComponent.onSubmit()` → `POST ${environment.api}auth/login` dengan body
   `{ username, password }`.
2. Response sukses berisi `{ token, user }`; token (JWT) disimpan ke
   `localStorage.setItem('tokenCrmCoId', res.token)`.
3. `ConfigService.loadToken()` dipanggil untuk me-refresh `varToken` & `varData`.
4. Redirect ke `'/'` (dashboard).

> Key localStorage: **`tokenCrmCoId`** (satu-satunya key yang dipakai).

### 6.2 `ConfigService` — API utama

File: `src/app/service/config.service.ts`.

| Member | Fungsi |
| --- | --- |
| `varKey` | Static API key (string) |
| `varToken` | Token JWT dari localStorage |
| `varData` | Payload JWT hasil `parseJwt()` |
| `varHeaders` | `HttpHeaders` siap pakai |
| `loadToken()` | Baca token, parse JWT, cek expiry |
| `parseJwt(token)` | Decode payload JWT (base64url) |
| `logout()` | Hapus token, redirect ke `login` |
| `access_rules(module)` | Ambil hak akses per modul dari JWT |
| `access_right()` | Ambil seluruh `access_rules` (untuk tombol) |
| `username()` | Ambil nama user dari JWT |
| `base_url()` | `environment.api` |
| `headers()` | `HttpHeaders` `{ Content-Type, Token }` |
| `key()` | `varKey` |
| `token()` | `varToken` |
| `id_user()` | (alias `varToken`) |
| `login()` | `environment.login` |
| `errorToken(data)` | Logout jika `data.error == 400` |
| `getCookie(name)` | Util baca cookie |

Struktur payload JWT (dari `Auth.php` backend):

```json
{
  "id": 1,
  "email": "...",
  "id_user_access": 2,
  "id_user_group": 0,
  "id_parent": 0,
  "folder": "...",
  "access_rules": {
    "name": "Nama User",
    "level": "Admin",
    "result": { "access_rules": { "<module>": { "access": true } } }
  }
}
```

Path akses yang dipakai frontend:

- `varData['data']['access_rules']['name']` → username
- `varData['data']['access_rules']['result']['access_rules']` → seluruh rules
- `...['result']['access_rules'][module]['access']` → boolean akses modul

### 6.3 `ActiveGuardGuard`

File: `src/app/guard/active-guard.guard.ts`. Logika:

1. Tidak ada token → redirect `login/relogin`, return `false`.
2. Token ada tapi `varData` null (expired/invalid) → redirect `login/relogin`, `false`.
3. Route tanpa path segment → `true`.
4. `access_rules(modulePath)` true atau `modulePath == 'profile'` → `true`.
5. Selain itu → redirect `/warning/access/<module>`, `false`.

> `modulePath` diambil dari `route.url[0].path` (segmen pertama path).

---

## 7. Komunikasi dengan Backend (API)

### 7.1 Base URL

- Dev: `http://localhost:7344/crm.co.id/api-v1/`
- Prod: `https://s01.crm.co.id/api-v1/`
- Login endpoint: `http://localhost:7344/crm.co.id/login/` (dev) / `https://s01.crm.co.id/login/` (prod)

### 7.2 Pola panggilan HTTP

Semua lewat `HttpClient` (`@angular/common/http`), di-inject `private http: HttpClient`.

```ts
// GET
this.http.get(url, { headers: this.configService.headers() })
  .subscribe(data => { /* data['result'] ... */ }, error => { console.log(error); });

// POST JSON
this.http.post(this.configService.base_url() + 'lead/update',
  { "id_lead": this.id, "data": this.lead },
  { headers: this.configService.headers() }
).subscribe(data => { /* ... */ }, error => { /* ... */ });

// GET DataTables (jQuery AJAX)
$('#dtable').DataTable({
  ajax: {
    url: this.configService.base_url() + "lead/index/",
    type: 'GET',
    headers: { 'Content-Type': 'application/json', 'Token': this.configService.token() }
  },
  // ...
});
```

### 7.3 Format response API

Standar (kebanyakan endpoint):

```json
{ "error": 0, "result": { ... } }
```

- Cek sukses: `if (data['error'] != 0) { ... }` lalu akses `data['result']['...']`.
- Akses field memakai **bracket notation** (`data['result']['lead']`), bukan dot.
- Error ditangani dengan `error => { console.log(error); console.log(error.error.text); }`.

Auth/login mengembalikan `{ token, user }` (tanpa wrapper `error/result`).

### 7.4 Nama endpoint (contoh)

`base_url()` + `'lead/index'`, `'lead/detail/'+id`, `'lead/insert'`,
`'lead/update'`, `'lead/fn_delete'`, `'lead/fn_updateLeadStatus'`,
`'lead/convert'`, `'dashboard/index/?id='+id+'&period='+period`,
`'upload/attachment'` (FormData multipart), `'auth/login'`, dsb.

---

## 8. Model / Kelas Data

Model didefinisikan sebagai **class TypeScript biasa** (bukan interface) di file
`.ts` dalam folder fitur (mis. `lead/lead.ts`, `sales-order/sales-order.ts`).

Dua pola yang dipakai:

1. **Class ber-property** (meniru shape response):

```ts
export class Lead {
    error: number;
    result: [{
        data: [ { id: string; name: string; /* ... */ } ],
        total: number;
    }]
}
```

2. **Class dengan constructor params** (untuk payload create/update):

```ts
export class Newlead {
    constructor(
        public id_user: string,
        public id_title: string,
        public first_name: string,
        // ...
    ) { }
}
```

Model dipakai sebagai tipe generik `.get<LeadDetail[]>(...)` atau di-instantiate
`new Newlead(...)`, `new UpdateLead(...)`.

> Catatan: pada praktiknya banyak properti komponen bertipe `any`, dan tipe model
> sering tidak 100% selaras dengan response (frontend banyak pakai `data['result']`).

---

## 9. Gaya & Konvensi Penulisan Kode

### 9.1 Aturan dari `tslint.json`

- **Single quote** untuk string (`quotemark: [true, "single"]`).
- **Max line length 140** karakter.
- **Indentasi 2 spasi**.
- Selector komponen: **element** + prefix **`app`** + **kebab-case** (contoh `app-lead`).
- Selector directive: **attribute** + `app` + camelCase.
- Suffix class: `...Component`, `...Directive`.
- `interface-name` dimatikan (boleh tanpa prefix `I`).
- `member-ordering`: static-field → instance-field → static-method → instance-method.
- `no-console`: hanya melarang `console.debug/info/time/timeEnd/trace` — **`console.log`
  masih dibolehkan** dan memang banyak dipakai.
- `ordered-imports` dimatikan, `trailing-comma` dimatikan, `arrow-parens` dimatikan,
  `no-consecutive-blank-lines` dimatikan.

> Catatan nyata: sebagian file lama memakai **double quotes** dan style tidak konsisten.
> AI agent sebaiknya mengikuti file terdekat / konteks setempat.

### 9.2 Konvensi umum di kode

- **Nama file** kebab-case: `lead-detail.component.ts`, `active-guard.guard.ts`.
- **Class** PascalCase: `LeadDetailComponent`, `ConfigService`.
- **Method** camelCase, sering diawali prefix:
  - `http...` untuk pengambilan data: `httpGet()`, `httpSelected()`.
  - `fn_...` untuk aksi: `fn_update()`, `fn_delete()`, `fn_check()`, `fn_newActivity()`.
  - `on...` untuk event: `onSubmit()`, `onConvert()`, `onFileSelected()`, `onUpload()`.
- **Property** sering diawali `public` dengan tipe eksplisit, tapi banyak juga `any`
  dan inisialisasi kosong (`[]`, `''`, `false`, `null`).
- Setiap komponen utama `implements OnInit` dan isi logika awal di `ngOnInit()`.
- Injection dependency via constructor dengan `private`:

```ts
constructor(
  private http: HttpClient,
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private modalService: NgbModal,
  config: NgbModalConfig,
  private configService: ConfigService
) { config.backdrop = 'static'; config.keyboard = false; }
```

- Deklarasi library global (jQuery/Chart/d3) di file yang memakainya:

```ts
declare var $;
declare var Chart;
declare var D3Funnel;
```

### 9.3 Pola komponen umum

**List page** (mis. `LeadComponent`):

- `<ngx-loading [show]="loading"></ngx-loading>` di baris pertama.
- `<app-navigator></app-navigator>` di baris berikutnya.
- Breadcrumb "You are here".
- Tabel DataTables `<table id="dtable">` diinisialisasi di `httpGet()` dengan
  `ajax.url = base_url() + '<module>/index/'` + headers token.
- Tombol "New ..." membuka modal `this.modalService.open(content, { size: 'lg' })`.
- Aksi bulk (`fn_delete`, `fn_updateLeadStatus`) mengirim `itemsSelected`.

**Detail page** (mis. `LeadDetailComponent`):

- Ambil id dari `this.activatedRoute.snapshot.params.id`.
- `httpGet()` memanggil `base_url() + '<module>/detail/' + id`, lalu memetakan
  `data['result']['...']` ke properti komponen.
- Form pakai `[(ngModel)]` (template-driven, `FormsModule`).
- Upload file pakai `FormData` + `upload/attachment`.

**Navigator (`app-navigator`)**:

- Menampilkan navbar, set judul tab via `Title` service dari `activatedRoute.data`.
- `this.nav = this.activatedRoute.snapshot.routeConfig.path.split("/")` → segmen pertama
  jadi `current` untuk menentukan menu aktif.
- `signout()` hapus token lalu redirect `login/relogin`.

### 9.4 Pola template HTML

- Bootstrap 4: `container-fluid`, `row`, `col-*`, `table table-hover`, `btn btn-sm`,
  `modal`, `dropdown`.
- DataTables: `<table id="dtable" class="table ...">` dengan `<thead>`, `<tfoot>` filter.
- Modal ng-bootstrap: `<ng-template #newLead let-modal> ... </ng-template>`.
- Ikon Font Awesome: `<i class="fas fa-plus"></i>`.
- Kondisi: `*ngIf`, `[hidden]`, interpolasi `{{ ... }}`.
- Currency mask: directive `currencyMask` dengan config `Rp` di `AppModule`.

### 9.5 Konfigurasi currency mask (di `app.module.ts`)

```ts
export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right", allowNegative: false, decimal: ",", precision: 0,
  prefix: "Rp ", suffix: "", thousands: "."
};
```

---

## 10. Konfigurasi Environment

File `src/environments/environment.ts` (dev) & `environment.prod.ts` (prod).

```ts
export const environment = {
  production: false,
  domain : "https://www.crm.co.id",
  root   : "http://localhost:4200/home",
  api    : "http://localhost:7344/crm.co.id/api-v1/",
  login  : "http://localhost:7344/crm.co.id/login/"
};
```

`angular.json` mengganti `environment.ts` → `environment.prod.ts` saat
`ng build --prod` (via `fileReplacements`).

---

## 11. Backend `api-v1` (CodeIgniter 3) — Ringkas

- Framework **CodeIgniter 3**, entry `api-v1/index.php`, default controller `home`.
- Folder `application/controllers/` berisi controller per modul (nama PascalCase):
  `Auth`, `Lead`, `Contact`, `Company`, `Opportunity`, `Deal`, `Quote`, `Pricelist`,
  `Product`, `Sales_order`, `User`, `Access_right`, `Access_data`, `Dashboard`,
  `Activity`, `Lost`, `Converted`, `Profile`, `Report_sales_target`, `Upload`,
  `Currency`, `Industry`, `Leadsource`, `Classmaster`, `Company_class`,
  `Opportunity_closed_reason`, `Account`, `Branch`, `Datatables`, `Output`, dst.
- `application/models/`: `Model.php` (model utama berisi query/helper umum),
  `User_model.php`.
- `application/libraries/`: `Jwt_lib` (JWT), `ssp` (server-side DataTables).
- Setiap controller set header CORS + `Content-Type: application/json`, timezone
  `Asia/Jakarta`, dan handle preflight `OPTIONS`.
- Response umum: `echo json_encode([...])` atau `$this->_response($data, $code)`.
- DataTables server-side memakai helper `ssp` dengan `$table` (subquery),
  `$primaryKey`, `$columns` (map `db` → `dt`), `$sql_details`.

---

## 12. Perintah / Command

```bash
cd crm3-ng8
npm install
npm start          # ng serve --source-map=false --o  (dev server)
npm run build      # ng build --source-map=false --prod
npm test           # ng test (Karma/Jasmine)
npm run lint       # ng lint (tslint)
npm run e2e        # ng e2e (Protractor)
```

> Dev server jalan di `http://localhost:4200` (hash routing, jadi akses mis.
> `http://localhost:4200/#/dashboard`).

---

## 13. Panduan untuk AI Agent (Do & Don't)

### Yang HARUS diikuti saat mengubah/menambah kode

1. **Registrasi manual** di `app.module.ts` (`declarations`) dan `app-routing.module.ts`
   untuk komponen/route baru — karena tidak ada lazy loading / auto-discovery.
2. Pakai **single quote**, indentasi 2 spasi, selector `app-<kebab-case>`.
3. Panggil API lewat `this.configService.base_url() + 'endpoint'` dan
   `headers: this.configService.headers()`.
4. Cek response pakai `data['error']` / `data['result']` (bracket notation).
5. Tambahkan `data: { title: '...' }` dan `canActivate: [ActiveGuardGuard]` untuk
   route baru yang butuh login.
6. Gunakan `FormsModule` (template-driven) + `[(ngModel)]`, bukan ReactiveForms.
7. Gunakan `ngx-loading` untuk spinner, `NgbModal` untuk modal, `currencyMask`
   untuk input Rupiah.
8. Ikuti pola `httpGet()` / `fn_...` / `on...` untuk nama method.
9. Jangan hapus/ubah `localStorage['tokenCrmCoId']` di luar alur login/logout.
10. Abaikan file `*- Copy.ts` / `* copy.ts` dan `src/assets/config.js`.

### Yang JANGAN dilakukan

1. Jangan tambahkan feature module / lazy loading (konsisten dengan arsitektur
   single-module saat ini).
2. Jangan ganti routing ke non-hash (jangan hilangkan `useHash: true`).
3. Jangan memakai `interface`/tipe ketat secara berlebihan — codebase banyak memakai
   `any` dan bracket notation.
4. Jangan menghapus `declare var $;` / `declare var Chart;` / `declare var D3Funnel;`
   pada file yang memakai library global tersebut.
5. Jangan panggil API langsung tanpa `ConfigService` (kecuali `auth/login`).

---

## 14. Peta Alur Bisnis (singkat)

```
Login (auth/login → JWT)
  → Dashboard
  → Leads → (convert) → Contact + Company + Opportunity
            → Opportunity → Quote → Deal → Sales Order
  → Activities / Lost / Reports
  → Users / Access Right / Access Data (admin)
  → Master Data (currency, industry, lead source, class, closed reason, account)
```

---

*Dokumen ini dihasilkan dari analisis langsung kode di
`C:\xampp7433\htdocs\crm.co.id\crm3-ng8` (dan referensi backend `api-v1`).*

