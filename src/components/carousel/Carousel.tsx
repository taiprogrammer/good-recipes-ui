import { useKeenSlider } from "keen-slider/react";
import { Slide, Slider, Wrapper } from "@/app/styles/components/Carousel";
import { useState } from "react";
import Arrow from "./Arrow";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import ImageOne from "../../assets/carousel/food-one.jpg";
import ImageTwo from "../../assets/carousel/food-two.jpg";

export default function Carousel() {
  const [slideRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <Wrapper className="navigation-wrapper">
      <Slider ref={slideRef} className="keen-slider">
        <Slide className="keen-slider__slide">
          <Image src={ImageOne} height={600} width={1000} alt="" />
        </Slide>
        <Slide className="keen-slider__slide">
          <Image src={ImageTwo} height={600} width={1000} alt="" />
        </Slide>
        <Slide className="keen-slider__slide">3</Slide>
        <Slide className="keen-slider__slide">4</Slide>
        <Slide className="keen-slider__slide">5</Slide>
        <Slide className="keen-slider__slide">6</Slide>
      </Slider>
    </Wrapper>
  );
}
