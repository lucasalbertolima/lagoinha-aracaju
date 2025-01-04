import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { register } from 'swiper/element/bundle';
import { Nav } from '@/components/Membro'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa6'
register();

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lagoinha Aracaju | Igreja Batista da Lagoinha Aracaju - Sergipe',
  description: 'Bem-vindo ao Site Oficial da Igreja Batista da Lagoinha da Cidade de Aracaju no estado de Sergipe. Somos Grandes para servir, porém pequenos para se importar.',
  openGraph: {
    images: [
      {
        url: 'logo.png',
        width: 1200, 
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body  className={`${inter.className} m-0 p-0`}>
      
          <Nav />

          {children}

          
          <Footer />

          <div className="fixed bottom-4 right-4 z-10">
            <Link target='_blank' href="https://api.whatsapp.com/send/?phone=5579981206191&text=Ol%C3%A1%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20igreja&type=phone_number&app_absent=0">
                <div
                  className="bg-[#00a884] text-white rounded-full p-2 shadow-md cursor-pointer"
                >
                  <p><FaWhatsapp size={30} /></p>
                </div>
            </Link>
      </div>
      </body>
    </html>
  )
}
