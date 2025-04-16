
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#f7f7f7] -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#f0f0f0] rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#e8e8e8] rounded-full blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            All art is <span className="italic">aesthetic</span>
          </h1>
          <p className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            A curated portfolio showcasing beautiful projects with bold visions and meticulous execution.
          </p>
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button className="text-base px-8 py-6" size="lg" onClick={scrollToProjects}>
              View Projects
            </Button>
            <Button variant="outline" className="text-base px-8 py-6 border-black" size="lg" onClick={scrollToAbout}>
              <a href="#About.tsx">About Us</a>
            </Button>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToProjects}
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 border border-gray-300 rounded-full p-2 animate-bounce transition-opacity duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
