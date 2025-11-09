import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen } from "lucide-react"

export const metadata = {
  title: "Our History - Hoya Taxa",
  description: "Learn about the founding and growth of Hoya Taxa",
}

export default function HistoryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Our History</h1>
          </div>

          <div className="max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Founded in 2014 by a dedicated group of Georgetown students, Hoya Taxa began with a simple but powerful
                mission: to promote financial literacy and provide free tax assistance to lower-income families in the
                D.C. community.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                What started as a small volunteer initiative with just a handful of students has grown into one of
                Georgetown's most impactful community service organizations. In our first year, we assisted fewer than
                50 families. Today, our trained volunteers help hundreds of individuals and families navigate the
                complex tax system each year.
              </p>

              <div className="bg-card rounded-xl border border-border p-8 my-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Key Milestones</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-accent font-bold text-xl">2014</span>
                    <p className="text-foreground/80">
                      Hoya Taxa founded by Georgetown students passionate about financial justice
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-accent font-bold text-xl">2015</span>
                    <p className="text-foreground/80">
                      Partnership established with Community Tax Aid D.C. to expand our reach
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-accent font-bold text-xl">2017</span>
                    <p className="text-foreground/80">
                      Began collaboration with Georgetown's Center for Social Justice
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-accent font-bold text-xl">2019</span>
                    <p className="text-foreground/80">Launched on-campus tax clinics at Georgetown University</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-accent font-bold text-xl">2024</span>
                    <p className="text-foreground/80">
                      Celebrated 10 years of service, having assisted over 2,000 families
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Our growth has been driven by the commitment of Georgetown students who undergo rigorous IRS
                certification training each year. These volunteers dedicate countless hours to mastering tax law and
                providing compassionate, professional service to our community.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                As we look to the future, Hoya Taxa remains committed to our founding principles: empowering individuals
                through financial literacy, providing accessible tax assistance, and fostering a culture of service
                among Georgetown students. We continue to expand our partnerships and reach more families each year,
                always staying true to our mission of promoting economic justice in the D.C. community.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
