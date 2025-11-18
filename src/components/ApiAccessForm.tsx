import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Mail, 
  Building, 
  User, 
  MessageSquare,
  Key,
  Shield
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  useCase: string
  monthlyVolume: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  useCase?: string
  monthlyVolume?: string
}

const usageOptions = [
  { value: 'small', label: 'Small (< 1M tokens/month)', description: 'Perfect for startups and personal projects' },
  { value: 'medium', label: 'Medium (1M - 10M tokens/month)', description: 'Ideal for growing businesses' },
  { value: 'large', label: 'Large (10M - 100M tokens/month)', description: 'Enterprise-ready solution' },
  { value: 'enterprise', label: 'Enterprise (> 100M tokens/month)', description: 'Custom pricing available' },
]

export function ApiAccessForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    useCase: '',
    monthlyVolume: 'small'
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [apiKey, setApiKey] = useState<string>('')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company/Organization is required'
    }
    
    if (!formData.useCase.trim()) {
      newErrors.useCase = 'Please describe your use case'
    } else if (formData.useCase.trim().length < 10) {
      newErrors.useCase = 'Please provide more details about your use case (at least 10 characters)'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const generateApiKey = (): string => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let result = 'jtoon_'
    for (let i = 0; i < 32; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Generate API key first
      const newApiKey = generateApiKey()
      
      // Prepare data for webhook
      const webhookData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        useCase: formData.useCase,
        monthlyVolume: formData.monthlyVolume,
        apiKey: newApiKey,
        submittedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct'
      }
      
      // Send to webhook
      const response = await fetch('https://n8n.savaldev.com/webhook/ee7954a0-e2a0-46dc-9683-6e9b1f559a23', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      // Success - set the reference ID (using generated key as reference)
      setApiKey(newApiKey)
      setSubmitStatus('success')
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        company: '',
        useCase: '',
        monthlyVolume: 'small'
      })
      setErrors({})
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }


  if (submitStatus === 'success' && apiKey) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-green-200 bg-green-50/50">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-green-800">Request Submitted Successfully!</CardTitle>
            <CardDescription className="text-green-700">
              Thank you for your interest! We will contact you within 24 hours to provide early access to the TOON API.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4 text-center">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="text-left">
                    <h4 className="text-sm font-medium text-blue-800">What's Next?</h4>
                    <ul className="text-sm text-blue-700 mt-2 space-y-1">
                      <li>• We'll review your request within 24 hours</li>
                      <li>• You'll receive your API key and documentation via email</li>
                      <li>• Early access includes priority support and beta features</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div className="text-left">
                    <h4 className="text-sm font-medium text-amber-800">Early Access Benefits</h4>
                    <p className="text-sm text-amber-700 mt-1">
                      As an early user, you'll get free access during beta, priority support, 
                      and the opportunity to influence our API development roadmap.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p><strong>Reference ID:</strong> <code className="bg-muted px-2 py-1 rounded font-mono">{apiKey}</code></p>
                <p className="mt-2">Please keep this reference ID for your records.</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={() => {
                  setSubmitStatus('idle')
                  setApiKey('')
                }}
                variant="outline"
              >
                Submit Another Request
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Request API Access</CardTitle>
          <CardDescription>
            Get programmatic access to all TOON converters with a free API key
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            
            {/* Company Information */}
            <div className="space-y-2">
              <Label htmlFor="company" className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                Company/Organization
              </Label>
              <Input
                id="company"
                type="text"
                placeholder="Acme Corp"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className={errors.company ? 'border-red-500' : ''}
              />
              {errors.company && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.company}
                </p>
              )}
            </div>
            
            {/* Usage Volume */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Expected Monthly Usage</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {usageOptions.map((option) => (
                  <div key={option.value}>
                    <label className="relative flex cursor-pointer items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="monthlyVolume"
                        value={option.value}
                        checked={formData.monthlyVolume === option.value}
                        onChange={(e) => handleInputChange('monthlyVolume', e.target.value)}
                        className="mt-1 h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900">
                            {option.label}
                          </span>
                          {option.value === 'small' && (
                            <Badge variant="secondary" className="text-xs">Free</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Use Case */}
            <div className="space-y-2">
              <Label htmlFor="useCase" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Use Case Description
              </Label>
              <Textarea
                id="useCase"
                placeholder="Describe how you plan to use the TOON API. For example: 'We want to reduce token costs in our RAG pipeline by converting JSON documents to TOON format before feeding them to our LLM.'"
                value={formData.useCase}
                onChange={(e) => handleInputChange('useCase', e.target.value)}
                rows={4}
                className={errors.useCase ? 'border-red-500' : ''}
              />
              {errors.useCase && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.useCase}
                </p>
              )}
              <p className="text-sm text-gray-500">
                {formData.useCase.length}/500 characters
              </p>
            </div>
            
            {/* Error State */}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-sm text-red-800">
                    Something went wrong. Please try again or contact support.
                  </p>
                </div>
              </div>
            )}
            
            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing Request...
                </>
              ) : (
                <>
                  <Key className="w-4 h-4 mr-2" />
                  Request Early Access
                </>
              )}
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our Terms of Service and Privacy Policy. 
              We'll only contact you regarding your API access.
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
