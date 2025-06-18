import { useMemo, useState } from 'react';
import ArrowIcon from './assets/icons/ArrowIcon';
import Ballpit from './assets/icons/Ballpit';
import GlitchText from './assets/icons/GlitchText';
import Carousel from './components/Carousel';
import Modal from './components/Modal';
import { projectsData } from './data/projects';
import { useCarousel } from './hooks/useCarousel';
import { Project } from './types';

const App = () => {
  const { currentIndex, setCurrentIndex, handlePrev, handleNext } = useCarousel(projectsData.length, 1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCloseModal = () => setSelectedProject(null);

  const handleCardClick = (index: number) => {
    if (index === currentIndex) {
      setSelectedProject(projectsData[index]);
    } else {
      setCurrentIndex(index);
    }
  };
  
  // useMemo é ótimo aqui para evitar recalcular a cada renderização
  const currentProject = useMemo(() => projectsData[currentIndex], [currentIndex]);

  return (
    <div className="bg-[#0D0D0F] text-white font-sans min-h-screen overflow-hidden min-w-screen flex flex-col justify-between p-4 sm:p-6 lg:p-8">
      <div className='absolute inset-0 opacity-30 z-0' style={{ minHeight: '500px', maxHeight: '100%', width: '100%'}}>
  <Ballpit
    count={100}
    gravity={0.7}
    friction={0.8}
    wallBounce={0.95}
    followCursor={true}
  />
</div>
      {/* Header Section */}
      <header className="w-full flex lg:justify-between justify-center">
        <div>
          <h1 className="text-xl md:text-xl font-bold hidden lg:block">Pablo Gerbassi</h1>
        </div>
        <div className='lg:mt-0 mt-10'>
          <GlitchText speed={2} enableShadows={true} enableOnHover={false} className=''>Catálogo</GlitchText>
        </div>
        <div className="text-sm font-light text-gray-300 hidden lg:block">
          <span>Português</span>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-white font-medium">English</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center space-y-12 md:space-y-16">
        <Carousel projects={projectsData} currentIndex={currentIndex} onCardClick={handleCardClick} />
      </main>
      
      {/* Footer / Navigation Section */}
      <footer className="w-full flex flex-col items-center justify-center space-y-6 z-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-500 text-stroke-1 text-stroke-black">{currentProject.title}
          </h1>
          <p className="text-white mt-2">{currentProject.subtitle}</p>
        </div>
        <div className="flex items-center space-x-6">
          <button onClick={handlePrev} className="p-3 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors" aria-label="Previous project">
            <ArrowIcon className="transform rotate-180" />
          </button>
          <button onClick={handleNext} className="p-3 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors" aria-label="Next project">
            <ArrowIcon />
          </button>
        </div>
      </footer>
      
      {/* Render Modal conditionally */}
      {selectedProject && <Modal project={selectedProject} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;