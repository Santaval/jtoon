import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { NumberTicker } from '@/components/ui/number-ticker'
import { 
  Copy, 
  Download, 
  FileSpreadsheet, 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  Upload,
  FileText,
  TrendingDown,
  Trash2,
  Play
} from 'lucide-react'
import { ConversionService } from '@/services/conversionService'
import { conversionConfigs } from '@/config/converters'

const csvExamples = [
  {
    name: 'User Data',
    description: 'Basic user information with different roles',
    data: `id,name,email,role,active,created_date
1,Alice Johnson,alice@example.com,admin,true,2024-01-15
2,Bob Smith,bob@example.com,user,false,2024-01-20
3,Carol Davis,carol@example.com,moderator,true,2024-02-01
4,Diana Wilson,diana@example.com,editor,true,2024-02-10
5,Edward Brown,edward@example.com,viewer,false,2024-02-15`
  },
  {
    name: 'Product Inventory',
    description: 'E-commerce product data with pricing and stock',
    data: `product_id,name,category,price,stock_quantity,brand,rating
101,Wireless Headphones,Electronics,89.99,45,TechBrand,4.5
102,Running Shoes,Sports,129.99,23,SportMax,4.2
103,Coffee Maker,Home,199.99,12,HomeWorks,4.8
104,Laptop Stand,Electronics,49.99,67,TechBrand,4.0
105,Yoga Mat,Sports,29.99,89,FitLife,4.6`
  },
  {
    name: 'Sales Analytics',
    description: 'Monthly sales data with metrics',
    data: `month,revenue,orders,customers,avg_order_value,conversion_rate
January,45250.75,423,312,107.02,2.3
February,52180.25,467,398,111.76,2.8
March,61340.50,512,445,119.80,3.1
April,58920.25,489,421,120.49,2.9
May,67485.75,578,501,116.72,3.4`
  }
]

export function CsvConverter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [inputTokens, setInputTokens] = useState(0)
  const [outputTokens, setOutputTokens] = useState(0)
  const [isConverting, setIsConverting] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | undefined>()
  const [dragActive, setDragActive] = useState(false)
  
  const fileInputRef = useRef<HTMLInputElement>(null)
  const config = conversionConfigs['csv-to-toon']

  const handleConvert = async () => {
    if (!input.trim()) {
      setError('Please enter some CSV data to convert')
      return
    }

    setIsConverting(true)
    setError(undefined)

    try {
      const result = await ConversionService.convert('csv-to-toon', input)
      
      if (result.success) {
        setOutput(result.output)
        setInputTokens(result.inputTokens)
        setOutputTokens(result.outputTokens)
      } else {
        setError(result.error || 'Conversion failed')
        setOutput('')
        setInputTokens(0)
        setOutputTokens(0)
      }
    } catch (err) {
      setError('An unexpected error occurred during conversion')
      console.error('Conversion error:', err)
    } finally {
      setIsConverting(false)
    }
  }

  const handleCopy = async () => {
    if (!output) return
    
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleDownload = () => {
    if (!output) return
    
    const blob = new Blob([output], { type: config.mimeType })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `converted.${config.fileExtension}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && (file.type === 'text/csv' || file.name.endsWith('.csv'))) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        setInput(content)
        setError(undefined)
      }
      reader.readAsText(file)
    } else {
      setError('Please select a valid CSV file')
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    const file = e.dataTransfer.files?.[0]
    if (file && (file.type === 'text/csv' || file.name.endsWith('.csv'))) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        setInput(content)
        setError(undefined)
      }
      reader.readAsText(file)
    } else {
      setError('Please drop a valid CSV file')
    }
  }

  const loadExample = (example: typeof csvExamples[0]) => {
    setInput(example.data)
    setOutput('')
    setInputTokens(0)
    setOutputTokens(0)
    setError(undefined)
  }

  const clearInput = () => {
    setInput('')
    setOutput('')
    setInputTokens(0)
    setOutputTokens(0)
    setError(undefined)
  }

  const tokenSavings = ConversionService.getTokenSavings(inputTokens, outputTokens)

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        
        {/* Quick Examples */}
        <div className="flex flex-wrap justify-center gap-2">
          {csvExamples.map((example, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => loadExample(example)}
              className="text-xs"
            >
              <FileText className="w-3 h-3 mr-1" />
              {example.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Statistics */}
      {(inputTokens > 0 || outputTokens > 0) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Input Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                <NumberTicker value={inputTokens} />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Output Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                <NumberTicker value={outputTokens} />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingDown className="w-4 h-4" />
                Token Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-green-600">
                  <NumberTicker value={tokenSavings} />%
                </div>
                <Badge variant={tokenSavings > 30 ? 'default' : tokenSavings > 10 ? 'secondary' : 'outline'}>
                  {tokenSavings > 30 ? 'Excellent' : tokenSavings > 10 ? 'Good' : 'Minimal'}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Main Converter */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Side */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5" />
                  {config.inputLabel}
                </CardTitle>
                <CardDescription>
                  Upload a CSV file or paste CSV data directly
                </CardDescription>
              </div>
              {input && (
                <Button variant="ghost" size="sm" onClick={clearInput}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* File Upload Area */}
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                dragActive 
                  ? 'border-primary bg-primary/5' 
                  : 'border-muted-foreground/25 hover:border-muted-foreground/50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag & drop your CSV file here, or click to browse
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
              >
                Browse Files
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv,text/csv"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>

            {/* Text Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Or paste CSV data:</label>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={config.inputPlaceholder}
                className="min-h-[200px] font-mono text-sm"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{input.length} characters</span>
                <span>{input.split('\n').length} lines</span>
              </div>
            </div>

            <Button 
              onClick={handleConvert}
              disabled={!input.trim() || isConverting}
              className="w-full"
              size="lg"
            >
              {isConverting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Converting...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Convert to TOON
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Output Side */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  {config.outputLabel}
                </CardTitle>
                <CardDescription>
                  Token-efficient TOON format
                </CardDescription>
              </div>
              {output && (
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={handleCopy}>
                    {copied ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleDownload}>
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="relative">
              <Textarea
                value={output}
                readOnly
                placeholder={config.outputPlaceholder}
                className="min-h-[200px] font-mono text-sm bg-muted/30"
              />
              
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs"
                  >
                    Copied!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {output && (
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>{output.length} characters</span>
                <span>{output.split('\n').length} lines</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Error Display */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-red-800">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">Conversion Error</span>
                </div>
                <p className="text-red-700 mt-1">{error}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">CSV Conversion Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {config.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
