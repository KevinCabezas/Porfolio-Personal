import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'proyectos', 'habilidades', 'Sobre Mi', 'contacto'];
      const scrollPosition = window.scrollY + 100; // margen para detectar antes

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // detectar al cargar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (id) =>
    `border-b-2 transition-all ${hoveredSection === id
      ? 'border-purple-400 '
      : hoveredSection
        ? 'border-transparent'
        : activeSection === id
          ? 'border-purple-400 '
          : 'border-transparent'
    }`;

  return (
    // <div className="text-white p-3 bg-cyan-400/10 backdrop-blur-sm fixed top-2 left-2 right-2 w-full z-50 ">
    <div className="text-white p-3 bg-cyan-400/10 backdrop-blur-sm fixed top-2 left-2 right-2 z-50 rounded">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 bg-purple-400 rounded-md p-1 hover:animate-pulse">
          <img src="/retrato.jpg" alt="Kevin" className="h-7 w-7 rounded-full" />
          <span className="font-normal text-white">Kevin Cabezas</span>
        </a>

        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>

        <nav className={`md:flex gap-6 ${open ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          {['proyectos', 'habilidades', 'Sobre Mi', 'contacto'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={navLinkClass(id)}
              onMouseEnter={() => setHoveredSection(id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        <div className="flex justify-between items-center gap-2">
          <a href="#"><img src="/icons8-facebook-96.png" alt="" className="h-7 w-7 hover:animate-spin" /></a>
          <a href="#"><img src="/icons8-instagram-96.png" alt="" className="h-7 w-7 hover:animate-spin" /></a>
          <a href="#"><img src="/icons8-whatsapp-96.png" alt="" className="h-7 w-7 hover:animate-spin" /></a>
        </div>
      </div>
    </div>
  );
}
