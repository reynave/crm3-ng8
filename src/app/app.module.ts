import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadComponent } from './lead/lead.component';
import { LeadDetailComponent } from './lead/lead-detail/lead-detail.component';
import { LeadConvertComponent } from './lead/lead-convert/lead-convert.component';
import { ActivityComponent } from './activity/activity.component';
import { WidgetActivityComponent } from './activity/widget-activity/widget-activity.component';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { OpportunityDetailComponent } from './opportunity/opportunity-detail/opportunity-detail.component';
import { OpportunityEditComponent } from './opportunity/opportunity-edit/opportunity-edit.component';
import { OpportunityNewComponent } from './opportunity/opportunity-new/opportunity-new.component';
import { ModalOpportunityComponent } from './opportunity/modal-opportunity/modal-opportunity.component';
import { PriceListComponent } from './price-list/price-list.component';
import { PriceListCatalogComponent } from './price-list/price-list-catalog/price-list-catalog.component';
import { PriceListModalComponent } from './price-list/price-list-modal/price-list-modal.component';
import { PriceListProductComponent } from './price-list/price-list-product/price-list-product.component';

import { QuoteComponent } from './quote/quote.component';
import { DealComponent } from './deal/deal.component';
import { LoseComponent } from './lose/lose.component';
import { DealDetailComponent } from './deal/deal-detail/deal-detail.component';
import { QuoteDetailComponent } from './quote/quote-detail/quote-detail.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { SortablejsModule } from 'ngx-sortablejs';
import { QuotePrintComponent } from './quote/quote-print/quote-print.component';
import { ContactNewComponent } from './contact/contact-new/contact-new.component';
import { WarningComponent } from './warning/warning.component';
import { AccessRightComponent } from './access-right/access-right.component';
import { AccessRightDetailComponent } from './access-right/access-right-detail/access-right-detail.component';
import { CustomerClassComponent } from './customer-class/customer-class.component';
import { ClassPriceListComponent } from './customer-class/class-price-list/class-price-list.component';
import { PriceListDetailComponent } from './price-list/price-list-detail/price-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadComponent,
    LeadDetailComponent,
    LeadConvertComponent,
    ActivityComponent,
    WidgetActivityComponent,
    CompanyComponent,
    CompanyDetailComponent,
    ContactComponent,
    ContactDetailComponent,
    OpportunityComponent,
    OpportunityDetailComponent,
    OpportunityEditComponent,
    OpportunityNewComponent,
    ModalOpportunityComponent,
    PriceListComponent,
    PriceListCatalogComponent,
    PriceListModalComponent,
    PriceListProductComponent,
    QuoteComponent,
    DealComponent,
    LoseComponent,
    DealDetailComponent,
    QuoteDetailComponent,
    NavigatorComponent,
    QuotePrintComponent,
    ContactNewComponent,
    WarningComponent,
    AccessRightComponent,
    AccessRightDetailComponent,
    CustomerClassComponent,
    ClassPriceListComponent,
    PriceListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    SortablejsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
