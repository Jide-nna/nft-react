import React from "react";
import ReactDOM from "react-dom/client"
import plus from "./images/Plus.png"
import { gsap } from "gsap";
import SplitType from 'split-type'
import { useLayoutEffect, useRef, } from "react";

export default function Faq(props) {
    const newShowCase =new SplitType(".faq_questions")
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let textAnimation = gsap.timeline();
 textAnimation.from(newShowCase.words, {
  y: 100,
  stagger: { 
   each: 0.01
  },
  scrollTrigger: ".faq_questions",
 });
    },);
    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // or refs
      gsap.from(".faq_image", {
        yPercent: 100,
         opacity:0, 
         duration: 2,
         });
    },);
    
    return () => ctx.revert();
  }, []);  return (
        <div className="faq-question flex py-5 px-6 items-center bg-new rounded-lg gap-64 w-full">
            <p className="faq_questions text w-11/12 text-white Roboto non-italic font-bold text-lg leading-7 text-left">
            {props.text}
            </p>
            <img src={`${props.coverImg}`} className="faq-image h-8 w-8" alt={props.title} />
        </div>
    )
}