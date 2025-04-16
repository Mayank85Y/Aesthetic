
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#f7f7f7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              The Aesthetic<br />Philosophy
            </h2>
            <div className="space-y-6 text-lg">
              <p>
                Aesthetic is founded on the belief that the visual language of design 
                transcends mere functionality. It is a space where art and purpose converge, 
                where every line, shape, and pixel is intentionally placed.
              </p>
              <p>
                Our approach balances minimalist principles with bold experimentation, 
                creating work that resonates on both intellectual and emotional levels.
              </p>
              <div className="pt-4">
                <Button className="gap-2 group">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square relative z-10 overflow-hidden rounded-lg">
              <img 
                src="https://funmauj.b-cdn.net/test/536418.jpg" 
                alt="Aesthetic workspace" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-64 h-64 border-8 border-white rounded-full -z-10"></div>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-48 h-48 bg-gray-200 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
