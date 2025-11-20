import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Copy, Check, Zap, Shield, Globe, Code2, Clock, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export function ApiDocumentationPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  // SEO
  useEffect(() => {
    document.title = 'API Documentation - MyToonTools | REST API for Data Format Conversion'
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete API documentation for MyToonTools REST API. Convert between JSON and TOON formats programmatically with our simple, fast, and reliable API.')
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'API documentation, REST API, JSON to TOON, TOON to JSON, data conversion, API reference, rate limiting, code examples')
    }
  }, [])

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const codeExamples = {
    curl: `curl -X POST https://api.mytoontools.com/convert \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "JSON",
    "to": "TOON",
    "content": "{\\"name\\": \\"John\\", \\"age\\": 30}"
  }'`,
    
    javascript: `const response = await fetch('https://api.mytoontools.com/convert', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    from: 'JSON',
    to: 'TOON',
    content: '{"name": "John", "age": 30}'
  })
});

const result = await response.json();
console.log(result);`,

    python: `import requests

url = "https://api.mytoontools.com/convert"
data = {
    "from": "JSON",
    "to": "TOON",
    "content": '{"name": "John", "age": 30}'
}

response = requests.post(url, json=data)
result = response.json()
print(result)`,

    php: `<?php
$url = 'https://api.mytoontools.com/convert';
$data = [
    'from' => 'JSON',
    'to' => 'TOON',
    'content' => '{"name": "John", "age": 30}'
];

$options = [
    'http' => [
        'header' => "Content-type: application/json\\r\\n",
        'method' => 'POST',
        'content' => json_encode($data)
    ]
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
$response = json_decode($result, true);
print_r($response);
?>`
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-background via-background to-background/50">
        <div className="mx-auto max-w-4xl px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            API Documentation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-6">
            MyToonTools API
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Convert between JSON and TOON formats programmatically with our simple REST API. 
            Fast, reliable, and easy to integrate.
          </p>
          
          {/* API Status */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">API Status: Operational</span>
          </div>
        </motion.div>

        {/* Quick Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="h-5 w-5 text-blue-500" />
                <span className="font-semibold">Base URL</span>
              </div>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                https://api.mytoontools.com
              </code>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">Rate Limit</span>
              </div>
              <span className="text-sm">100 requests per 15 minutes</span>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="font-semibold">Authentication</span>
              </div>
              <span className="text-sm">API Key (Coming Soon)</span>
            </CardContent>
          </Card>
        </motion.div>

        {/* API Endpoint Documentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                Convert Endpoint
              </CardTitle>
              <CardDescription>
                Convert data between supported formats
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Endpoint Details */}
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="default">POST</Badge>
                  <code className="text-sm">/convert</code>
                </div>
              </div>

              {/* Request Parameters */}
              <div>
                <h4 className="font-semibold mb-3">Request Body Parameters</h4>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <code className="font-mono text-sm bg-muted px-2 py-1 rounded">from</code>
                      <Badge variant="outline">required</Badge>
                      <Badge variant="secondary">string</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Source format of the data to convert
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Supported values: <code>JSON</code>, <code>TOON</code>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <code className="font-mono text-sm bg-muted px-2 py-1 rounded">to</code>
                      <Badge variant="outline">required</Badge>
                      <Badge variant="secondary">string</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Target format for the converted data
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Supported values: <code>JSON</code>, <code>TOON</code>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <code className="font-mono text-sm bg-muted px-2 py-1 rounded">content</code>
                      <Badge variant="outline">required</Badge>
                      <Badge variant="secondary">string</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The data to be converted, provided as a string
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Format */}
              <div>
                <h4 className="font-semibold mb-3">Response Format</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm text-muted-foreground">
{`{
  "success": true,
  "data": {
    "converted": "converted_content_here",
    "original_format": "JSON",
    "target_format": "TOON",
    "size_reduction": "67%"
  },
  "timestamp": "2024-11-20T10:30:00Z"
}`}
                  </pre>
                </div>
              </div>

              {/* Error Responses */}
              <div>
                <h4 className="font-semibold mb-3">Error Responses</h4>
                <div className="space-y-3">
                  <div className="border border-red-200 rounded-lg p-4 bg-red-50 dark:bg-red-950/20 dark:border-red-900">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="destructive">400</Badge>
                      <span className="font-medium">Bad Request</span>
                    </div>
                    <pre className="text-xs text-muted-foreground">
{`{
  "success": false,
  "error": "Invalid format specified",
  "message": "Supported formats: JSON, TOON"
}`}
                    </pre>
                  </div>

                  <div className="border border-orange-200 rounded-lg p-4 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-900">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">429</Badge>
                      <span className="font-medium">Rate Limit Exceeded</span>
                    </div>
                    <pre className="text-xs text-muted-foreground">
{`{
  "success": false,
  "error": "Rate limit exceeded",
  "message": "Maximum 100 requests per 15 minutes",
  "retry_after": 300
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Code Examples</CardTitle>
              <CardDescription>
                Ready-to-use code snippets in popular programming languages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="curl" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="php">PHP</TabsTrigger>
                </TabsList>

                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang} className="mt-6">
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{code}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2"
                        onClick={() => copyToClipboard(code, lang)}
                      >
                        {copiedCode === lang ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        {/* Rate Limiting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Rate Limiting
              </CardTitle>
              <CardDescription>
                Understanding API usage limits and best practices
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
                <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Current Limits
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    The API is currently limited to <strong>100 requests per 15 minutes</strong> per IP address.
                    This limit resets every 15 minutes from your first request.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Rate Limit Headers</h4>
                  <div className="space-y-1 text-sm">
                    <div><code>X-RateLimit-Limit: 100</code></div>
                    <div><code>X-RateLimit-Remaining: 95</code></div>
                    <div><code>X-RateLimit-Reset: 1700472600</code></div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Best Practices</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Monitor rate limit headers</li>
                    <li>• Implement exponential backoff</li>
                    <li>• Cache results when possible</li>
                    <li>• Batch multiple conversions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Supported Formats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Supported Formats</CardTitle>
              <CardDescription>
                Current format support and conversion matrix
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Available Formats</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-3 border rounded-lg">
                      <Badge>JSON</Badge>
                      <span className="text-sm">JavaScript Object Notation</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 border rounded-lg">
                      <Badge>TOON</Badge>
                      <span className="text-sm">Typed Object Oriented Notation</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Conversion Matrix</h4>
                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div></div>
                    <div className="font-medium">JSON</div>
                    <div className="font-medium">TOON</div>
                    
                    <div className="font-medium">JSON</div>
                    <div className="p-2 bg-muted rounded">-</div>
                    <div className="p-2 bg-green-100 dark:bg-green-950/30 rounded">✓</div>
                    
                    <div className="font-medium">TOON</div>
                    <div className="p-2 bg-green-100 dark:bg-green-950/30 rounded">✓</div>
                    <div className="p-2 bg-muted rounded">-</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* API Access CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Card className="bg-linear-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Request API access and start converting data formats programmatically
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/api-access" className="flex items-center gap-2">
                    Request API Access
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/json-to-toon">
                    Try Web Converter
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
    <Footer />
    </>
  )
}
