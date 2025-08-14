import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ArrowAnimation = () => {
  const svgRef = useRef(null);
  const arrow1Ref = useRef(null);
  const arrow2Ref = useRef(null);

useGSAP(() => {
  requestAnimationFrame(() => {
    const arrow1Length = arrow1Ref.current?.getTotalLength() || 0;
    const arrow2Length = arrow2Ref.current?.getTotalLength() || 0;

    console.log("Arrow1 Length:", arrow1Length);
    console.log("Arrow2 Length:", arrow2Length);

    gsap.set(svgRef.current, { fill: 'transparent', autoAlpha: 0 });

    gsap.set(arrow1Ref.current, {
      strokeDasharray: arrow1Length,
      strokeDashoffset: arrow1Length,
    });

    gsap.set(arrow2Ref.current, {
      strokeDasharray: arrow2Length,
      strokeDashoffset: arrow2Length,
    });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(svgRef.current, { autoAlpha: 1, duration: 0.1 })
      .to([arrow1Ref.current, arrow2Ref.current], {
        duration: 2,
        delay: 1,
        strokeDashoffset: 0,
      })
      .to(svgRef.current, {
        duration: 0.5,
        delay: 0.5,
        fill: '#ffffff66',
      })
      .to(svgRef.current, {
        duration: 1,
        y: 300,
      })
      .to(svgRef.current, {
        duration: 0,
        autoAlpha: 0,
        y: 0, // reset position
      });
  });
}, []);


  return (
    <svg
      id="banner-arrow-svg"
      width="376"
      height="111"
      viewBox="0 0 376 111"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 "
      ref={svgRef}
    >
      <path
        className="svg-arrow"
        d="M1 1V39.9286L188 110V70.6822L1 1Z"
        stroke="#737373"
        ref={arrow1Ref}
      />
      <path
        className="svg-arrow"
        d="M375 1V39.9286L188 110V70.6822L375 1Z"
        stroke="#737373"
        ref={arrow2Ref}
      />
    </svg>
  );
};

export default ArrowAnimation;
