import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// Pricing plans data
const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic access to market insights",
    features: [
      "Daily market summaries",
      "Limited AI predictions",
      "Basic portfolio tracking",
      "Market news feed",
      "Standard charts and graphs"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Premium",
    price: "$29",
    period: "/month",
    description: "Advanced tools for active investors",
    features: [
      "Everything in Free plan",
      "Advanced AI predictions",
      "Real-time market alerts",
      "Risk assessment tools",
      "Premium research reports",
      "Portfolio optimization",
      "Email & chat support"
    ],
    cta: "Start 7-Day Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "Full suite for professional traders",
    features: [
      "Everything in Premium plan",
      "Custom AI models",
      "API access",
      "Institutional-grade research",
      "Advanced risk modeling",
      "Multi-user access",
      "Dedicated account manager",
      "24/7 priority support"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

// FAQ data
const faqs = [
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to your plan until the end of your current billing period."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee for Premium subscribers. If you're not satisfied with our service, you can request a full refund within 14 days of your initial purchase."
  },
  {
    question: "How accurate are the AI predictions?",
    answer: "Our AI models have demonstrated 93% accuracy in backtesting and live environments. However, all trading involves risk, and past performance is not indicative of future results."
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, the new rate will apply at the start of your next billing cycle."
  }
];

const Pricing = () => {
  return (
    <div className="flex-1 space-y-10 p-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#D946EF]">
          Pricing & Subscription Plans
        </h1>
        <p className="text-muted-foreground text-lg">
          Choose the plan that's right for you and start making smarter investment decisions powered by AI.
        </p>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className={`glass-card relative overflow-hidden ${plan.popular ? 'border-primary' : ''}`}>
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold py-1 px-3 rounded-bl-md">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>
              <CardDescription className="mt-2">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className={`w-full ${plan.popular ? 'btn-gradient text-white' : ''}`} 
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Comparison table */}
      <div className="max-w-6xl mx-auto">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-center text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#D946EF]">
              Feature Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-lg font-semibold">Feature</th>
                    <th className="text-center p-4 text-lg font-semibold border-l border-white/10">Free</th>
                    <th className="text-center p-4 text-lg font-semibold border-l border-white/10">Premium</th>
                    <th className="text-center p-4 text-lg font-semibold border-l border-white/10">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="p-4 font-medium">AI Predictions</td>
                    <td className="text-center p-4 border-l border-white/10">Limited</td>
                    <td className="text-center p-4 border-l border-white/10">Advanced</td>
                    <td className="text-center p-4 border-l border-white/10">Custom</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 font-medium">Market Analysis</td>
                    <td className="text-center p-4 border-l border-white/10">Daily</td>
                    <td className="text-center p-4 border-l border-white/10">Real-time</td>
                    <td className="text-center p-4 border-l border-white/10">Real-time + Custom</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 font-medium">Portfolio Management</td>
                    <td className="text-center p-4 border-l border-white/10">Basic</td>
                    <td className="text-center p-4 border-l border-white/10">Advanced</td>
                    <td className="text-center p-4 border-l border-white/10">Institutional</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 font-medium">Research Reports</td>
                    <td className="text-center p-4 border-l border-white/10">-</td>
                    <td className="text-center p-4 border-l border-white/10">✓</td>
                    <td className="text-center p-4 border-l border-white/10">Custom</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 font-medium">Risk Management</td>
                    <td className="text-center p-4 border-l border-white/10">Basic</td>
                    <td className="text-center p-4 border-l border-white/10">Advanced</td>
                    <td className="text-center p-4 border-l border-white/10">Enterprise</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 font-medium">API Access</td>
                    <td className="text-center p-4 border-l border-white/10">-</td>
                    <td className="text-center p-4 border-l border-white/10">-</td>
                    <td className="text-center p-4 border-l border-white/10">✓</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 font-medium">Support</td>
                    <td className="text-center p-4 border-l border-white/10">Email</td>
                    <td className="text-center p-4 border-l border-white/10">Email & Chat</td>
                    <td className="text-center p-4 border-l border-white/10">24/7 Priority</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <section className="w-full py-24 px-4 md:px-8 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about StratoFi's pricing and features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="glass-card border border-border/50">
                  <AccordionTrigger className="text-lg font-semibold">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We accept all major credit cards, PayPal, and bank transfers for annual plans.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="glass-card border border-border/50">
                  <AccordionTrigger className="text-lg font-semibold">
                    Can I change my plan later?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-3" className="glass-card border border-border/50">
                  <AccordionTrigger className="text-lg font-semibold">
                    What happens after my trial ends?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    After your trial, you'll need to choose a plan to continue using StratoFi. We'll notify you before your trial expires.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="glass-card border border-border/50">
                  <AccordionTrigger className="text-lg font-semibold">
                    Do you offer refunds?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we offer a 30-day money-back guarantee for all paid plans if you're not satisfied with our service.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
