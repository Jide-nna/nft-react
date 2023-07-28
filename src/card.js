import React from "react";
import ReactDOM from "react-dom/client"
import { gsap } from "gsap";
import SplitType from 'split-type'
import { useLayoutEffect, useRef, } from "react";

export default function Card(props) {
    const newShowCase =new SplitType(".card_order")
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let textAnimation = gsap.timeline();
 textAnimation.from(newShowCase.words, {
  y: 100,
  stagger: { 
   each: 0.01
  },
  scrollTrigger: ".card_order",
 });
    },);
    return () => ctx.revert();
  }, []);
  const newShowCase1 =new SplitType(".card_title")
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let textAnimation = gsap.timeline();
 textAnimation.from(newShowCase1.words, {
  y: 100,
  stagger: { 
   each: 0.01
  },
  scrollTrigger: ".card_title",
 });
    },);
    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // or refs
      gsap.from(".card_image", {
        yPercent: 100,
         opacity:0, 
         duration: 2,
         });
    },);
    return () => ctx.revert();
  }, []);
  
  const newShowCase3 =new SplitType(".card_time")
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let textAnimation = gsap.timeline();
 textAnimation.from(newShowCase3.words, {
  y: 100,
  stagger: { 
   each: 0.01
  },
  scrollTrigger: ".card_time",
 });
    },);
    return () => ctx.revert();
  }, []);
  const newShowCase4 =new SplitType(".card_time_text")
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let textAnimation = gsap.timeline();
 textAnimation.from(newShowCase4.words, {
  y: 100,
  stagger: { 
   each: 0.01
  },
  scrollTrigger: ".card_time_text",
 });
    },);
    return () => ctx.revert();
  }, []);
  
  const newShowCase5 =new SplitType(".card_price")
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let textAnimation = gsap.timeline();
 textAnimation.from(newShowCase5.words, {
  y: 100,
  stagger: { 
   each: 0.01
  },
  scrollTrigger: ".card_price",
 });
    },);
    return () => ctx.revert();
  }, []);
  const newShowCase6 =new SplitType(".card_bidder")
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let textAnimation = gsap.timeline();
 textAnimation.from(newShowCase6.words, {
  y: 100,
  stagger: { 
   each: 0.01
  },
  scrollTrigger: ".card_bidder",
  yoyo: true,
 });
    },);
    return () => ctx.revert();
  }, []);
  
  
    return(
        <div className="card-section py-6 px-5 flex-col items-start rounded-3xl" >
            <div className="header flex">
                <p className="card_order text-3xl text-center non-italic font-bold">{props.order}.</p>
                <p className="card_title text-xl font-normal non-italic mt-2">{props.title}</p>
            </div>
            <img src={`${props.coverImg}`} className="card-image mt-4 h-60 w-60" alt={props.title} />
            <div className="flex gap-16 mt-4">
                <div className="left flex-col text-left">
                    <h3 className="card_time non-italic font-normal text-base ">{props.time}</h3>
                    <p className="card_time_text text-xs non-italic font-normal text-card">{props.timeText}</p>
                </div>
                <div className="right flex-col text-right">
                <h3 className=" card_price text-wong font-bold non-italic text-base">{props.price}</h3>
                    <p className="card_bidder text-xs non-italic font-normal text-card">{props.bidder}</p>
                </div>
            </div>
            
        </div>
    )
}