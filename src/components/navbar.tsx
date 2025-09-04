export const Navbar = () => {
  return (
    <header className="w-full p-4 bg-gray-900 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="font-bold text-lg">Bruno Romero</a>
        <div className="space-x-10">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#education-experience" className="hover:underline">Education & Experience</a>
          <a href="#references" className="hover:underline">References</a>
        </div>
        <div className="rounded bg-white text-black h-fit">
            <a href="#contact" className="p-5">Contact me</a>
        </div>
      </nav>
    </header>
  );
};