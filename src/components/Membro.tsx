import Link from "next/link";

export const Nav = () => {
  
    return (
      <nav className="flex items-center justify-between py-4 px-8 font-semibold flex-col text-white bg-black">
  
        <div className="flex items-center">
          <Link target='_blank' href={'https://api.whatsapp.com/send/?phone=5579981206191&text=Ol%C3%A1%20quero%20me%20tornar%20membro%20da%20lagoinha%20estância&type=phone_number&app_absent=0'}>
          <p>TORNE-SE MEMBRO AGORA MESMO</p>
          </Link>
        </div>
    </nav>
    )

}