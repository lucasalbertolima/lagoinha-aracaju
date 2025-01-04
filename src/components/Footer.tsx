import Link from 'next/link';
import { navigationLinks } from '../../utils/data';

import { FaWhatsapp } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa6"

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <nav className="w-full md:w-auto mb-4 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 py-2">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link className="mr-6" href={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full md:w-auto md:mb-0 flex justify-center md:justify-end">
          <ul className="flex space-x-4 py-2">
            <li>
              <Link target='_blank' href="https://www.youtube.com/@LagoinhaAracaju" className="mr-6"><span><FaYoutube size={30} /></span></Link>
            </li>
            <li>
              <Link target='_blank' href="https://www.instagram.com/lagoinhaaracaju/" className="mr-6"><span><FaInstagram size={30} /></span></Link>
            </li>
            <li>
              <Link target='_blank' href="https://chat.whatsapp.com/EFN8kNpTPZdHbZsdT6cJHN" className="mr-6"><span><FaWhatsapp size={30} /></span></Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-center">
        © 2024  - Igreja Batista da Lagoinha Aracaju - Sergipe. Todos os Direitos Reservados.
      </p>
    </footer>
  );
};
