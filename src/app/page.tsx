import { Aboutme } from "@/components/Aboutme"
import { WhyLagoinha } from "@/components/WhyLagoinha"
import { Location } from "@/components/Location"
import { Services } from "@/components/Services"
import Sliders from "@/components/Sliders"



export default function Home() {

  

  return (
    <main className="m-0 p-0 space-y-0 bg-[#FFD324]">

      <Sliders />
   
      <section id="quemsomos" className="justify-center  m-0 p-0">
        <Aboutme />
      </section>
      
      <section id="porque-lagoinha" className="justify-center m-0 p-0">
        <WhyLagoinha />
      </section>

      <section  id="location" className="bg-zinc-800">
        <Location />
      </section>

      <section  id="services" className="bg-zinc-800">
        <Services />
      </section>

      </main>
  )
}
