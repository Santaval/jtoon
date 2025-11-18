import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Main content with top padding to account for fixed navbar */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-24 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Convert JSON to TOON
                <br />
                <span className="text-primary">Save 30-60% Tokens</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Reduce LLM token usage with TOON format. Perfect for ChatGPT, Claude, and other AI models.
                Free, fast, and optimized for modern workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Choose JTOON?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                The most efficient way to optimize your data for AI models
              </p>
            </div>
            {/* Feature cards will go here */}
          </div>
        </section>

        {/* Converter Section */}
        <section id="converter" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Try the Converter
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Convert your JSON, CSV, and other formats to TOON instantly
              </p>
            </div>
            {/* Converter tool will go here */}
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="py-24 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                See It In Action
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Real examples showing the token savings you can achieve
              </p>
            </div>
            {/* Examples will go here */}
          </div>
        </section>

        {/* Documentation Section */}
        <section id="docs" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Documentation
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Learn everything about the TOON format and how to use it
              </p>
            </div>
            {/* Documentation links will go here */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              © 2024 JTOON. Built with ❤️ for the AI community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
