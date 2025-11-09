"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary text-balance">Contact Us</h2>
          <p className="text-lg text-muted-foreground">Get in touch to learn more or get involved.</p>
        </div>

        {submitted ? (
          <div className="bg-accent/10 border border-accent rounded-xl p-8 text-center">
            <p className="text-xl font-semibold text-accent">Your message has been sent!</p>
            <p className="text-muted-foreground mt-2">We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" required placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" required placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" required placeholder="john.doe@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic">I'm contacting about... *</Label>
              <Select required>
                <SelectTrigger id="topic">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clinics">On-Campus Tax Clinics</SelectItem>
                  <SelectItem value="volunteering">Volunteering</SelectItem>
                  <SelectItem value="partnerships">Partnerships</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" required placeholder="Tell us more about your inquiry..." rows={6} />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-xl"
            >
              Send Message
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
