import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"

export const metadata = {
  title: "Contact - Hoya Taxa",
  description: "Get in touch with Hoya Taxa",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
