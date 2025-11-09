import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar } from "lucide-react"

export const metadata = {
  title: "Calendar - Hoya Taxa",
  description: "View our upcoming tax clinic events and schedule",
}

export default function CalendarPage() {
  const events = [
    { date: "February 10, 2025", event: "On-Campus Tax Clinic", location: "Georgetown University" },
    { date: "February 17, 2025", event: "Community Tax Aid DC", location: "Community Center" },
    { date: "February 24, 2025", event: "On-Campus Tax Clinic", location: "Georgetown University" },
    { date: "March 2, 2025", event: "Community Tax Aid DC", location: "Community Center" },
    { date: "March 9, 2025", event: "On-Campus Tax Clinic", location: "Georgetown University" },
    { date: "March 16, 2025", event: "Center for Social Justice Clinic", location: "CSJ Office" },
    { date: "March 23, 2025", event: "On-Campus Tax Clinic", location: "Georgetown University" },
    { date: "March 30, 2025", event: "Community Tax Aid DC", location: "Community Center" },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Calendar className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Calendar of Tax Clinics</h1>
          </div>
          <p className="text-lg text-foreground/80 mb-4 max-w-3xl">
            Join us at our upcoming tax clinics throughout the tax season. All clinics are free and open to eligible
            community members.
          </p>
          <p className="underline text-lg text-foreground/80">
            <a target="_blank" href="https://calendar.google.com/calendar/u/0/r?cid=hoyataxa@georgetown.edu">Add the Hoya Taxa GCal to your Google Calendar (GCal) here</a>
          </p>
          <p className="underline text-lg text-foreground/80 mb-6 max-w-3xl">
            <a target="_blank" href="https://calendar.google.com/calendar/ical/hoyataxa%40georgetown.edu/public/basic.ics">Or add the Hoya Taxa GCal to Apple iCal here</a>
          </p>
          
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold">Date</th>
                  <th className="text-left py-4 px-6 font-semibold">Event</th>
                  <th className="text-left py-4 px-6 font-semibold">Location</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index} className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 font-medium">{event.date}</td>
                    <td className="py-4 px-6">{event.event}</td>
                    <td className="py-4 px-6 text-foreground/80">{event.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
