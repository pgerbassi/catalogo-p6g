import { Project } from '../../../types';
import CarouselItem from './CarouselItem';

type CarouselProps = {
  projects: Project[];
  currentIndex: number;
  onCardClick: (index: number) => void;
};

const Carousel = ({ projects, currentIndex, onCardClick }: CarouselProps) => {
  return (
    <div className="relative w-full lg:w-1/2 h-[200px] md:h-[350px] lg:h-[450px] flex items-center justify-center">
      {projects.map((project, index) => {
        const offset = index - currentIndex;
        return <CarouselItem key={project.id} project={project} offset={offset} onCardClick={() => onCardClick(index)} />;
      })}
    </div>
  );
};

export default Carousel;