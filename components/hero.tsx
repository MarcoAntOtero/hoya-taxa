import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center justify-center bg-primary text-primary-foreground pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/homepage1.jpeg"
          alt="Students volunteering"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-24 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">Welcome to Hoya Taxa</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-balance leading-relaxed opacity-95">
          We promote financial literacy and assist lower-income D.C. families with their taxes.
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-xl"
          asChild
        >
          <a href="#contact">Get Involved</a>
        </Button>
      </div>
    </section>
  )
}
