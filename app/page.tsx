import TopBar from "@/components/layout/TopBar"
import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/home/Hero"
import ContactModal from '@/components/ui/ContactModal'

import Footer from "@/components/layout/Footer"
import ProductsSection from "@/components/home/ProductsSection"
import HealthSolutionsSection from "@/components/home/HealthSolutionsSection"
import BestSellingSection from "@/components/home/BestSellingSection"



export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
            <ContactModal/>
      <Hero />
      <ProductsSection />
      <HealthSolutionsSection />
      <BestSellingSection />
      <Footer />
    </>
  )
}
