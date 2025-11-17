
import Header from '@/components/header'
import Hero from '@/components/hero'
import Team from '@/components/team'
import Services from '@/components/services'
import Contact from '@/components/contact'
import Footer from '@/components/footer'


export default function Home() {
  return (
    <div className="min-h-screen 2xl:bg-[#f7f7f7] overflow-hidden">
      {/* <Header /> */}
      <Hero />
     
      <Services />
       <Team />
      <Contact />
      <Footer />
    </div>
  )
}
