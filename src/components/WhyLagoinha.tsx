import LagoinhaHome from "./LagoinhaHome";
import {FaEarthAmericas, FaHeart, FaChurch, FaChildReaching} from "react-icons/fa6"

export const WhyLagoinha = () => {
  return (
    <section className="flex-col items-center justify-center my-0 mx-auto text-center bg-[#FFD324] text-zinc-800 ">
      <div className=" maxlargura justify-center my-0 mx-auto">
            <div className="py-8 lg:py-6 my-0 mx-auto">
              <h2 className="text-2xl lg:text-5xl font-bold font-mono mb-2 px-4 ">
                  PORQUE A IGREJA LAGOINHA ARACAJU É O SEU LUGAR?
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row lg:m-4">
              

            <div className="flex-col">
                  <div className="flex flex-wrap justify-center my-0 lg:my-8">
                        <LagoinhaHome
                          title="AMOR INCONDICIONAL"
                          icon={FaHeart}
                          description="Amamos você independente do seu passado! Amamos pessoas e não aceitamos que você fique sozinho. Vamos juntos trabalhar para que você e a sua família encontrem uma nova estação e propósito em Deus."
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                        <LagoinhaHome
                          title="SERVIR EM PRIMEIRO LUGAR"
                          icon={FaEarthAmericas}
                          description="Somos grandes o suficiente para servir e pequenos bastantes para nos importar! Em um dos nossos inúmeros GCs (Grupos de Crescimento) que realizam estudos bíblicos em casa, presenciais ou online, você encontrará uma família além da sua."
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center my-0 lg:my-8">
                        <LagoinhaHome
                          title="EXPERIÊNCIA DE CULTO"
                          icon={FaChurch}
                          description="Nossa experiência de culto, inspirada pelo Espírito Santo, te levará a momentos de profunda adoração, da intercessão e da Palavra que poderá ser aplicada de forma prática!"
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                        <LagoinhaHome
                          title="LAGOINHA KIDS"
                          icon={FaChildReaching}
                          description="Seus filhos serão cuidados e ministrados de acordo com a faixa etária deles. Eles farão amizades para a vida toda e terão bons exemplos a seguir."
                          estilo="w-full lg:w-1/3 bg-zinc-800 mx-4 text-white p-4"
                        />
                    </div>
              </div>

            </div>
      </div>
    </section>
   
  );
};
