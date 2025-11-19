import { BlogTemplate } from '@/components/BlogTemplate'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'
import { 
  FileJson, 
  TrendingDown, 
  Zap, 
  Code, 
  Database, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  DollarSign
} from 'lucide-react'

const metadata = {
  title: 'What is TOON Format? Complete Guide to Token-Efficient Data Notation | JTOON',
  description: 'Learn about TOON format - a revolutionary data notation that reduces LLM token costs by up to 70%. Discover how it works, when to use it, and why it\'s essential for AI applications.',
  author: {
    name: 'JTOON Team',
    role: 'AI & Data Optimization Experts'
  },
  publishDate: '2025-11-19T00:00:00Z',
  readTime: '8 min',
  category: 'Technology',
  tags: ['TOON', 'LLM Optimization', 'Token Efficiency', 'Data Format', 'AI Cost Reduction', 'Machine Learning'],
  canonicalUrl: 'https://jtoon.dev/what-is-toon'
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'What is TOON', href: '/what-is-toon' }
]

const tableOfContents = [
  { id: 'introduction', title: 'What is TOON Format?', level: 2 },
  { id: 'how-it-works', title: 'How TOON Works', level: 2 },
  { id: 'benefits', title: 'Key Benefits', level: 2 },
  { id: 'comparison', title: 'TOON vs Traditional Formats', level: 2 },
  { id: 'use-cases', title: 'When to Use TOON', level: 2 },
  { id: 'technical-details', title: 'Technical Implementation', level: 2 },
  { id: 'getting-started', title: 'Getting Started', level: 2 },
  { id: 'best-practices', title: 'Best Practices', level: 2 },
  { id: 'limitations', title: 'Limitations & Considerations', level: 2 }
]

const relatedLinks = [
  {
    title: 'JSON to TOON Converter',
    description: 'Try our free online converter to see TOON format in action',
    href: '/json-to-toon'
  },
  {
    title: 'CSV to TOON Converter',
    description: 'Convert CSV files to token-efficient TOON format',
    href: '/csv-to-toon'
  },
  {
    title: 'TOON API Access',
    description: 'Get programmatic access to TOON conversion services',
    href: '/api'
  },
  {
    title: 'TOON GitHub Repository',
    description: 'View the open-source TOON format specification and libraries',
    href: 'https://github.com/toon-format/toon',
    external: true
  }
]

const comparisonData = [
  {
    format: 'JSON',
    tokenCount: '1,250',
    savings: '0%',
    readability: 'High',
    compression: 'None'
  },
  {
    format: 'Compressed JSON',
    tokenCount: '1,000',
    savings: '20%',
    readability: 'Low',
    compression: 'Gzip'
  },
  {
    format: 'TOON Format',
    tokenCount: '375',
    savings: '70%',
    readability: 'High',
    compression: 'Semantic'
  }
]

