import Header from './components/Header'
import Hero from './components/Hero'
import ServiceOverview from './components/ServiceOverview'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main>
        <Hero />
        <ServiceOverview />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}