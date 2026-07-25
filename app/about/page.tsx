import AboutHero from '@/app/about/components/AboutHero'
import Transform from '@/app/about/components/Transform'
import Simplify from '@/app/about/components/Simplify'
import Mission from '@/app/about/components/Mission'
import Team from '@/app/about/components/Team'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main>
      <AboutHero />
      <Transform />
      <Simplify />
      <Mission />
      <Team />
      <Banner />
      <Footer />
    </main>
  )
}

export default page