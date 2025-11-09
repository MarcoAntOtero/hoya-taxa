import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Handshake } from "lucide-react"

export const metadata = {
  title: "Our Partners - Hoya Taxa",
  description: "Organizations we work with to serve the D.C. community",
}

export default function PartnersPage() {
  const partners = [
    {
      name: "Community Tax Aid D.C.",
      logo: "/cta-logo.png",
      description:
        "Community Tax Aid D.C. provides free tax preparation services to low-income residents throughout the District. Our volunteers work alongside their experienced staff to serve families during tax season.",
    },
    {
      name: "Center for Social Justice",
      logo: "/CSJ.jpeg",
      description:
        "The Center for Social Justice at Georgetown Law connects students with community organizations to promote social and economic justice. Through this partnership, we host tax clinics and provide legal support to underserved communities.",
    },
    {
      name: "Georgetown University",
      logo: "/gt.png",
      description:
        "Georgetown University supports Hoya Taxa through funding, training facilities, and institutional backing. The university's commitment to community service makes our work possible and connects us with motivated student volunteers.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Handshake className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Our Partners</h1>
          </div>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            We collaborate with leading organizations in the D.C. area to maximize our impact and serve more families
            each year.
          </p>

          <div className="space-y-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="w-32 h-32 object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{partner.name}</h3>
                    <p className="text-foreground/80 leading-relaxed">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
