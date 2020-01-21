import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadComponent } from './lead/lead.component';
import { LeadDetailComponent } from './lead/lead-detail/lead-detail.component';
import { LeadEditComponent } from './lead/lead-edit/lead-edit.component';
import { LeadConvertComponent } from './lead/lead-convert/lead-convert.component';
import { ActivityComponent } from './activity/activity.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
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
import { PriceListCatalogComponent } from './price-list/price-list-catalog/price-list-catalog.component';
import { PriceListProductComponent } from './price-list/price-list-product/price-list-product.component';
import { PriceListModalComponent } from './price-list/price-list-modal/price-list-modal.component';
import { QuotePrintComponent } from './quote/quote-print/quote-print.component';


const routes: Routes = [
  
  { path: "activity", component: ActivityComponent },

  { path: 'lead', component: LeadComponent,  data : {title : 'Lead'} },
  { path: 'lead/:id', component: LeadDetailComponent,  data : {title : 'Lead Detail'} }, 
  { path: 'lead/edit/:id', component: LeadEditComponent,  data : {title : 'Quote'} }, 
  { path: 'lead/convert/:id', component: LeadConvertComponent , data : {title : 'Lead Convert'} }, 
  
  { path: "contact", component: ContactComponent },
  { path: "contact/:id", component: ContactDetailComponent },
  { path: "contact/edit/:id", component: ContactEditComponent },

  { path: "company", component: CompanyComponent},
  { path: "company/:id", component: CompanyDetailComponent },
  { path: "company/edit/:id", component: CompanyEditComponent },


  { path: "opportunity", component: OpportunityComponent },
  { path: "opportunity/:id", component: OpportunityDetailComponent },
  { path: "opportunity/edit/:id", component: OpportunityEditComponent},
  { path: "opportunity/new/:id_company/:id_contact", component: OpportunityNewComponent },
  

  { path: "deal", component: DealComponent },
  { path: "deal/:id", component: DealDetailComponent },

  { path: "lose", component: LoseComponent },
  { path: "lose/:id", component: LoseComponent },

  { path: "quote", component: QuoteComponent, data : {title : 'Quote'}},
  { path: "quote/:id", component: QuoteDetailComponent, data : {title : 'Quote'} }, 
  { path: "quote/print/:id", component: QuotePrintComponent, data : {title : 'Print Quote'}  }, 

  { path: "priceList", component: PriceListComponent },
  { path: "priceList/modal/:module", component: PriceListModalComponent },
  { path: "priceList/:id", component: PriceListCatalogComponent },
  { path: "priceList/product/:id", component: PriceListProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
