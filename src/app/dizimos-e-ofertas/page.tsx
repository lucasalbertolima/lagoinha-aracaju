import { Header } from "@/components/Header";
import { FaPix } from "react-icons/fa6";

export default function DizimosOfertas() {

  

  return (
    <main className="m-0 p-0 space-y-0 bg-[#FFD324]">
        <Header />
        <div className="text-white pt-12 mx-auto text-center flex-col justify-center items-center bg-black pb-32 lg:pb-40">
          <div className="maxlargura dizimos w-full lg:w-3/5 mx-auto items-center justify-center">
              <h1 className="ml-0 lg:ml-48 text-3xl lg:text-5xl font-bold text-center lg:text-start pt-32">DÍZIMOS E OFERTAS</h1>
          </div>
          <div className="flex flex-col mt-20 text-center maxlargura mx-auto items-center justify-center">
            <h4>Faça sua contribuição através de uma das nossas contas bancárias.</h4>
            <div className="mt-10 flex flex-wrap justify-center space-x-0 text-center space-y-3 lg:space-y-0 lg:space-x-3 lg:text-left">
                <FaPix size={50} className=""/>
                <div className="">
                    <p className="text-sm">
                        <span className="font-bold">CNPJ:</span> 48.677.609.0001/26 <br/> <span className="font-bold">RAZÃO SOCIAL:</span> PRIMEIRA IGREJA BATISTA DA LAGOINHA ARACAJU -SE
                    </p>
                </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-start space-x-6 text-center space-y-3 lg:space-y-0 lg:space-x-3 lg:text-left">
                <img src="logo-caixa.png" alt="" className="w-12" />
                <div className="">
                    <p className="text-sm">
                        <span className="font-bold">AGÊNCIA:</span> 2215 <br/> <span className="font-bold">C.C:</span> 1492-2 <br/> <span className="font-bold">OP:</span> 003
                    </p>
                </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-center space-x-0 text-center space-y-3 lg:space-y-0 lg:space-x-3 lg:text-left">
                <FaPix size={50} className=""/>
                <div className="">
                    <p className="text-sm">
                        <span className="font-bold">E-MAIL:</span> expansao@lagoinhase.com.br <br/> <span className="font-bold">RAZÃO SOCIAL:</span> PRIMEIRA IGREJA BATISTA DA LAGOINHA ARACAJU -SE
                    </p>
                </div>
            </div>
            <p className="mt-8 w-full lg:w-5/12">
                "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria."
            </p>
            <p className="text-sm font-light">2 Coríntios 9:7</p>
          </div>
        </div>

    </main>
  )
}
