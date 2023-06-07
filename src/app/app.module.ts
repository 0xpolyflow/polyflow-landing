import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionZeroComponent } from './section-zero/section-zero.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeroComponent } from './hero/hero.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContractsDashboardComponent } from './dashboard/contracts-dashboard/contracts-dashboard.component';
import { NetworksDashboardComponent } from './dashboard/networks-dashboard/networks-dashboard.component';
import { WorksapcesSwitcherComponent } from './dashboard/worksapces-switcher/worksapces-switcher.component';
import { CreateNewContractItemComponent } from './dashboard/create-new-contract-item/create-new-contract-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressBookDashboardComponent } from './dashboard/address-book-dashboard/address-book-dashboard.component';
import { AnalyticsSectionComponent } from './analytics-section/analytics-section.component';
import { AnalyticsDashboardComponent } from './dashboard/analytics-dashboard/analytics-dashboard.component';
import { BenfitsSectionComponent } from './benfits-section/benfits-section.component';
import { ComplianceComponent } from './dashboard/compliance/compliance.component';
import { PluginsDashboardComponent } from './dashboard/plugins-dashboard/plugins-dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { IconItemHolderComponent } from './shared/components/icon-item-holder/icon-item-holder.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionOneComponent,
    SectionZeroComponent,
    SectionTitleComponent,
    SectionTwoComponent,
    PricingComponent,
    HeroComponent,
    SectionThreeComponent,
    DashboardComponent,
    ContractsDashboardComponent,
    NetworksDashboardComponent,
    WorksapcesSwitcherComponent,
    CreateNewContractItemComponent,
    AddressBookDashboardComponent,
    AnalyticsSectionComponent,
    AnalyticsDashboardComponent,
    BenfitsSectionComponent,
    ComplianceComponent,
    PluginsDashboardComponent,
    AboutusComponent,
    FooterComponent,
    ThankYouComponent,
    IconItemHolderComponent,
    PartnershipsComponent,
    ContactUsComponent,
    CustomerSupportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
