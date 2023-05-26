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

  ngOnInit(): void {
  }

  priceItems: PricingItem[] = [
    {
      name: 'Indie',
      description: 'Best for early stage startups',
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
        other: ['Basic Analytics', 'Basic Attribitions', 'Multi-Chain Tx Tracking']
      },
      limitedClaims: {
        claimed: 27,
        total: 50
      }
    },
    {
      name: 'Pro',
      description: 'Best for startups & smaller devshops.',
      accented: true,
      prices: {
        buyNowMonthly: { amount: 58, stripeURL: '' },
        buyNowYearly: { amount: 19, stripeURL: '' },
        trialMonthly: { amount: 19, stripeURL: '' },
        trialYearly: { amount: 19, stripeURL: '' },
      },
      features: {
        seats: "Up to 5",
        domains: "5",
        trackedWallets: '1.000',
        other: ['Full Analytics', 'Full Attributions', '24H Support', 'User TX activity analytics', 'Basic user net worth data' , 'CSV Data Export']
      },
      limitedClaims: {
        claimed: 38,
        total: 50
      }
    },
    {
      name: 'Business',
      description: 'Best for scaleups & large devshops.',
      accented: false,
      prices: {
        buyNowMonthly: { amount: 298, stripeURL: 'https://buy.stripe.com/test_5kA9Ee7rP07Feuk5kl' },
        buyNowYearly: { amount: 91, stripeURL: '' },
        trialMonthly: { amount: 19, stripeURL: '' },
        trialYearly: { amount: 19, stripeURL: '' },
      },
      features: {
        seats: "Up to 20",
        domains: "Unlimited",
        trackedWallets: '5.000',
        other: ['Everything from Pro', 'Full user net worth analytics', 'User token analytics', 'User NFT analytics', 'Downloadable Reports', 'Direct GraphQL Access']
      },
      limitedClaims: {
        claimed: 19,
        total: 20
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
  },
  limitedClaims: {
    claimed: number,
    total: number
  }
}
