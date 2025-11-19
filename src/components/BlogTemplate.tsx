import { type ReactNode, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { 
  Calendar, 
  Clock, 
  User, 
  Tag,
  Share2,
  BookOpen,
  ArrowLeft,
  ExternalLink
} from 'lucide-react'

interface BlogMetadata {
  title: string
  description: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  canonicalUrl: string
  ogImage?: string
}

interface TableOfContents {
  id: string
  title: string
  level: number
}

interface BlogTemplateProps {
  metadata: BlogMetadata
  breadcrumbs: Array<{ label: string; href: string }>
  tableOfContents?: TableOfContents[]
  children: ReactNode
  relatedLinks?: Array<{
    title: string
    description: string
    href: string
    external?: boolean
  }>
}

export function BlogTemplate({ 
  metadata, 
  breadcrumbs, 
  tableOfContents, 
  children, 
  relatedLinks 
}: BlogTemplateProps) {
  useEffect(() => {
    // Set page title and meta tags
    document.title = metadata.title
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description)
    }
    
    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (canonicalLink) {
      canonicalLink.href = metadata.canonicalUrl
    } else {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      canonicalLink.href = metadata.canonicalUrl
      document.head.appendChild(canonicalLink)
    }
    
    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: metadata.title },
      { property: 'og:description', content: metadata.description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: metadata.canonicalUrl },
      { property: 'article:author', content: metadata.author.name },
      { property: 'article:published_time', content: metadata.publishDate },
      { property: 'article:section', content: metadata.category }
    ]
    
    if (metadata.ogImage) {
      ogTags.push({ property: 'og:image', content: metadata.ogImage })
    }
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`) as HTMLMetaElement
      if (metaTag) {
        metaTag.content = tag.content
      } else {
        metaTag = document.createElement('meta')
        metaTag.setAttribute('property', tag.property)
        metaTag.content = tag.content
        document.head.appendChild(metaTag)
      }
    })
    
    // Add JSON-LD structured data for articles
    const jsonLd: any = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': metadata.title,
      'description': metadata.description,
      'author': {
        '@type': 'Person',
        'name': metadata.author.name,
        'jobTitle': metadata.author.role
      },
      'datePublished': metadata.publishDate,
      'dateModified': metadata.publishDate,
      'publisher': {
        '@type': 'Organization',
        'name': 'JTOON',
        'url': 'https://jtoon.dev'
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': metadata.canonicalUrl
      },
      'keywords': metadata.tags.join(', '),
      'articleSection': metadata.category,
      'about': {
        '@type': 'Thing',
        'name': 'TOON Format',
        'description': 'Token-efficient data notation for LLM optimization'
      }
    }
    
    if (metadata.ogImage) {
      jsonLd['image'] = metadata.ogImage
    }
    
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement
    if (script) {
      script.textContent = JSON.stringify(jsonLd)
    } else {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
    
    return () => {
      // Cleanup function
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
      
      const existingCanonical = document.querySelector('link[rel="canonical"]')
      if (existingCanonical) {
        document.head.removeChild(existingCanonical)
      }
      
      // Remove OG tags
      ogTags.forEach(tag => {
        const existingMeta = document.querySelector(`meta[property="${tag.property}"]`)
        if (existingMeta) {
          document.head.removeChild(existingMeta)
        }
      })
    }
  }, [metadata])

  const shareUrl = encodeURIComponent(metadata.canonicalUrl)
  const shareText = encodeURIComponent(metadata.title)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Breadcrumbs */}
        <div className="bg-muted/30 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>
        
        {/* Article Header */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category Badge */}
              <Badge variant="secondary" className="mb-4">
                <Tag className="w-3 h-3 mr-1" />
                {metadata.category}
              </Badge>
              
              {/* Title */}
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
                {metadata.title}
              </h1>
              
              {/* Description */}
              <p className="text-xl text-muted-foreground leading-8 mb-8">
                {metadata.description}
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{metadata.author.name}</div>
                    <div className="text-xs">{metadata.author.role}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(metadata.publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{metadata.readTime} read</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{metadata.tags.length} topics</span>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {metadata.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Share Buttons */}
              <div className="flex items-center gap-3 pt-6 border-t">
                <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share:
                </span>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Main Content Area */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Table of Contents - Sidebar */}
              {tableOfContents && tableOfContents.length > 0 && (
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Table of Contents
                        </h3>
                        <nav className="space-y-2">
                          {tableOfContents.map((item) => (
                            <a
                              key={item.id}
                              href={`#${item.id}`}
                              className={`block text-sm text-muted-foreground hover:text-foreground transition-colors ${
                                item.level === 2 ? 'pl-0' : item.level === 3 ? 'pl-4' : 'pl-6'
                              }`}
                            >
                              {item.title}
                            </a>
                          ))}
                        </nav>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {/* Main Article Content */}
              <div className={tableOfContents && tableOfContents.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-blockquote:text-muted-foreground prose-blockquote:border-primary"
                >
                  {children}
                </motion.article>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                              {link.title}
                              {link.external && <ExternalLink className="w-4 h-4" />}
                            </h3>
                            <p className="text-sm text-muted-foreground">{link.description}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="mt-4" asChild>
                          <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
                            {link.external ? 'Visit External' : 'Read More'}
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Back to Top / Navigation */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Button variant="outline" asChild>
                <a href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </a>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to Top
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
