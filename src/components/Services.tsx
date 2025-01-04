export const Services = () => {
    return (
      <section className="flex-col items-center justify-center my-0 mx-auto text-center py-16 bg-[#FFD324] text-zinc-800 ">
        <div className=" maxlargura my-0 mx-auto">
            <h3 className="font-bold font-sans my-6 text-4xl lg:text-5xl">NOSSOS CULTOS</h3>
            <h5 className="font-bold px-4 text-base lg:text-lg">Confira os horários dos nossos encontros:</h5>
          
            <div className={`rounded-lg overflow-hidden shadow-md mb-4 w-4/5 lg:w-1/3 text-center bg-zinc-800 mt-8 mx-auto text-white p-4`}>
                
                {/* <div className="mb-4">
                    <h3 className="text-[#FFD324] mx-auto flex-col justify-center items-center font-bold text-lg lg:text-xl">Quarta-feira:</h3>
                    <p className="text-lg lg:text-xl">GC</p>
                    <p className="text-lg lg:text-xl">19h30</p>
                </div> */}

                <div className="mb-4">
                    <h3 className="text-[#FFD324] mx-auto flex-col justify-center items-center font-bold text-lg lg:text-xl">Quinta-feira:</h3>
                    {/* <p className="text-lg lg:text-xl">Culto Fé</p> */}
                    <p className="text-lg lg:text-xl">19h30 - Culto FÉ</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-[#FFD324] mx-auto flex-col justify-center items-center font-bold text-lg lg:text-xl">Domingo:</h3>
                    <p className="text-lg lg:text-xl">10h - Culto da Família </p>
                    <p className="text-lg lg:text-xl">18h - Culto de celebração</p>
                </div>

            </div>
        </div>
      </section>
     
    );
  };
  