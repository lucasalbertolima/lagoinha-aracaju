"use client"

import React from 'react';
import { Header } from './Header';


export default () => {

   
    return (
        <div className="p-0 m-0 bg-fundo-lagoinha justify-center items-center flex-col">
            <Header />
              <div className="text-center space-y-8 font-semibold">
                  <h2 className="pt-4 text-sm lg:text-xl">Você está no Lugar Certo. Na Hora Certa. Com as Pessoas Certas.</h2>
                  <div className='linha-vertical text-black items-center text-center justify-center m-auto'></div>
                  <h1 className="text-4xl lg:text-7xl">BEM-VINDO<br/> AO NOVO</h1>
                  <div className='linha-vertical text-black items-center text-center justify-center m-auto'></div>
                  <h2 className="pb-32   text-xl">LAGOINHA ARACAJU</h2>
              </div>
        </div>
    );
  };