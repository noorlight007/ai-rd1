import { Check, Building, Building2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Small Business",
    icon: Building,
    price: "£0.80",
    unit: "/min",
    description: "Perfect for growing businesses starting with AI calls",
    minimumMinutes: "300 min/month",
    features: [
      "CRM sync included",
      "Basic workflows",
      "Email support",
      "Standard analytics",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Mid Business",
    icon: Building2,
    price: "£0.65",
    unit: "/min",
    description: "For teams scaling their voice automation",
    minimumMinutes: "1,000 min/month",
    features: [
      "Everything in Small Business",
      "Automated tasks & summaries",
      "Advanced CRM integration",
      "Priority email support",
      "Detailed analytics dashboard",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: "£0.50–£0.60",
    unit: "/min",
    description: "Custom solutions for large-scale operations",
    minimumMinutes: "3,000+ min/month",
    features: [
      "Everything in Mid Business",
      "SLA priority support",
      "Custom integrations",
      "Dedicated account manager",
      "Custom reporting",
      "White-label options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-tint-bg border border-accent/20 mb-4">
            <span className="text-sm font-medium accent-text">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-headline mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-body">
            Pay only for what you use. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-card rounded-2xl p-6 lg:p-8 border ${
                tier.popular
                  ? "border-accent shadow-lg ring-2 ring-accent/20"
                  : "border-border-card"
              } card-hover flex flex-col`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  tier.popular ? "bg-accent/10" : "bg-secondary"
                }`}>
                  <tier.icon className={`w-5 h-5 ${tier.popular ? "accent-text" : "text-muted-text"}`} />
                </div>
                <h3 className="text-xl font-semibold text-headline">{tier.name}</h3>
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="text-4xl font-bold text-headline">{tier.price}</span>
                <span className="text-muted-text">{tier.unit}</span>
              </div>

              {/* Minimum */}
              <p className="text-sm text-muted-text mb-4">
                Minimum: {tier.minimumMinutes}
              </p>

              {/* Description */}
              <p className="text-body mb-6">{tier.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 accent-text flex-shrink-0 mt-0.5" />
                    <span className="text-body text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={tier.popular ? "cta" : "ctaSecondary"}
                size="lg"
                className="w-full"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-muted-text mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
