
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  size: 'small' | 'medium' | 'large';
};

const projects: Project[] = [
  {
    id: 1,
    title: "Minimalist Interior",
    category: "DESIGN",
    description: "Clean lines and modern aesthetics define this minimalist interior design project.",
    image: "http://cdn.home-designing.com/wp-content/uploads/2017/11/patterned-rug-modern-chandelier-new-apartment.jpg",
    size: "large"
  },
  {
    id: 2,
    title: "Urban Photography",
    category: "PHOTOGRAPHY",
    description: "Street photography capturing the essence of urban life and architecture.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1244&auto=format&fit=crop",
    size: "medium"
  },
  {
    id: 3,
    title: "Digital Concept Art",
    category: "DIGITAL ART",
    description: "Futuristic concept art exploring themes of technology and humanity.",
    image: "https://wallpapercrafter.com/desktop/148340-digital-digital-art-artwork-painting-drawing-digital-painting-landscape-forest-nature-wood-Sun-sunset-sunrise-dusk-dark-trees-fantasy-art-fantasy-architecture-architec.jpg",
    size: "small"
  },
  {
    id: 4,
    title: "Typography Collection",
    category: "TYPOGRAPHY",
    description: "Experimental typography pushing the boundaries of readability and art.",
    image: "https://www.johnstevensdesign.com/wp-content/uploads/2018/06/Beatrice-pen-2.jpg",
    size: "medium"
  },
  {
    id: 5,
    title: "Abstract Painting",
    category: "PAINTING",
    description: "A series of abstract portraits exploring human emotions through color and shape.",
    image: "https://i.pinimg.com/originals/38/70/08/3870080e0fbd5e17493c92fd817ebc06.jpg",
    size: "large"
  },
  {
    id: 6,
    title: "Ceramic Collection",
    category: "SCULPTURE",
    description: "Handcrafted ceramic pieces that blend functionality with artistic expression.",
    image: "https://i.pinimg.com/736x/dc/22/8f/dc228f6e7c49217d4bbc339f0b503e5b--pottery-sculpture-sculpture-clay.jpg",
    size: "small"
  },
];

const categories = ['ALL', 'DESIGN', 'PHOTOGRAPHY', 'DIGITAL ART', 'TYPOGRAPHY', 'PAINTING', 'SCULPTURE'];

const ProjectGallery = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  
  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProjectImage = (project: Project) => {
    setSelectedProject(project);
    setIsImageVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectImage = () => {
    setIsImageVisible(false);
    document.body.style.overflow = ''; 
    setTimeout(() => setSelectedProject(null), 500); 
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              A curated selection of works that showcase aesthetic excellence and creative vision.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="outline" className="border-black gap-2 group">
              View All Projects 
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-12 overflow-x-auto pb-2 md:pb-0">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                filter === category 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`project-card ${
                project.size === 'large' 
                  ? 'md:col-span-2 md:row-span-2' 
                  : project.size === 'medium' 
                    ? 'md:col-span-2 lg:col-span-1' 
                    : ''
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="aspect-[4/3] object-cover"
              />
              <div className="project-overlay">
                <span className="text-sm font-medium text-white/80">{project.category}</span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mt-1 mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">{project.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-fit border-white text-black bg-white hover:bg-white/90 hover:text-black"
                  onClick={() => openProjectImage(project)}
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 ${
            isImageVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } transition-opacity duration-300`}
        >
          <div 
            className={`relative w-full max-w-6xl max-h-[90vh] ${
              isImageVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            } transition-all duration-500`}
          >
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 bg-white/10 text-white hover:bg-white/20 rounded-full" 
              onClick={closeProjectImage}
            >
              <X size={24} />
            </Button>
            <div className="absolute bottom-4 left-4 p-4 bg-black/50 text-white max-w-lg rounded-lg">
              <h3 className="text-2xl font-display font-bold">{selectedProject.title}</h3>
              <p className="mt-2 text-white/80">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;
