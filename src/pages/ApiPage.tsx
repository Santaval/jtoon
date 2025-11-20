import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'motion/react'
import { 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Book,
  Clock,
  Users
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Free & Open',
    description: 'No API keys, no registration - start using immediately'
  },
  {
    icon: Shield,
    title: 'Reliable',
    description: 'Built for production with 99.9% uptime guarantee'
  },
  {
    icon: Globe,
    title: 'Fast Global CDN',
    description: 'Low latency worldwide with edge computing'
  },
  {
    icon: Database,
    title: 'Format Support',
    description: 'JSON ↔ TOON conversion with more formats coming'
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'RESTful API with comprehensive documentation'
  },
  {
    icon: Clock,
    title: 'Rate Limited',
    description: '100 requests per 15 minutes - fair usage for all'
  }
]

const codeExample = `curl -X POST https://api.mytoontools.com/convert \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "JSON",
    "to": "TOON",
    "content": "{\\"name\\": \\"John\\", \\"age\\": 30}"
  }'`

const benefits = [
  {
    icon: Users,
    title: '10,000+ Developers',
    description: 'Trusted by developers worldwide for data conversion'
  },
  {
    icon: CheckCircle,
    title: '99.9% Uptime',
    description: 'Reliable service with minimal downtime'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Average response time under 100ms'
  }
]

export default function ApiPage() {
  useEffect(() => {
    document.title = 'Free API - MyToonTools | Open REST API for Data Conversion'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free REST API for converting between JSON and TOON formats. No API keys required - start using immediately with our open API.')
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="relative overflow-hidden bg-linear-to-b from-background via-background/95 to-background">
          <div className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'API', href: '/api' }
              ]} 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center"
            >
              <Badge variant="secondary" className="mb-6">
                Free & Open API
              </Badge>
              
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                MyToonTools
                <span className="text-primary"> REST API</span>
              </h1>
              
              <p className="text-xl leading-8 text-muted-foreground mb-10">
                Convert between JSON and TOON formats programmatically with our free, 
                open REST API. No registration, no API keys - just start converting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button size="lg" asChild>
                  <Link to="/api-docs" className="flex items-center gap-2">
                    <Book className="w-4 h-4" />
                    View Documentation
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/json-to-toon">
                    Try Web Converter
                  </Link>
                </Button>
              </div>

              {/* Quick API Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground">Base URL</h3>
                      <p className="text-sm text-muted-foreground">api.mytoontools.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground">Rate Limit</h3>
                      <p className="text-sm text-muted-foreground">100 req / 15 min</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground">Auth</h3>
                      <p className="text-sm text-muted-foreground">None required</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-24 bg-muted/30" aria-labelledby="features-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="features-heading" className="text-3xl font-bold text-foreground mb-4">
                Why Choose Our API?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built for developers, by developers. Get started in seconds with no barriers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <feature.icon className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="py-24" aria-labelledby="api-example-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
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
                      <span>No authentication required</span>
                    </div>
                  </div>
                  
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/api-docs" className="flex items-center gap-2">
                      <Book className="w-4 h-4" />
                      View API Documentation
                    </Link>
                  </Button>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-mono">Quick Start</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
                      <code>{codeExample}</code>
                    </pre>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Trusted by Developers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of developers using MyToonTools API for their data conversion needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start converting data formats with our free API today. No sign-up required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/api-docs" className="flex items-center gap-2">
                    Read Documentation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/json-to-toon">
                    Try Web Converter
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
}
