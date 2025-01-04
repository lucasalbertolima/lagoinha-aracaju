import Link from 'next/link';
import { navigationLinks } from '../../utils/data';

type mobileProps = {
  acao: () => void;
}

export const NavLinkPc = () => {
    return (
      <ul className="flex space-x-4 py-2">
        {navigationLinks.map((link, index) => (
            <li key={index} >
                <Link className="mr-6" href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    );
  };
  

export const NavLinkMobile = ({ acao }: mobileProps) => {
    return (
      <ul className="">
        {navigationLinks.map((link, index) => (
            <li key={index} className="" >
                 <Link href={link.path} onClick={acao} ><p className="py-10 px-20">{link.label}</p></Link>
            </li>
        ))}
      </ul>
    );
  };
  