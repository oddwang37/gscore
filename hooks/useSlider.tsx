import { useState, useEffect } from 'react';
import _ from 'lodash';

import { useAppDispatch } from 'state/store';
import { Subscribes } from 'state/ducks/subscribes/types';
import { clearSelectedCodes } from 'state/ducks/codes';

export const useSlider = (
  subscribes: Subscribes,
  initialSlideIndex: number,
  slideWidth: number,
  changeSelectMode: (val: boolean) => void,
) => {
  const dispatch = useAppDispatch();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currentTranslate, setCurrentTranslate] = useState<number>(0);

  const nextSlide = () => {
    if (currentSlide !== subscribes.length - 1) {
      setCurrentSlide((prev) => ++prev);
    }
  };

  const prevSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide((prev) => --prev);
    }
  };

  const isCurrentSlideContainsHolds = () =>
    subscribes[currentSlide] &&
    _.some(subscribes[currentSlide].codes, (code) => code.status === 'HOLD');

  useEffect(() => {
    setCurrentTranslate(-1 * currentSlide * (slideWidth + 28));
    changeSelectMode(false);
    if (isCurrentSlideContainsHolds()) {
      changeSelectMode(true);
    }
    dispatch(clearSelectedCodes());
  }, [currentSlide]);

  useEffect(() => {
    setCurrentSlide(initialSlideIndex);
  }, []);

  return { nextSlide, prevSlide, currentSlide, currentTranslate };
};
