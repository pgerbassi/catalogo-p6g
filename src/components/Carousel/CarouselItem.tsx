import { Project } from '@/types';

type CarouselItemProps = {
  project: Project;
  offset: number;
  onCardClick: () => void;
};

const CarouselItem = ({ project, offset, onCardClick }: CarouselItemProps) => {
  const isActive = offset === 0;

  const style = {
    transform: `translateX(${offset * 55}%) scale(${isActive ? 1 : 0.8})`,
    opacity: Math.abs(offset) < 2 ? 1 : 0,
    zIndex: 10 - Math.abs(offset),
    transition: 'all 0.5s ease-out',
  };

  const imageContainerClasses = `relative w-full max-w-sm md:h-full lg:h-full h-[500px] mx-auto transition-all duration-500 ease-out ${isActive ? 'p-1' : 'p-0'} rounded-2xl cursor-pointer`;
  const activeGlowClasses = isActive ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-[0_0_2rem_-0.5rem_#3b82f6,0_0_2rem_-0.5rem_#9333ea]' : '';

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center" style={style} onClick={onCardClick}>
      <div className={`${imageContainerClasses} ${activeGlowClasses}`}>
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-xl bg-black" />
      </div>
    </div>
  );
};

export default CarouselItem;