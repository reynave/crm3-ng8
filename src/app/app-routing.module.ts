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

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
 
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: 'dashboard/:period', component: DashboardComponent, data: { title: 'Dashboard' } },
 
  { path: 'profile', component: ProfileComponent, data: { title: 'My Profile' } },
 

  { path: 'accessRight', component: AccessRightComponent, data: { title: 'Access Rigth' }, canActivate: [ActiveGuardGuard] },
  { path: 'accessRight/:id', component: AccessRightDetailComponent, data: { title: 'Access Rigth' }, canActivate: [ActiveGuardGuard] },
  
  { path: 'accessData', component: AccessDataComponent, data: { title: 'Access Data Level' }, canActivate: [ActiveGuardGuard] },
 
  

  { path: "activity", component: ActivityComponent,  data: { title: 'Activity' }, canActivate: [ActiveGuardGuard] },

  { path: 'lead', component: LeadComponent, data: { title: 'Lead' }, canActivate: [ActiveGuardGuard] },
  { path: 'lead/:id', component: LeadDetailComponent, data: { title: 'Lead Detail' }, canActivate: [ActiveGuardGuard] }, 
  { path: 'lead/converted/:id', component: LeadConverdComponent, data: { title: 'Lead Converted' }, canActivate: [ActiveGuardGuard] },

  { path: "contact", component: ContactComponent, data: { title: 'Contact' }, canActivate: [ActiveGuardGuard] },
  { path: "contact/:id", component: ContactDetailComponent, data: { title: 'Contact' }, canActivate: [ActiveGuardGuard] },

  { path: "company", component: CompanyComponent, canActivate: [ActiveGuardGuard] },
  { path: "company/:id", component: CompanyDetailComponent, canActivate: [ActiveGuardGuard] },

  { path: "CCPriceList", component: ClassPriceListComponent, canActivate: [ActiveGuardGuard] },
  { path: "CCPriceList/:id", component: ClassPriceListComponent, canActivate: [ActiveGuardGuard] },

  { path: "opportunity", component: OpportunityComponent, canActivate: [ActiveGuardGuard] },
  { path: "opportunity/:id", component: OpportunityDetailComponent, canActivate: [ActiveGuardGuard] },
  { path: "opportunity/edit/:id", component: OpportunityEditComponent, canActivate: [ActiveGuardGuard] },
  { path: "opportunity/new/:id_company/:id_contact", component: OpportunityNewComponent, canActivate: [ActiveGuardGuard] },


  { path: "deal", component: DealComponent, canActivate: [ActiveGuardGuard] },
  { path: "deal/:id", component: DealDetailComponent, canActivate: [ActiveGuardGuard] },

  { path: "lose", component: LoseComponent, canActivate: [ActiveGuardGuard] },
  { path: "lose/:id", component: LoseComponent, canActivate: [ActiveGuardGuard] },

  { path: "quote", component: QuoteComponent, data: { title: 'Quote' }, canActivate: [ActiveGuardGuard] },
  { path: "quote/:id", component: QuoteDetailComponent, data: { title: 'Quote' }, canActivate: [ActiveGuardGuard] },
  { path: "quote/print/:id", component: QuotePrintComponent, data: { title: 'Print Quote' }, canActivate: [ActiveGuardGuard] },


  { path: "salesOrder", component: SalesOrderComponent, data: { title: 'Sales Order' }, canActivate: [ActiveGuardGuard] },
  { path: "salesOrder/modal/create", component: SalesOrderCreateComponent, data: { title: 'Create Sales Order' }, canActivate: [ActiveGuardGuard] },
  { path: "salesOrder/:id", component: SalesOrderDetailComponent, data: { title: 'Sales Order' }, canActivate: [ActiveGuardGuard] },
  { path: "salesOrder/print/:id", component: SalesOrderPrintComponent, data: { title: 'Print Sales Order' }, canActivate: [ActiveGuardGuard] },

  { path: "user", component: UserComponent, canActivate: [ActiveGuardGuard] },
  { path: "user/:id", component: UserDetailComponent, canActivate: [ActiveGuardGuard] },
  

  { path: "priceList", component: PriceListComponent, canActivate: [ActiveGuardGuard] },
  { path: "priceList/modal/:module", component: PriceListModalComponent, canActivate: [ActiveGuardGuard] },
  { path: "priceList/:id", component: PriceListDetailComponent, canActivate: [ActiveGuardGuard] },
  { path: "priceList/product/:id", component: PriceListProductComponent, canActivate: [ActiveGuardGuard] },

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
 