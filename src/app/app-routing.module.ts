import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AnalyticsSectionComponent } from './analytics-section/analytics-section.component';
import { AnalyticsDashboardComponent } from './dashboard/analytics-dashboard/analytics-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NetworksDashboardComponent } from './dashboard/networks-dashboard/networks-dashboard.component';
import { HeroComponent } from './hero/hero.component';
import { PricingComponent } from './pricing/pricing.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';

const routes: Routes = [
  { path: '', component: AnalyticsSectionComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'partnerships', component: PartnershipsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'customer-support', component: CustomerSupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
