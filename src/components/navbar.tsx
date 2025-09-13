export const Navbar = () => {
  return (
    <header className="w-full p-3 bg-gray-900 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="font-bold text-lg">Bruno Romero</a>
        <div className="hidden lg:block space-x-10">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#education-experience" className="hover:underline">Education & Experience</a>
          <a href="#references" className="hover:underline">References</a>
        </div>
        <a href="#contact" className="rounded bg-white text-black inline-block py-2 px-4 text-lg font-bold">Contact me</a>
      </nav>
    </header>
  );
};