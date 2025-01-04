export const Aboutme = () => {
  return (
    <section className="flex-col justify-center my-0 mx-auto text-center bg-zinc-800 text-white ">
      <div className=" maxlargura justify-center my-0 mx-auto">
      <div className="py-8 lg:py-16">
      <h2 className="text-xl lg:text-5xl font-bold mb-2 ">
              QUEM SOMOS
      </h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:m-8">
        <div className="w-full lg:w-1/2">
          <div className="px-4 pb-8 flex items-center text-justify">
            <div>
              <p className="mb-2">
                A Igreja Batista da Lagoinha nasceu em Belo Horizonte em 20 de dezembro de 1957 e há mais de 60 anos atua de forma relevante na expansão do evangelho. 
              </p>
              <p className="mb-2">
              A Sexta Igreja Batista, conforme seria chamada na época, iniciou com um grupo de 32 pessoas lideradas pelo Pastor José Rêgo do Nascimento. 
              </p>
              <p className="mb-2">
              Em 1972, atingiu um total de 300 membros e passou a ser liderada pelo Pastor Márcio Roberto Vieira Valadão até 2022, e hoje é liderada pelo Pastor André Valadão. 
              </p>
              <p className="mb-2">
              Atualmente, por meio de um processo de expansão dinâmico, a Lagoinha conta com mais de 600 igrejas implantadas e cerca de 300 mil membros em diferentes lugares no Brasil e do mundo.
              </p>
              <p className="mb-2">
              Em paralelo ao trabalho de expansão, a Lagoinha promove e contribui com o desenvolvimento de pessoas por meio de projetos destinados à ressocialização, atendimento jurídico gratuito, capacitação profissional, assistência espiritual, psicológica e familiar, entre outros, viabilizados tanto pelas Lagoinhas regionais quanto pelos departamentos internos instalados na sede. 
              </p>
              <p className="my-0 mb-2">
              O que começou em Belo Horizonte continua em Sergipe. A Lagoinha Aracaju quer levar a palavra de Deus para todos, e desta forma, cumprir seu propósito criando novas oportunidades e mudando histórias por meio de Cristo e para Cristo.
              </p>
            </div>
          </div>
        </div>

        <div className="m-0 w-full lg:w-1/2 flex justify-center pb-10">
          <div className="overflow-hidden">
            <img src="prmarcelo.webp" alt="Imagem" className="w-72 lg:w-96 h-auto" />
            <p className="text-left pt-1">Pr Marcelo Santos</p>
          </div>
        </div>
      </div>
      </div>
    </section>
   
  );
};