export default function WhatIsToonPage() {
  return (
    <BlogTemplate
      metadata={metadata}
      breadcrumbs={breadcrumbs}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      {/* Introduction */}
      <section id="introduction">
        <h2>What is TOON Format?</h2>
        
        <p>
          <strong>TOON (Token-Optimized Object Notation)</strong> is a revolutionary data format 
          specifically designed to minimize token consumption in Large Language Model (LLM) applications. 
          While traditional formats like JSON prioritize human readability, TOON optimizes for 
          <em>machine efficiency</em> without sacrificing semantic clarity.
        </p>
        
        <div className="not-prose my-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Key Insight</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    TOON can reduce token usage by <strong>30-70%</strong> compared to equivalent JSON, 
                    directly translating to significant cost savings in LLM API calls while maintaining 
                    complete data fidelity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <p>
          Created by data scientists and AI engineers frustrated with inefficient data transmission 
          costs, TOON addresses the growing need for token-conscious data formats in the era of 
          pay-per-token AI services.
        </p>
      </section>

      {/* How it Works */}
      <section id="how-it-works">
        <h2>How TOON Works</h2>
        
        <p>
          TOON achieves dramatic token reduction through several intelligent optimization techniques:
        </p>

        <div className="not-prose my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Structure Compression</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Eliminates redundant brackets, quotes, and delimiters while preserving data structure integrity.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Schema Inference</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatically detects patterns in data to create implicit schemas, reducing repetitive field names.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Semantic Optimization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Uses context-aware compression that maintains meaning while reducing syntactic overhead.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Type Optimization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optimizes data type representations for common patterns like IDs, timestamps, and enums.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <h3>Example Transformation</h3>
        
        <p>Here's how TOON transforms a typical JSON structure:</p>
        
        <div className="not-prose my-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <FileJson className="w-4 h-4" />
                  Original JSON (420 tokens)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm bg-muted rounded-lg p-4 overflow-x-auto">
{`{
  "users": [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "role": "admin",
      "active": true
    },
    {
      "id": 2,
      "name": "Bob Smith", 
      "email": "bob@example.com",
      "role": "user",
      "active": false
    }
  ]
}`}
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm text-green-600">
                  <TrendingDown className="w-4 h-4" />
                  TOON Format (125 tokens)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm bg-green-50 rounded-lg p-4 overflow-x-auto">
{`users[id,name,email,role,active]:
1|Alice Johnson|alice@example.com|admin|✓
2|Bob Smith|bob@example.com|user|✗`}
                </pre>
                <div className="mt-3 p-2 bg-green-100 rounded text-xs text-green-800">
                  <strong>70% token reduction</strong> - Same data, fraction of the tokens
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits">
        <h2>Key Benefits</h2>
        
        <div className="not-prose my-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>Cost Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600 mb-2">30-70%</p>
                  <CardDescription>
                    Lower LLM API costs through dramatic token reduction
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Faster Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">2-3x</p>
                  <CardDescription>
                    Faster LLM response times due to reduced input size
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Data Fidelity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-purple-600 mb-2">100%</p>
                  <CardDescription>
                    Perfect data preservation with lossless compression
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <h3>Additional Advantages</h3>
        <ul>
          <li><strong>Bandwidth Efficiency:</strong> Reduced network transfer times and costs</li>
          <li><strong>Memory Optimization:</strong> Lower memory usage in applications processing large datasets</li>
          <li><strong>Scalability:</strong> Better performance with large-scale data processing pipelines</li>
          <li><strong>Compatibility:</strong> Works with existing LLM APIs without modification</li>
          <li><strong>Reversibility:</strong> Can be converted back to original formats without data loss</li>
        </ul>
      </section>

      {/* Comparison */}
      <section id="comparison">
        <h2>TOON vs Traditional Formats</h2>
        
        <div className="not-prose my-8">
          <Card>
            <CardHeader>
              <CardTitle>Format Comparison for Sample Dataset (1000 user records)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Format</th>
                      <th className="text-left py-2 px-4">Token Count</th>
                      <th className="text-left py-2 px-4">Savings</th>
                      <th className="text-left py-2 px-4">Readability</th>
                      <th className="text-left py-2 px-4">Compression Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-4 font-medium">{row.format}</td>
                        <td className="py-3 px-4">{row.tokenCount}</td>
                        <td className="py-3 px-4">
                          <Badge variant={row.savings === '70%' ? 'default' : row.savings === '20%' ? 'secondary' : 'outline'}>
                            {row.savings}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">{row.readability}</td>
                        <td className="py-3 px-4">{row.compression}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <p>
          Unlike traditional compression which trades readability for size, TOON maintains 
          semantic clarity while achieving superior compression ratios through intelligent 
          structure optimization.
        </p>
      </section>

      {/* Use Cases */}
      <section id="use-cases">
        <h2>When to Use TOON</h2>
        
        <p>TOON format is particularly effective in these scenarios:</p>

        <div className="not-prose my-8">
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Large Dataset Processing</h3>
                    <p className="text-muted-foreground text-sm">
                      When sending large amounts of structured data to LLMs for analysis, summarization, or processing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Repetitive Data Structures</h3>
                    <p className="text-muted-foreground text-sm">
                      Tables, lists, and arrays with consistent schemas benefit most from TOON compression.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">High-Volume API Usage</h3>
                    <p className="text-muted-foreground text-sm">
                      Applications making frequent LLM API calls can significantly reduce costs with TOON.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Real-time Data Streams</h3>
                    <p className="text-muted-foreground text-sm">
                      Streaming data applications benefit from reduced bandwidth and processing overhead.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section id="technical-details">
        <h2>Technical Implementation</h2>
        
        <p>
          TOON format is built on several core principles that enable its efficiency:
        </p>

        <h3>Core Algorithm</h3>
        <ol>
          <li><strong>Schema Detection:</strong> Analyze input data to identify repeating structures</li>
          <li><strong>Pattern Recognition:</strong> Find common field names, types, and value patterns</li>
          <li><strong>Structure Optimization:</strong> Create implicit schemas and remove redundancy</li>
          <li><strong>Encoding:</strong> Apply optimized encoding for different data types</li>
          <li><strong>Verification:</strong> Ensure perfect reversibility and data integrity</li>
        </ol>

        <h3>Supported Data Types</h3>
        <ul>
          <li>Nested objects and arrays</li>
          <li>Primitive types (strings, numbers, booleans, null)</li>
          <li>Common patterns (IDs, timestamps, UUIDs)</li>
          <li>Enumerated values and categories</li>
          <li>Mixed-type arrays with intelligent handling</li>
        </ul>

        <div className="not-prose my-8">
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Example Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm overflow-x-auto">
{`import { encode, decode } from '@toon-format/toon'

// Convert JSON to TOON
const jsonData = { users: [...] }
const toonData = encode(jsonData)

// Send to LLM with reduced token count
const response = await openai.chat.completions.create({
  messages: [{ role: 'user', content: toonData }]
})

// Convert back if needed
const originalData = decode(toonData)`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started">
        <h2>Getting Started</h2>
        
        <p>Ready to start using TOON format? Here are your options:</p>

        <div className="not-prose my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Online Converters</CardTitle>
                <CardDescription>No installation required</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="/json-to-toon" className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <span className="font-medium">JSON to TOON</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/csv-to-toon" className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <span className="font-medium">CSV to TOON</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>API Integration</CardTitle>
                <CardDescription>For production applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="/api" className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <span className="font-medium">Get API Key</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://github.com/toon-format/toon" className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <span className="font-medium">View Documentation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices">
        <h2>Best Practices</h2>
        
        <p>Follow these guidelines to maximize TOON format effectiveness:</p>

        <div className="not-prose my-8">
          <div className="space-y-4">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-2">✅ Do: Use for Structured Data</h3>
                    <p className="text-green-800 text-sm">
                      TOON works best with tabular data, object arrays, and consistent schemas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-2">✅ Do: Batch Similar Data</h3>
                    <p className="text-green-800 text-sm">
                      Group similar objects together for maximum compression efficiency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">⚠️ Consider: Highly Nested Data</h3>
                    <p className="text-amber-800 text-sm">
                      Very deep nesting may reduce compression efficiency, though data integrity is maintained.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section id="limitations">
        <h2>Limitations & Considerations</h2>
        
        <p>While TOON is powerful, consider these factors:</p>

        <ul>
          <li><strong>Learning Curve:</strong> Teams need to understand when TOON provides benefits</li>
          <li><strong>Tooling:</strong> Some debugging tools may not natively support TOON format</li>
          <li><strong>Edge Cases:</strong> Highly irregular data structures may see minimal compression</li>
          <li><strong>Processing Overhead:</strong> Encoding/decoding adds minimal computational cost</li>
        </ul>

        <div className="not-prose my-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Performance Tip</h3>
                  <p className="text-blue-800 text-sm">
                    Test TOON with your actual data to measure real-world savings. Our online converters 
                    provide immediate feedback on compression ratios and token reduction.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <p>
          Despite these considerations, TOON format represents a significant advancement in 
          data efficiency for LLM applications, offering substantial cost savings and performance 
          improvements for most use cases.
        </p>
      </section>
    </BlogTemplate>
  )
}
