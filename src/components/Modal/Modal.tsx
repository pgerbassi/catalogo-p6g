import { useEffect } from 'react';
import CloseIcon from '../../assets/icons/CloseIcon';
import { Project } from '../../types';

type ModalProps = {
  project: Project;
  onClose: () => void;
};

const Modal = ({ project, onClose }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#1a1a1c] rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-6">{project.description}</p>
          </div>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full"
          >
            Veja o Projeto
          </a>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
        aria-label="Close modal"
      >
        <CloseIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Modal;