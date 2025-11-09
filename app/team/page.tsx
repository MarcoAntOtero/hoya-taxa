import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users } from "lucide-react"

export const metadata = {
  title: "Our Team - Hoya Taxa",
  description: "Meet the dedicated student volunteers behind Hoya Taxa",
}

export default function TeamPage() {
  const executiveBoard = [
    {
      name: "Ty",
      role: "President",
      image: "/ty.png",
    },
    {
      name: "Emilio",
      role: "Tresurer",
      image: "/emilio.jpeg",
    },
    {
      name: "Barbara",
      role: "V.P. of Operations",
      image: "/barbara.jpg",
    },
    {
      name: "Michael",
      role: "V.P. of External Affairs",
      image: "/michael1.jpg",
    },
    {
      name: "Hailey",
      role: "V.P. of Marketing",
      image: "/hailey.jpg",
    },
  ]
  const fallLeaderShip = [
    {
      name: "Emily",
      role: "Director of Training",
      image: "/emily.jpg",
    },
    {
      name: "Ethanson",
      role: "Secretary to the President",
      image: "/ethanson.jpg",
    },
    {
      name: "Michael",
      role: "Secretary to the Treasurer",
      image: "/michael2.jpeg",
    },
    {
      name: "Eric",
      role: "Growth Officer",
      image: "/eric.jpg",
    },
    {
      name: "Rebecca",
      role: "Engagement Officer",
      image: "/rebecca.jpeg",
    },
    {
      name: "Ally",
      role: "On-Campus Officer",
      image: "/ally.jpeg",
    },
    {
      name: "Aaliyah",
      role: "Social Media Officer",
      image: "/aaliyah.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Users className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Meet the Team</h1>
          </div>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
            Our dedicated team of Georgetown student volunteers is committed to promoting financial literacy and
            providing free tax assistance to the D.C. community.
          </p>
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-primary mb-8 underline decoration-primary/40">
              Executive Board
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executiveBoard.map((member, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-accent font-medium">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
            <h2 className="text-3xl font-bold text-primary mb-8 underline decoration-primary/40">
              Fall Leadership Team 2024
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fallLeaderShip.map((member, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-accent font-medium">{member.role}</p>
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
