import Image from "next/image"
import Button from "../../common/Button"
import ListofServices from "./ListofServices";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  path: string;
}

interface ServiceElementProps {
  items: Service[];
}

function ServiceElement({ items }: ServiceElementProps) {

  useEffect(() => {
    ["servicessection"].forEach((className) =>
      animateElement(
        `.${className}`,
        { y: 200, opacity: 0, scale: 1 },
        { y: 0, scale: 1, opacity: 1 }
      )
    );
  });

  const animateElement = (
    selector: string,
    from: gsap.TweenVars,
    to: gsap.TweenVars
  ) => {
    const element = document.querySelector(selector);
    gsap.fromTo(
      element,
      { ...from },
      {
        ...to,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: getScrollTrigger(selector),
      }
    );
  };

  const getScrollTrigger = (trigger: string) => ({
    trigger,
    start: "top bottom",
    end: "top bottom",
    toggleActions: "play none none none",
    scrub: 1,
  });
  return (
    <div className="flex flex-wrap ">
      {items.map((item, index) => (
        <div key={index} className="flex flex-row sm:w-1/2 w-full h-[115px] lg:h-[180px] lg:px-[20px] px-[10px] sm:py-[10px] py-[5px] cursor-pointer">
          <div className="flex items-center justify-center bg-gray-100 w-full rounded-2xl ">
            <div className="w-2/6 px-6 flex justify-center">
              <div className="lg:w-[90px] w-[50px] lg:h-[90px] h-[50px] relative">
                <Image alt="Service icon" src={item.path} layout="fill" objectFit="contain" />
              </div>
            </div>
            <div key={item.id} className="flex align-left w-4/6 text-sm sm:text-base lg:text-xl font-medium ">{item.title}</div>
          </div>
        </div>
      ))}
    </div>


  )
}



export default function Services() {

  return (
    <div id="#services" className="servicessection  lg:mx-[100px] sm:mx-[50px] mx-[10px] flex flex-col rounded-t-[60px] bg-white shadow-2xl mt-[-50px] z-40 relative">
      <div className="mt-[70px] lg:mx-[70px] sm:mx-[50px] mx-[30px]">
        <h1 className="lg:text-[40px] sm:text-[32px] text-[17px] font-semibold">Our services and expertise</h1>
        <p className="lg:font-[20px] sm:text-[16px] text-[12px] text-gray-500">Offering a broad set of capabilities under one roof makes us a versatile partner to meet all your digital ambitions.</p>
      </div>
      <div className="lg:mx-[20px] sm:mx-[50px] mx-[20px] sm:my-[50px] my-[15px]">
        <div >
          <ServiceElement items={ListofServices} />
        </div>
      </div>
      <div className="flex items-center justify-center pt-2 mb-10">
        <Button navigate="/services" iconName="arrow" color="orange" link="See more" />
      </div>
    </div>
  )
}


