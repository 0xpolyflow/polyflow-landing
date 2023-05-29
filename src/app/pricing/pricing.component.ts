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
        other: ['Transaction Analytics', 'Wallet Analytics', 'Multi-Chain Tx Tracking', 'Community Support']
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
        other: ['Everything from Indie', 'Smart Contract Analytics', 'Campaign Attribution', 'Funnel Tracking', 'Error Logging', 'User Addresses Insights', '1 month session history', 'Basic net worth data', 'Basic Support']
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
        buyNowMonthly: { amount: 398, stripeURL: 'https://buy.stripe.com/test_5kA9Ee7rP07Feuk5kl' },
        buyNowYearly: { amount: 91, stripeURL: '' },
        trialMonthly: { amount: 19, stripeURL: '' },
        trialYearly: { amount: 19, stripeURL: '' },
      },
      features: {
        seats: "Up to 20",
        domains: "Unlimited",
        trackedWallets: '5.000',
        other: ['Everything from Pro', 'Suggesting Error Fixes', 'User ERC20 token insights', 'User NFT insights', 'User POAP insights', 'Unlimited Session History', 'Downloadable CSV Reports', 'Downloadable PDF Reports', 'API Access', 'GraphQL Access', 'Priority Support']
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
