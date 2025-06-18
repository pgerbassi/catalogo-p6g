// src/hooks/useCarousel.ts
import { useCallback, useState } from 'react';

export const useCarousel = (itemCount: number, initialIndex: number = 0) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount);
  }, [itemCount]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
  }, [itemCount]);

  return {
    currentIndex,
    setCurrentIndex,
    handlePrev,
    handleNext,
  };
};