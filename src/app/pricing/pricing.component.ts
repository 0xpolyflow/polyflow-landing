import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricingType: 'month' | 'year' = 'month'

  existingUser = this.route.snapshot.queryParams['existingUser']

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { }

  priceItems: PricingItem[] = [
    {
      name: 'Business',
      description: 'A package with high usage limits, a dedicated account manager, ability to self-host entire infrastructure & create customized data pipelines.',
      accented: false,
      prices: {
        buyNowMonthly: { amount: 298, stripeURL: 'https://buy.stripe.com/test_5kA9Ee7rP07Feuk5kl' },
        buyNowYearly: { amount: 91, stripeURL: '' },
        trialMonthly: { amount: 19, stripeURL: '' },
        trialYearly: { amount: 19, stripeURL: '' },
      },
      features: {
        seats: "20",
        domains: "Unlimited",
        trackedWallets: '5.000',
        other: ['Everything from Pro', 'Dedicated Account Manager','Self-Host Platform']
      }
    },
    {
      name: 'Pro',
      description: 'A package for companies managing multiple Web3 projects with dedicated marketing and/or customer support persons.',
      accented: true,
      prices: {
        buyNowMonthly: { amount: 58, stripeURL: '' },
        buyNowYearly: { amount: 19, stripeURL: '' },
        trialMonthly: { amount: 19, stripeURL: '' },
        trialYearly: { amount: 19, stripeURL: '' },
      },
      features: {
        seats: "5",
        domains: "5",
        trackedWallets: '1.000',
        other: ['Everything from Indie', '24H Support','Webhooks', 'Download data']
      }
    },
    {
      name: 'Indie',
      description: 'One-stop shop solution to troubleshoot user issues, track blockchain event conversions & attribute Web3 growth channels.',
      accented: false,
      prices: {
        buyNowMonthly: { amount: 18, stripeURL: '' },
        buyNowYearly: { amount: 19, stripeURL: '' },
        trialMonthly: { amount: 19, stripeURL: '' },
        trialYearly: { amount: 19, stripeURL: '' },
      },
      features: {
        seats: "1",
        trackedWallets: '100',
        domains: "1",
        other: ['Analytics Platform', 'Attribution Platform', 'Troubleshooting Platfrom']
      }
    },
   
    

    

  ]

}

interface PricingItem {
  name: string,
  description: string,
  accented: boolean,
  prices: {
    buyNowMonthly: { amount: number, stripeURL: string },
    buyNowYearly: { amount: number, stripeURL: string },
    trialMonthly: { amount: number, stripeURL: string },
    trialYearly: { amount: number, stripeURL: string }
  }
  features: {
    seats: string
    domains: string,
    trackedWallets: string,
    other: string[]
  }
}
