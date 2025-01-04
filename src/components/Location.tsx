export const Location = () => {
  return (
    <section className="flex-col items-center justify-center my-0 mx-auto text-center py-16 bg-zinc-800 text-white ">
      <div className=" maxlargura my-0 mx-auto">
        <div className="">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4303435738675!2d-37.06386792495572!3d-10.930829189227467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab32103d41b9b%3A0x84325cd5e7dbfabf!2sIgreja%20Batista%20Lagoinha%20Aracaju!5e0!3m2!1spt-BR!2sbr!4v1735991021885!5m2!1spt-BR!2sbr"
            height="350"
            loading="lazy"
            className="mx-auto rounded-xl w-5/6 lg:w-1/2"
        ></iframe>
        </div>
        <h3 className="text-[#FFD324] font-extrabold font-mono my-6 text-4xl lg:text-6xl">COMECE HOJE</h3>
        <h5 className="font-bold px-4 text-base lg:text-lg">Venha nos visitar e viva o NOVO de Deus!</h5>
        <p className="mt-3 px-4 text-sm lg:text-lg">Presencialmente:</p>
        <p className="px-4 text-sm lg:text-lg">Av Hermes Fontes, 1478, Luzia - Aracaju/SE</p>
      </div>
    </section>
   
  );
};
