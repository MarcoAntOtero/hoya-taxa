import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Contact />
      <Footer />
    </main>
  )
}
