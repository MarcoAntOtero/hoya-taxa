import { Instagram, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        {/* Newsletter Signup */}
        <div className="max-w-md mx-auto mb-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Sign Up
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a href="mailto:contact@hoyataxa.org" className="hover:text-accent transition-colors" aria-label="Email">
            <Mail className="h-6 w-6" />
          </a>
          <a href="#home" className="hover:text-accent transition-colors" aria-label="Back to top">
            <ArrowUp className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-90">
          <p>© 2025 Hoya Taxa | Georgetown University</p>
        </div>
      </div>
    </footer>
  )
}
