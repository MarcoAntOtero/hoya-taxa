import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building2, Clock, FileText, Award as IdCard } from "lucide-react"

export const metadata = {
  title: "On-Campus Tax Clinics - Hoya Taxa",
  description: "Free tax preparation services at Georgetown University",
}

export default function ClinicsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Building2 className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">On-Campus Tax Clinics</h1>
          </div>

          <div className="max-w-4xl">
            <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
              Hoya Taxa hosts free tax clinics for students and D.C. residents at Georgetown University during tax
              season. Our IRS-certified volunteers provide professional, confidential tax preparation services at no
              cost to eligible individuals and families.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Clinic Hours</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Saturdays, 10:00 AM - 4:00 PM
                      <br />
                      February through April
                      <br />
                      Walk-ins welcome, appointments preferred
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <IdCard className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Eligibility</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Household income under $60,000
                      <br />
                      Students with simple tax returns
                      <br />
                      D.C. residents and Georgetown community members
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl border border-primary/20 p-8">
              <div className="flex items-start gap-4">
                <FileText className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">What to Bring</h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>
                        <strong>Income Documents:</strong> W-2s, 1099s, and any other income statements
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>
                        <strong>Identification:</strong> Government-issued photo ID and Social Security card
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>
                        <strong>Prior Year Return:</strong> Copy of last year's tax return (if available)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>
                        <strong>Bank Information:</strong> Routing and account numbers for direct deposit
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>
                        <strong>Dependent Information:</strong> Social Security numbers and dates of birth for all
                        dependents
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
