import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadComponent } from './lead/lead.component';
import { LeadDetailComponent } from './lead/lead-detail/lead-detail.component'; 
import { ActivityComponent } from './activity/activity.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { OpportunityDetailComponent } from './opportunity/opportunity-detail/opportunity-detail.component';
import { OpportunityEditComponent } from './opportunity/opportunity-edit/opportunity-edit.component';
import { OpportunityNewComponent } from './opportunity/opportunity-new/opportunity-new.component';
import { DealComponent } from './deal/deal.component';
import { DealDetailComponent } from './deal/deal-detail/deal-detail.component';
import { LoseComponent } from './lose/lose.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote/quote-detail/quote-detail.component';
import { PriceListComponent } from './price-list/price-list.component'; 
import { PriceListProductComponent } from './price-list/price-list-product/price-list-product.component';
import { PriceListModalComponent } from './price-list/price-list-modal/price-list-modal.component';
import { QuotePrintComponent } from './quote/quote-print/quote-print.component';
import { ActiveGuardGuard } from './guard/active-guard.guard';
import { WarningComponent } from './warning/warning.component';
import { AccessRightComponent } from './access-right/access-right.component';
import { AccessRightDetailComponent } from './access-right/access-right-detail/access-right-detail.component';
import { ClassPriceListComponent } from './customer-class/class-price-list/class-price-list.component'; 
import { PriceListDetailComponent } from './price-list/price-list-detail/price-list-detail.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { SalesOrderDetailComponent } from './sales-order/sales-order-detail/sales-order-detail.component';
import { SalesOrderCreateComponent } from './sales-order/sales-order-create/sales-order-create.component';
import { SalesOrderPrintComponent } from './sales-order/sales-order-print/sales-order-print.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component'; 
import { LeadConverdComponent } from './lead/lead-converd/lead-converd.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterIndustryComponent } from './master-industry/master-industry.component';
import { MasterLeadSourceComponent } from './master-lead-source/master-lead-source.component';
import { AccessDataComponent } from './access-data/access-data.component';
import { MasterClassComponent } from './master-class/master-class.component';
import { ProfileComponent } from './profile/profile.component';
import { ConvertedComponent } from './lead/converted/converted.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
 
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: 'dashboard/:period', component: DashboardComponent, data: { title: 'Dashboard' } },
 
  { path: 'profile', component: ProfileComponent, data: { title: 'My Profile' } },
 

  { path: 'accessRight', component: AccessRightComponent, data: { title: 'Access Rigth' }, canActivate: [ActiveGuardGuard] },
  { path: 'accessRight/:id', component: AccessRightDetailComponent, data: { title: 'Access Rigth' }, canActivate: [ActiveGuardGuard] },
  
  { path: 'accessData', component: AccessDataComponent, data: { title: 'Access Data Level' }, canActivate: [ActiveGuardGuard] },
 
  

  { path: "activity", component: ActivityComponent,  data: { title: 'Activities' }, canActivate: [ActiveGuardGuard] },
  { path: "activity/:filter", component: ActivityComponent,  data: { title: 'Activities By Filter' }, canActivate: [ActiveGuardGuard] },


  { path: 'lead', component: LeadComponent, data: { title: 'Leads' }, canActivate: [ActiveGuardGuard] }, 
  { path: 'lead/converted', component: ConvertedComponent, data: { title: 'Conversion Leads' }, canActivate: [ActiveGuardGuard] }, 
  { path: 'lead/converted/:id', component: LeadConverdComponent, data: { title: 'Conversion Lead Detail' }, canActivate: [ActiveGuardGuard] },
  { path: 'lead/:id', component: LeadDetailComponent, data: { title: 'Lead Detail' }, canActivate: [ActiveGuardGuard] }, 

  { path: "contact", component: ContactComponent, data: { title: 'Contact' }, canActivate: [ActiveGuardGuard] },
  { path: "contact/:id", component: ContactDetailComponent, data: { title: 'Contact' }, canActivate: [ActiveGuardGuard] },

  { path: "company", component: CompanyComponent, data: { title: 'Companies' },canActivate: [ActiveGuardGuard] },
  { path: "company/:id", component: CompanyDetailComponent, data: { title: 'Company Detail' },canActivate: [ActiveGuardGuard] },

  { path: "CCPriceList", component: ClassPriceListComponent, data: { title: 'Price by Class' },canActivate: [ActiveGuardGuard] },
  { path: "CCPriceList/:id", component: ClassPriceListComponent,data: { title: 'Price by Class' }, canActivate: [ActiveGuardGuard] },

  { path: "opportunity", component: OpportunityComponent, data: { title: 'Opportunities' },canActivate: [ActiveGuardGuard] },
  { path: "opportunity/:id", component: OpportunityDetailComponent,data: { title: 'Opportunity Detail' }, canActivate: [ActiveGuardGuard] },
  { path: "opportunity/edit/:id", component: OpportunityEditComponent, data: { title: 'Contact' },canActivate: [ActiveGuardGuard] },
  { path: "opportunity/new/:id_company/:id_contact", component: OpportunityNewComponent, data: { title: 'New Opportunity' },canActivate: [ActiveGuardGuard] },


  { path: "deal", component: DealComponent,data: { title: 'Deals' }, canActivate: [ActiveGuardGuard] },
  { path: "deal/:id", component: DealDetailComponent, data: { title: 'Deal Detail' },canActivate: [ActiveGuardGuard] },

  { path: "lose", component: LoseComponent, data: { title: 'Loses' },canActivate: [ActiveGuardGuard] },
  { path: "lose/:id", component: LoseComponent,data: { title: 'Lose Detail' }, canActivate: [ActiveGuardGuard] },

  { path: "quote", component: QuoteComponent, data: { title: 'Quotations' }, canActivate: [ActiveGuardGuard] },
  { path: "quote/:id", component: QuoteDetailComponent, data: { title: 'Quotation Detail' }, canActivate: [ActiveGuardGuard] },
  { path: "quote/print/:id", component: QuotePrintComponent, data: { title: 'Print Quotation' }, canActivate: [ActiveGuardGuard] },


  { path: "salesOrder", component: SalesOrderComponent, data: { title: 'Sales Order' }, canActivate: [ActiveGuardGuard] },
  { path: "salesOrder/modal/create", component: SalesOrderCreateComponent, data: { title: 'Create Sales Order' }, canActivate: [ActiveGuardGuard] },
  { path: "salesOrder/:id", component: SalesOrderDetailComponent, data: { title: 'Sales Order' }, canActivate: [ActiveGuardGuard] },
  { path: "salesOrder/print/:id", component: SalesOrderPrintComponent, data: { title: 'Print Sales Order' }, canActivate: [ActiveGuardGuard] },

  { path: "user", component: UserComponent, data: { title: 'Users' },canActivate: [ActiveGuardGuard] },
  { path: "user/:id", component: UserDetailComponent,data: { title: 'User Detail' }, canActivate: [ActiveGuardGuard] },
  

  { path: "priceList", component: PriceListComponent,data: { title: 'Products' }, canActivate: [ActiveGuardGuard] },
  { path: "priceList/modal/:module", component: PriceListModalComponent, data: { title: 'Products List' },canActivate: [ActiveGuardGuard] },
  { path: "priceList/:id", component: PriceListDetailComponent, data: { title: 'Product Detail' },canActivate: [ActiveGuardGuard] },
  { path: "priceList/product/:id", component: PriceListProductComponent, data: { title: 'Product Detail' },canActivate: [ActiveGuardGuard] },

  { path: "master/industry", component: MasterIndustryComponent, data: { title: 'Master Industry' }, canActivate: [ActiveGuardGuard]  }, 
  { path: "master/leadSource", component: MasterLeadSourceComponent, data: { title: 'Master Lead Source' },  canActivate: [ActiveGuardGuard]  }, 
  { path: "master/class", component: MasterClassComponent, data: { title: 'Master Class' },  canActivate: [ActiveGuardGuard]  }, 
 
  
  
//  { path: "master/group", component: MasterLeadSourceComponent, data: { title: 'Master Lead Source' }, },
 

  { path: "warning/:path/:target", component: WarningComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 