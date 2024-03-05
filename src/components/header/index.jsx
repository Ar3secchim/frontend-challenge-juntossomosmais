import Logo from "@/assets/logo.svg";

export function Header({ children }) {
  return (
    <header className="mx-auto xl:px-40 px-12 py-5 flex items-center justify-between bg-gray-100">
      <section>
        <img src={Logo} />
      </section>

      <section className="flex gap-2 items-center">
        {children}
        <span className="lg:w-[174px] h-4 rounded-full bg-gray-300"></span>
        <span className="lg:w-[174px] h-4 rounded-full bg-gray-300"></span>
      </section>
    </header>
  );
}
