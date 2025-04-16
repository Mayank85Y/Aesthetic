
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-display font-bold">
          aesthetic
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#projects" className="relative text-sm font-medium bold-stroke">Projects</a>
          <a href="#about" className="relative text-sm font-medium bold-stroke">About</a>
          <a href="#contact" className="relative text-sm font-medium bold-stroke">Contact</a>
          <Button variant="outline" className="ml-4 border-black text-black hover:bg-black hover:text-white">
             <a href="#contact">Get In Touch</a>
          </Button>
        </nav>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4 px-2 py-4">
            <a href="#projects" className="text-lg font-medium px-4 py-2 hover:bg-gray-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#about" className="text-lg font-medium px-4 py-2 hover:bg-gray-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="text-lg font-medium px-4 py-2 hover:bg-gray-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button className="w-full mt-2" onClick={() => setIsMenuOpen(false)}>
              Get In Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
