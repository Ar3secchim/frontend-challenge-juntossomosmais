import Logo from "@/assets/logo-pb.svg";
import Linkedin from "../ui/icons/linkedin.svg";
import Facebook from "../ui/icons/facebook.svg";
import Instagram from "../ui/icons/instagram.svg";

export function Footer() {
  return (
    <footer className="bg-[#3A3A3A] h-72 text-white flex flex-col items-center justify-center gap-6">
      <img
        src={Logo}
        alt="logo jusntos somos mais  preto e branco"
        width={176}
        height={48}
      />
      <p className="text-base font-medium">
        Juntos Somos Mais Fidelização S.A.
      </p>

      <p className="text-sm">Siga-nos nas redes sociais:</p>
      <div className="flex gap-4">
        <span className="bg-[#28B0FC] rounded-full p-3 h-10 w-10">
          <img width={20} src={Linkedin} alt="icon da logo do linkedin" />
        </span>
        <span className="bg-[#28B0FC] rounded-full  px-4 py-3 h-10 w-10">
          <img width={10} src={Facebook} alt="icon da logo do linkedin" />
        </span>
        <span className="bg-[#28B0FC] rounded-full  p-3 h-10 w-10">
          <img width={20} src={Instagram} alt="icon da logo do linkedin" />
        </span>
      </div>
    </footer>
  );
}
