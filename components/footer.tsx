import { Instagram, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/hoyataxa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a href="mailto:hoyataxa@georgetown.edu" className="hover:text-accent transition-colors" aria-label="Email">
            <Mail className="h-6 w-6" />
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
