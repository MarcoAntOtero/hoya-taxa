import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, School, Users } from "lucide-react"

const locations = [
  {
    title: "Community Tax Aid D.C.",
    description:
      "Partnering with local organizations to provide free tax preparation services to D.C. residents in need.",
    icon: Building2,
    image: "/community-center.png",
  },
  {
    title: "Campus Clinics",
    description: "On-campus tax clinics hosted at Georgetown University for students and local community members.",
    icon: School,
    image: "/georgetown-university-campus-building.jpg",
  },
  {
    title: "Local Community Centers",
    description: "Serving at various community centers throughout Washington D.C. to reach families where they are.",
    icon: Users,
    image: "/community-gathering-space.jpg",
  },
]

export function VolunteerLocations() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary text-balance">
          Where We Volunteer
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          We serve the D.C. community through partnerships with trusted organizations
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location) => {
            const Icon = location.icon
            return (
              <Card key={location.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={location.image || "/placeholder.svg"}
                    alt={location.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{location.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{location.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
