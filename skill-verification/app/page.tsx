import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { WalletConnectButton } from "@/components/wallet-connect-button"
import { VerificationSteps } from "@/components/verification-steps"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Building, CheckCircle, FileCheck, Shield, User, Wallet } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SkillChain</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#intro" className="text-sm font-medium hover:text-primary">
              Introduction
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </a>
            <a href="#for-employers" className="text-sm font-medium hover:text-primary">
              For Employers
            </a>
            <a href="#for-users" className="text-sm font-medium hover:text-primary">
              For Users
            </a>
            <a href="#blockchain" className="text-sm font-medium hover:text-primary">
              Blockchain
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm" variant="outline">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="px-3.5 py-1.5 text-sm font-medium">
              Blockchain-Powered Credentials
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Verify. Validate. <span className="text-primary">Elevate.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The future of credential verification is here. Secure, transparent, and immutable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="intro" className="py-20 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Store and verify skill credentials on-chain</h2>
                <p className="text-lg text-muted-foreground">
                  SkillChain allows you to securely store your educational achievements, certifications, and skills on
                  the blockchain, making them easily verifiable by employers and institutions.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our platform uses advanced AI verification and community governance to ensure all credentials are
                  authentic and tamper-proof, creating a trusted ecosystem for skill validation.
                </p>
                <Button variant="link" className="p-0 gap-2">
                  Discover how it works <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="bg-background rounded-lg border shadow-lg p-6 aspect-square flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="h-32 w-32 text-primary/20" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background rounded-full p-4 shadow-lg border">
                    <CheckCircle className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Our streamlined verification process ensures your credentials are authentic and securely stored on the
                blockchain.
              </p>
            </div>

            <VerificationSteps />
          </div>
        </section>

        {/* For Employers & Universities Section */}
        <section id="for-employers" className="py-20 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-background rounded-lg border shadow-lg p-6 order-2 md:order-1">
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-primary/10 inline-block">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Streamlined Verification</h3>
                  <p className="text-muted-foreground">
                    Instantly verify candidate credentials with a simple scan or link, eliminating the need for lengthy
                    background checks.
                  </p>

                  <div className="p-4 rounded-lg bg-primary/10 inline-block">
                    <FileCheck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Tamper-Proof Records</h3>
                  <p className="text-muted-foreground">
                    Access immutable records that cannot be falsified, ensuring complete confidence in candidate
                    qualifications.
                  </p>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl font-bold tracking-tight">For Employers & Universities</h2>
                <p className="text-lg text-muted-foreground">
                  Make confident decisions with verified, tamper-proof credentials. Our platform provides a seamless way
                  to validate candidate qualifications before hiring or admission.
                </p>
                <p className="text-lg text-muted-foreground">
                  Reduce hiring risks and streamline your verification process with blockchain-backed credentials that
                  cannot be falsified or manipulated.
                </p>
                <Button variant="outline" className="gap-2">
                  Partner With Us <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* For Users Section */}
        <section id="for-users" className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">For Users</h2>
                <p className="text-lg text-muted-foreground">
                  Store all your skills and credentials in a secure digital wallet that you control. No more lost
                  certificates or complicated verification processes.
                </p>
                <p className="text-lg text-muted-foreground">
                  Update your skills over time as you grow professionally. Our platform allows for evolving credentials
                  that reflect your current capabilities.
                </p>
                <Button variant="outline" className="gap-2">
                  Create Your Wallet <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="bg-background rounded-lg border shadow-lg p-6">
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-primary/10 inline-block">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Own Your Credentials</h3>
                  <p className="text-muted-foreground">
                    Take full control of your professional identity with self-sovereign credentials that you own and
                    manage.
                  </p>

                  <div className="p-4 rounded-lg bg-primary/10 inline-block">
                    <Wallet className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Digital Wallet</h3>
                  <p className="text-muted-foreground">
                    Store all your credentials in one secure location, accessible whenever you need to share your
                    qualifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blockchain-Powered Section */}
        <section id="blockchain" className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Blockchain-Powered</h2>
              <p className="text-lg text-muted-foreground">
                We leverage Algorand ARC-19 for our credential system, providing a perfect foundation for evolving
                credentials.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="font-bold mb-2">Evolving Credentials</h3>
                  <p className="text-sm text-muted-foreground">
                    ARC-19 allows credentials to evolve over time, reflecting your growing skill set.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="font-bold mb-2">Carbon-Negative</h3>
                  <p className="text-sm text-muted-foreground">
                    Algorand's sustainable blockchain ensures minimal environmental impact.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="font-bold mb-2">Fast & Secure</h3>
                  <p className="text-sm text-muted-foreground">
                    Instant finality and robust security protect your valuable credentials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Ready to Secure Your Skills?</h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of professionals who are verifying and showcasing their skills on the blockchain.
              </p>
              <WalletConnectButton />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">SkillChain</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SkillChain. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
