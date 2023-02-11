import React, { useState } from "react";
import { StyledDot, StyledSlider } from "./Slider.style";

type Props = {
  image: (string | undefined)[];
};

function Slider(props: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.image.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === props.image.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <StyledSlider slidePath={props.image[currentIndex]}>
      <div>
        <button onClick={previousSlide}>&lsaquo;</button>
        <button onClick={nextSlide}>&rsaquo;</button>
      </div>
      <div>
        {props.image.map((item, index) => (
          <StyledDot
            onClick={() => setCurrentIndex(index)}
            key={index}
            activeSlide={index === currentIndex}
          ></StyledDot>
        ))}
      </div>
    </StyledSlider>
  );
}

export default Slider;
