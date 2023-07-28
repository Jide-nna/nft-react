import React, {useState} from 'react';
import logo from "./images/logotipo.png"
import github from "./images/GitHub Logo.png"
import twitter from "./images/Twitter Logo.png"
import instagram from "./images/Frame.png"
import herointro from "./images/Hero.png"
import brands from "./images/Brands.png"
import avatar1 from "./images/Group 71.png"
import bidButton from "./images/Frame 7.png"
import avatar2 from "./images/Group 72 (1).png"
import spline1 from "./images/Spline 17.png"
import spline2 from "./images/Spline 18.png"
import spline3 from "./images/Spline 13.png"
import arrowleft from "./images/arrow-left.png"
import arrowright from "./images/Frame 74.png"
import communities from "./images/Frame 68.png"
import discord from "./images/icon-discord.svg"
import divider from "./images/Divider.png"
import clone1 from "./images/Clone X 11.png"
import clone2 from "./images/Clone X 9.png"
import clone3 from "./images/Clone X 10.png"
import clone4 from "./images/Clone X 7.png"
import clone5 from "./images/Clone X 6.png"
import Card from "./card";
import data from "./data";
import data2 from "./data2";
import Faq from "./faq";
import { gsap } from "gsap";
import SplitType from 'split-type'
import { TextPlugin } from 'gsap/TextPlugin';
import { useLayoutEffect, useRef, useEffect } from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default function App() {

  const ah = useRef()
  const ahh = useRef()
  const ahhh = useRef()
  const ahhhh = useRef()
  const ahhhhh = useRef()
  const brand = useRef()
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  const myText = useRef(new SplitType(".text"));
  const myDigital = new SplitType(".digital");
  const newShowCase =new SplitType(".showcase1")
  const newShowCase1 =new SplitType(".showcase2")
  const about =new SplitType(".avatar1_about")
  const aboutDesc =new SplitType(".avatar1_desc")
  const aboutTitle =new SplitType(".avatar1_title")
  const about1 =new SplitType(".avatar2_about")
  const aboutTitle1 =new SplitType(".avatar2_title")
  const aboutDesc1 =new SplitType(".avatar2_desc")
  const cardHeading =new SplitType(".card_heading")
  const cardTitle =new SplitType(".card_title")
  const faqTitle =new SplitType(".faq_title")
  const faqDesc =new SplitType(".faq_desc")
  const communityHeader =new SplitType(".community_header")
  const communityDesc =new SplitType(".community_desc")

  const [playAnimation, setPlayAnimation] = useState(false)
  useEffect(() => {
    
    let ctx = gsap.context(() => {
      gsap.to(".logo", { yPercent: 10,});
      gsap.from(".heroIntro", { xPercent: 10,});
      gsap.from(myText.words, {
        y: 100,
        opacity: 0,
        stagger: 0.01,
        scrollTrigger: {
          trigger: ".text",
          toggleActions: "play restart"
        }
 });
 gsap.from(myDigital.words, {
  y: 100,
  stagger: { 
   each: 0.01
  },
  scrollTrigger: ".digital",
 });
 gsap.from(newShowCase.words, {
  y: 100,
  stagger: { 
   each: 0.01
  },
  scrollTrigger: ".showcase1",
 })
 gsap.from(newShowCase1.words, {
  y: 100,
  stagger: { 
   each: 0.01
  },
  scrollTrigger: ".showcase2",
 })
 gsap.from(brand.current, {
  opacity:0, 
  duration: 5,
  })
  gsap.from(".avatar1", {
    yPercent: 100,
     opacity:0, 
     duration: 2,
     })
     gsap.from(about.letters, {
      y: 100,
      stagger: { 
       each: 0.01
      },
      scrollTrigger: ".avatar1_about",
     })
     gsap.from(aboutTitle.words, {
      y: 100,
      stagger: { 
       each: 0.01
      },
      scrollTrigger: ".avatar1_title",
     })
     gsap.from(aboutDesc.words, {
      y: 100,
      stagger: { 
       each: 0.01
      },
      scrollTrigger: ".avatar1_desc",
     })
     gsap.from("avatar1_contact", {
      yPercent: 100,
       opacity:0, 
       duration: 10,
       });
     gsap.from(".avatar2", {
      yPercent: 100,
       opacity:0, 
       duration: 2,
       })
       gsap.from(about1.letters, {
        y: 100,
        stagger: { 
         each: 0.01
        },
        scrollTrigger: ".avatar2_about",
       })
       gsap.from(aboutTitle1.words, {
        y: 100,
        stagger: { 
         each: 0.01
        },
        scrollTrigger: ".avatar2_title",
       })
       gsap.from(aboutDesc1.words, {
        y: 100,
        stagger: { 
         each: 0.01
        },
        scrollTrigger: ".avatar2_desc",
       })
       gsap.from(".avatar2_contact", {
        yPercent: 100,
         opacity:0, 
         duration: 2,
         })
         gsap.from(cardHeading.words, {
          y: 100,
          stagger: { 
           each: 0.01
          },
          scrollTrigger: ".card_heading",
         })
         gsap.from(cardTitle.words, {
          y: 100,
          stagger: { 
           each: 0.01
          },
          scrollTrigger: ".card_title",
         })
         gsap.from(faqTitle.words, {
          y: 100,
          stagger: { 
           each: 0.01
          },
          scrollTrigger: ".faq_title",
         })
         gsap.from(faqDesc.words, {
          y: 100,
          stagger: { 
           each: 0.01
          },
          scrollTrigger: ".faq_desc",
         })
         gsap.from(communityHeader.words, {
          y: 100,
          stagger: { 
           each: 0.01
          },
          scrollTrigger: ".community_header",
         })
         gsap.from(communityDesc.words, {
          y: 100,
          stagger: { 
           each: 0.01
          },
          scrollTrigger: ".community_desc",
         })
    }, );
   {/* const onPageLoad = () => {
      setPlayAnimation(true)
    };
    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    } */}
    return () => ctx.revert();
  }, []);

 useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let imageAnimation = gsap.timeline();
      imageAnimation.from(".characters", {duration: 0.1, xPercent: 1000, yPercent: -100, });
      imageAnimation.from(ah.current, {xPercent: 1000, yPercent: -100, })
      imageAnimation.from(ahh.current, {xPercent: 1000, yPercent: -100, })
      imageAnimation.from(ahhh.current, {xPercent: 1000, yPercent: -100, })
      imageAnimation.from(ahhhh.current, {xPercent: 1000, yPercent: -100, })
      imageAnimation.from(ahhhhh.current, {xPercent: 1000, yPercent: -100, })
    },);
    return () => ctx.revert();
  }, []);  
   
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  const faq = data2.map((items) => {
    return <Faq key={items.id} {...items} />
  })
  return (
<>

<section className=" {myAnimation: playAnimation} bg-main py-4 0 text-white w-4/4 inter text-center overflow-hidden">
<header className='header flex gap-4 fixed bg-main h-8'>
  <div>
    <img src={logo} alt="nft logo" className='logo ml-24'/>
  </div>
  <p className=" words text-white flex">
    Cryptoart</p>
  <nav className="nav uppercase">
    <ul className="flex gap-8 items-center ml-64 font-bold text-sm font-inter normal leading-6">
      <li><a href="#">home</a></li>
      <li><a href="#">about</a></li>
      <li><a href="#">characters</a></li>
      <li><a href="#">faq</a></li>
      <li><a href="#">community</a></li>
    </ul>
  </nav>
  <div className=" contact flex ml-64 gap-4">
    <img src={github} alt="Github Logo" className="w-4 h-4" />
    <img src={twitter} alt="Twitter Logo" className="w-4 h-4" />
    <img src={instagram} alt="Instagram Logo" className="w-4 h-4" />
  </div>
</header>
<div className="heroIntro inline-flex flex-col items-center gap-7 mt-12">
  <img src={herointro} alt=""/>
  <h3 className="text flex w-3/5 items-center text-7xl font-bold leading-none overflow-hidden"
  ref={myText}>
    
  Discover and collect super rare NFTs</h3>
  <p className="flex digital w-3/5 items-center text-3xl font-normal leading-6 non-italic overflow-hidden">
  Digital marketplace for crypto collectibles and NFTs. Buy, sell, and discover exclusive digital assets today. </p>
  <button>
    <p className="font-normal font-bold uppercase text-black ">connect wallet</p>
  </button>
  <section className="charaters flex gap-0">
  <img src={clone1} alt="" className='w-64 h-64 shrink-0 mt-32 relative left-44' ref={ah}/>
  <img src={clone2} alt="" className='w-64 h-64 shrink-0 mt-32 relative left-20 z-10' ref={ahh}/>
  <img src={clone3} alt="" className='w-96 h-96 shrink-0 relative right-10 z-30' ref={ahhh}/>
  <img src={clone4} alt="" className='w-64 h-64 shrink-0 mt-32 relative right-44 z-10' ref={ahhhh}/>
  <img src={clone5} alt="" className='w-64 h-64 shrink-0 mt-32 relative right-64' ref={ahhhhh}/>
  </section>
</div>
 <section className="brands w-4/4" ref={brand}>
  <img src={brands}alt="" />
  </section>
  <section className="about py-28 px-48 text-center w-5/5 items-center">
    <div className=" text-center ml-44 w-5/5 items-center mb-16">
      <h3 className=" showcase1 flex w-4/5 font-bold text-4xl inter leading-0 text-center">A new wave of collectibles is about to hit the blockchain.</h3>
      <p className="showcase2 font-normal text-2xl w-5/6 leading-0 not-italic text-center flex">Characterised by soft lighting, vintage colour schemes and quirky costumes, these generative 3D TinyFaces are the addition to your NFT collection you’ve been waiting for.</p>
    </div>
    <div className=" grid grid-cols-2 gap-12">
      <div>
      <img src={avatar1} alt="" className=" avatar1 w-5/5 mb-24 "/>
      </div>
      <div className="mt-28 text-left">
      <h4 className=" avatar1_about flex w-4/5 text-pink Roboto font-normal font-bold text-2xl">About</h4>
      <h3 className="avatar1_title flex w-5/5 Roboto font-normal font-bold text-4xl">
      Thousands of unique NFTs
      </h3>
      <p className="avatar1_desc w-3/4 inter font-normal text-base not-italic">Each character is entirely unique and is generated by combining attributes such as colour palettes, skin tones, facial traits, outfits and accessories. With nearly endless combinations, all characters are guaranteed to be one of a kind.</p>
      <img src={bidButton} alt="" className="avatar1_contact mt-4 w-3/5"/>
      </div>
      <div className="mt-28 col-span-1 text-left">
      <h4 className=" avatar2_about flex w-4/5 flex-col text-pink Roboto font-normal font-bold text-2xl">About</h4>
      <h3 className="avatar2_title flex w-4/5 Roboto font-normal font-bold text-4xl">
      Secure the most rare
      </h3>
      <p className="avatar2_desc flex w-3/4 inter font-normal text-base not-italic">Even though no two Tinyfaces will ever be the same, some variations are rarer than others. Watch out for special accessories and raw materials - the rarer the attributes, the rarer your character will be.</p>
      <img src={bidButton} alt="" className="avatar2_contact mt-4 w-3/5"/>
      </div>
      <div>
      <img src={avatar2} alt="" className="avatar2 w-5/5 mb-24 col-span-1"/>
      </div>
    </div>
  </section>
  <section className="effect inline-flex text-left">
    <img src={spline1} alt="" className="w-6/6 h-40"/>
    <img src={spline3} alt="" className="w-4/5 h-40"/>
    <img src={spline2} alt="" className="w-6/6 h-40" />
  </section>
  <section className="nfts p-28">
    <div className="flex gap-12">
    <div>
      <h5 className="card_heading text-pink2 text-2xl non-italic font-bold leading-7 text-left">Find your</h5>
      <p className="card_title text-4xl non-italic font-bold leading-7">Favourite character</p>
    </div>
    <div className="flex gap-4 items-end w-4/4 ">
      <img src={arrowleft} className="w-4/5 h-7" alt="" />
      <img src={arrowright} className="w-4/5 h-7" alt="" />
    </div>
    </div>
<div className="card-list flex gap-4 mt-8">
    {cards}
    </div>
    </section>
    <section className="faq inline-flex flex-col items-center gap-24 w-full">
      <div className="divider">
        <hr />
      </div>
      <div className="faq-header flex flex-col items-center gap-11">
        <h3 className=" faq_title text-pink2 text-center text-3xl non-italic font-bold leading-1">FAQ</h3>
        <p className="faq_desc font-bold non-italic text-4xl leading-1">Your questions, answered.</p>
      </div>
      <div className="questions flex flex-col gap-4 items-start">
        {faq}
      </div>
    </section>
    <section className="community inline-flex flex-col items-center gap-10">
      <div>
        <img src={herointro} alt="" className=" heroIntro w-9 h-16"/>
      </div>
      <h3 className="community_header text-white inter font-bold non-italic text-4xl leading-10">Join the community</h3>
      <p className="community_desc w-80 text-white text-center inter non-italic text-base font-normal leading-6">Join our Discord channel or follow us on Twitter keep up to date with our latest work and announcements.</p>
      <img src={communities} alt="" />
  
    <section className="connect flex items-start gap-5">
      <div className="discord flex w-60 py-6 px-10 justify-center items-center gap-2.5 rounded-full bg-discord">
        <img src={discord} alt="" className="discord_image w-5 h-5 shrink-0"/>
        <p className="discord_text text-white text-base non-italic font-bold uppercase leading-1">join discord</p>
      </div>
      <div className="twitter flex w-60 py-6 px-10 justify-center items-center gap-2.5 rounded-full bg-twitter">
        <img src={twitter} alt="" className="twitter_image w-5 h-5 shrink-0"/>
        <p className="twitter_text text-white text-sm non-italic font-bold uppercase leading-1 ">follow twitter</p>
      </div>
    </section>
    </section>
<footer className="flex flex-col items-start mt-4">
  <div>
    <img src={divider} alt="" />
  </div>
  <div className="flex items-center">
    <img src={logo} alt="" />
    <p className="text-white font-extrabold text-2xl leading-3">Cryptoart</p>
  </div>
  <p>© 2023 JIDE-NNA | Made with ❤️</p>
</footer>
</section>
</>
  )
}

