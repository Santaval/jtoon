import { useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ApiAccessForm } from '@/components/ApiAccessForm'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'motion/react'
import { 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle,
  ArrowRight,
//   Book,
  TrendingDown,
  Clock,
  Users,
  Star
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'High-performance API with < 100ms response times'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: '99.9% uptime with enterprise-grade security'
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Distributed endpoints for optimal performance worldwide'
  },
  {
    icon: Database,
    title: 'Multiple Formats',
    description: 'Convert JSON, CSV, XML, and more to TOON format'
  }
]

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for getting started',
    features: [
      '1M tokens/month',
      'JSON to TOON conversion',
      'Basic API access',
      'Community support'
    ],
    popular: false,
    buttonText: 'Get Started',
    limit: '< 1M tokens'
  },
  {
    name: 'Pro',
    price: '$5',
    period: '/month',
    description: 'For growing businesses',
    features: [
      '10M tokens/month',
      'All format conversions',
      'Priority support',
      'Advanced analytics',
      'Custom rate limits'
    ],
    popular: true,
    buttonText: 'Start Free Trial',
    limit: '1M - 10M tokens'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large-scale operations',
    features: [
      'Unlimited tokens',
      'Dedicated infrastructure',
      '24/7 phone support',
      'SLA guarantees',
      'Custom integrations'
    ],
    popular: false,
    buttonText: 'Contact Sales',
    limit: '> 100M tokens'
  }
]

const codeExample = `// Install the TOON API client
npm install @toon-format/api

// Basic usage
import { ToonApi } from '@toon-format/api'

const client = new ToonApi('your-api-key')

// Convert JSON to TOON
const result = await client.convert({
  format: 'json-to-toon',
  data: {
    "users": [
      {"id": 1, "name": "John Doe", "email": "john@example.com"},
      {"id": 2, "name": "Jane Smith", "email": "jane@example.com"}
    ]
  }
})

console.log(result.toon) // Converted TOON format
console.log(result.stats) // Conversion statistics`

export default function ApiPage() {
  useEffect(() => {
    document.title = 'TOON API - Programmatic Data Conversion | JTOON'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get programmatic access to TOON converters with our REST API. Convert JSON, CSV, XML to token-efficient TOON format. Free tier available.')
    }
    
    // Add JSON-LD structured data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'APIReference',
      'name': 'TOON Conversion API',
      'description': 'RESTful API for converting various data formats to TOON notation',
      'provider': {
        '@type': 'Organization',
        'name': 'JTOON',
        'url': 'https://jtoon.dev'
      },
      'documentation': 'https://jtoon.dev/api#documentation',
      'offers': [
        {
          '@type': 'Offer',
          'name': 'Free Tier',
          'price': '0',
          'priceCurrency': 'USD'
        },
        {
          '@type': 'Offer',
          'name': 'Pro Tier',
          'price': '29',
          'priceCurrency': 'USD'
        }
      ]
    }
    
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement
    if (script) {
      script.textContent = JSON.stringify(jsonLd)
    } else {
      script = document.createElement('script') as HTMLScriptElement
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
    
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Breadcrumbs */}
        <div className="bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'API Access', href: '/api' }
              ]} 
            />
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32" aria-labelledby="api-hero-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge variant="secondary" className="mb-4 px-3 py-1">
                  <Code className="w-3 h-3 mr-1" />
                  Developer API
                </Badge>
                
                <h1 id="api-hero-heading" className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  TOON Conversion{' '}
                  <span className="bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    API
                  </span>
                </h1>
                
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Integrate token-efficient data conversion into your applications with our 
                  RESTful API. <strong>Reduce LLM costs by up to 70%</strong> with programmatic access.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center items-center gap-8 mb-12 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span>&lt; 100ms response time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span>99.9% uptime SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-500" />
                  <span>Free tier available</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-muted/30" aria-labelledby="api-features-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="api-features-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
                Enterprise-Ready API
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Built for scale with the features you need for production deployments
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-24" aria-labelledby="api-example-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="api-example-heading" className="text-3xl font-bold text-foreground mb-6">
                  Simple Integration
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get started in minutes with our intuitive API. Convert any data format 
                  to TOON with just a few lines of code.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>RESTful endpoints</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>JSON request/response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Comprehensive error handling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Real-time conversion statistics</span>
                  </div>
                </div>
                
                {/* <Button size="lg" variant="outline">
                  <Book className="w-4 h-4 mr-2" />
                  View Documentation
                </Button> */}
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-mono">Quick Start</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm overflow-x-auto bg-muted rounded-lg p-4">
                    <code>{codeExample}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 bg-muted/30" aria-labelledby="api-pricing-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="api-pricing-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose the plan that fits your usage. All plans include core features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`relative ${tier.popular ? 'ring-2 ring-primary' : ''}`}>
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="px-3 py-1">
                          <Star className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      <CardDescription>{tier.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{tier.price}</span>
                        <span className="text-muted-foreground">{tier.period}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {tier.limit}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={`w-full ${tier.popular ? '' : 'variant-outline'}`}
                        variant={tier.popular ? 'default' : 'outline'}
                        onClick={() => {
                            window.location.href = '#api-access'
                        }}
                      >
                        {tier.buttonText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Access Form */}
        <section className="py-24" aria-labelledby="api-access-heading" id='api-access'>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="api-access-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
                Get Your API Key
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Start converting data to TOON format with a free API key
              </p>
            </div>
            
            <ApiAccessForm />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-muted/30" aria-labelledby="api-stats-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="api-stats-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
                Trusted by Developers
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-1">
                  <TrendingDown className="w-8 h-8" />
                  70%
                </div>
                <div className="text-muted-foreground">Token Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">&lt; 100ms</div>
                <div className="text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
