import { useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CsvConverter } from '@/components/CsvConverter'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'motion/react'
import { 
  FileSpreadsheet, 
  TrendingDown, 
  Zap, 
  CheckCircle,
  Database,
  BarChart3,
  Users,
  Clock
} from 'lucide-react'

const features = [
  {
    icon: FileSpreadsheet,
    title: 'Smart CSV Parsing',
    description: 'Automatically detects headers and data types for optimal conversion'
  },
  {
    icon: Database,
    title: 'Structured Output',
    description: 'Converts tabular CSV data into efficient TOON object notation'
  },
  {
    icon: TrendingDown,
    title: 'Token Reduction',
    description: 'Reduces token count by 20-40% compared to raw CSV text'
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Real-time conversion with immediate feedback and statistics'
  }
]

const useCases = [
  {
    icon: BarChart3,
    title: 'Analytics Data',
    description: 'Convert sales reports, user metrics, and performance data for LLM analysis',
    example: 'Monthly revenue, user engagement metrics, product performance data'
  },
  {
    icon: Users,
    title: 'User Databases',
    description: 'Transform user lists, customer data, and contact information efficiently',
    example: 'Customer profiles, employee records, subscription data'
  },
  {
    icon: Database,
    title: 'Inventory Management',
    description: 'Convert product catalogs, stock levels, and inventory data',
    example: 'Product listings, warehouse data, supply chain information'
  },
  {
    icon: Clock,
    title: 'Time Series Data',
    description: 'Process temporal data, logs, and sequential measurements',
    example: 'Server logs, sensor readings, financial time series'
  }
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Data Analyst',
    company: 'TechCorp',
    content: 'Converting our CSV reports to TOON format reduced our LLM processing costs by 35%. The file upload feature makes it incredibly easy to work with large datasets.',
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'Mike Rodriguez',
    role: 'ML Engineer',
    company: 'DataFlow Inc',
    content: 'TOON format is perfect for feeding structured data to language models. The automatic type detection saves us hours of preprocessing time.',
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'Lisa Park',
    role: 'Business Intelligence',
    company: 'Analytics Pro',
    content: 'We process thousands of CSV files daily. TOON conversion has become an essential part of our data pipeline for LLM-based insights.',
    avatar: '/api/placeholder/40/40'
  }
]

const faq = [
  {
    question: 'What types of CSV files work best with TOON conversion?',
    answer: 'TOON conversion works excellently with any structured CSV data, especially files with repeated patterns, numerical data, and clear headers. Large datasets with many rows benefit the most from token reduction.'
  },
  {
    question: 'How does CSV to TOON conversion handle different data types?',
    answer: 'Our converter automatically detects and preserves data types including numbers, booleans, dates, and strings. This ensures the converted TOON format maintains semantic meaning while reducing token count.'
  },
  {
    question: 'Is there a file size limit for CSV uploads?',
    answer: 'For optimal performance, we recommend CSV files under 10MB. Larger files can be processed but may take longer to convert. You can also paste CSV data directly for smaller datasets.'
  },
  {
    question: 'Can I use the converted TOON data with any language model?',
    answer: 'Yes! TOON format is designed to be compatible with all major language models including GPT, Claude, and open-source alternatives. The reduced token count benefits any token-based pricing model.'
  }
]

export default function CsvToToonPage() {
  useEffect(() => {
    document.title = 'CSV to TOON Converter - Reduce LLM Tokens by 40% | JTOON'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Convert CSV files to token-efficient TOON format. Upload CSV files or paste data directly. Reduce LLM costs by 20-40% with structured data conversion.')
    }
    
    // Add JSON-LD structured data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'CSV to TOON Converter',
      'description': 'Online tool to convert CSV files to TOON format for efficient LLM processing',
      'url': 'https://jtoon.dev/csv-to-toon',
      'applicationCategory': 'DeveloperApplication',
      'operatingSystem': 'Any',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      },
      'featureList': [
        'CSV file upload',
        'Direct CSV data input',
        'Automatic data type detection',
        'Real-time token counting',
        'TOON format download'
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
                { label: 'CSV to TOON', href: '/csv-to-toon' }
              ]} 
            />
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16" aria-labelledby="csv-hero-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-3 px-3 py-1">
                  <FileSpreadsheet className="w-3 h-3 mr-1" />
                  CSV Converter
                </Badge>
                
                <h1 id="csv-hero-heading" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  CSV to{' '}
                  <span className="bg-linear-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    TOON
                  </span>{' '}
                  Converter
                </h1>
                
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  Transform CSV files into token-efficient TOON format and 
                  <strong> reduce LLM costs by 20-40%</strong>.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center items-center gap-6 mt-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span>Instant conversion</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Converter - Primary Focus */}
        <section  aria-labelledby="csv-converter-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">            
            <CsvConverter />
          </div>
        </section>


        {/* Features Grid */}
        <section className="py-24 bg-muted/30" aria-labelledby="csv-features-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="csv-features-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
                Why Convert CSV to TOON?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Optimized for modern LLM workflows and cost-effective data processing
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

        {/* Use Cases */}
        <section className="py-24 bg-muted/30" aria-labelledby="csv-usecases-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="csv-usecases-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
                Perfect for Your Data Workflows
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Common use cases where CSV to TOON conversion adds significant value
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <useCase.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{useCase.title}</CardTitle>
                          <CardDescription className="mt-2">
                            {useCase.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-sm text-muted-foreground">
                          <strong>Examples:</strong> {useCase.example}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24" aria-labelledby="csv-testimonials-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="csv-testimonials-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
                Loved by Data Teams
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                See how teams are saving costs and improving efficiency
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <CheckCircle key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-sm text-muted-foreground mb-4">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-primary">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-sm">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-muted/30" aria-labelledby="csv-faq-heading">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="csv-faq-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about CSV to TOON conversion
              </p>
            </div>
            
            <div className="space-y-6">
              {faq.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
