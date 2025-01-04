import { Header } from "@/components/Header";
import GcsList from "@/components/GcsList";
import {FaEarthAmericas, FaHeart, FaChurch, FaChildReaching} from "react-icons/fa6"



export default function Gc() {

  

  return (
    <main className="m-0 p-0 space-y-0 bg-[#FFD324]">
        <Header />
        <div className="text-white pt-12 mx-auto text-center flex-col justify-center items-center bg-black pb-32 lg:pb-40">
          <div className="maxlargura dizimos w-full lg:w-3/5 mx-auto items-center justify-center">
              <h1 className="text-3xl lg:text-5xl font-bold text-center pt-32">O que é o GC?</h1>
          </div>
          <div className="flex flex-col mt-20 text-center maxlargura mx-auto items-center justify-center">
            <p>
                GC são os nossos grupos de crescimento (comunhão) que se reúne semanalmente. Sejam em casas, igrejas e outros. Fazemos como na igreja primitiva, aprendendo, ensinando e tendo comunhão nas casas. Estamos firmados em uma palavra:
            </p>
            <p className="mt-8 w-full lg:w-5/12">
                "Todos os dias, no templo e de casa em casa, não deixavam de ensinar e proclamar que Jesus é o Cristo."
            </p>
            <p className="text-sm font-light mb-8">Atos 5:42</p>
            <p>Então não fica sozinho e vem fazer parte do GC.</p>
          </div>
        </div>

        <div>
            <h2 className="text-2xl lg:text-5xl font-bold font-mono mb-2 px-4 text-center pt-4">
                Locais de Realizações de GC:
            </h2>

            <div className="flex-col">
                  <div className="flex flex-wrap justify-center my-0 lg:my-8">
                        <GcsList
                          title="GC BELIEVE"
                          icon={FaHeart}
                          location="GC no Hospital Cirurgia"
                          boss="Responsável: Ana Beatriz"
                          contact="75 98289-8272"
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                        <GcsList
                          title="GC BARRA - DUNAMIS"
                          icon={FaHeart}
                          location="GC misto localizado na Barra dos Coqueiros."
                          boss="Responsável: Lilian A dos Santos"
                          contact="79 99138-7575"
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center my-0 lg:my-8">
                        <GcsList
                          title="GC ATOS 29"
                          icon={FaHeart}
                          location="GC Misto no bairro Orlando Dantas"
                          boss="Responsável: Nailson Meireles"
                          contact="79 99984-8726"
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                        <GcsList
                          title="GC AVIVAR"
                          icon={FaHeart}
                          location="GC misto localizado no bairro Luzia"
                          boss="Responsável: Alzira Paixão"
                          contact="79 99951-3015"
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center my-0 lg:my-8">
                        <GcsList
                          title="GC BETEL"
                          icon={FaHeart}
                          location="GC misto localizado no bairro Ponto Novo"
                          boss="Responsável: André Fernandes Graça"
                          contact="79 99962-4117"
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                        <GcsList
                          title="GC BLOOM"
                          icon={FaHeart}
                          location="GC voltada apenas para mulheres. Bairro Siqueira Campos"
                          boss="Responsável: Rafaella Karolyni Batista"
                          contact="79 99904-4280"
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center my-0 lg:my-8">
                        <GcsList
                          title="GC CASA DO OLEIRO"
                          icon={FaHeart}
                          location="Gc misto localizado no bairro Santo Antônio"
                          boss="Responsável: Cristiane Souza"
                          contact="79 99824-7208"
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                        <GcsList
                          title="GC EXÉRCITO DE CRISTO"
                          icon={FaHeart}
                          location="GC no bairro Santa Maria"
                          boss="Responsável: Marcus Vinicius"
                          contact="79 99131-0523"
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center my-0 lg:mt-8">
                        <GcsList
                          title="GC BARRA - GERAÇÃO ELEITA"
                          icon={FaHeart}
                          location="GC misto localizado na Barra dos Coqueiros"
                          boss="Responsável: Izabela Bezerra"
                          contact="79 98823-3040"
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                        <GcsList
                          title="GC BELÉM"
                          icon={FaHeart}
                          location="GC misto localizado no bairro Marivan"
                          boss="Responsável: Thiago Bispo"
                          contact="79 98822-4768"
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                    </div>
              </div>
        </div>

    </main>
  )
}
