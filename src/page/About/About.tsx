import "./about.scss";
import LayerAllday from "../../assets/LayerAllday.svg";
import LayoutAbout from "../../assets/LayoutAbout.svg";
import LayerStart from "../../assets/LayerStart.svg";
import BackgroundEffeect from "../../assets/BackgroundEffeect.svg";
import React, { useRef, useEffect } from "react";
import { Element, Link } from "react-scroll";
import Splitting from "splitting";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const About = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const playerRef: any = useRef(null);
  const HeroRef = useRef<HTMLDivElement>(null);
  const textRef: any = useRef(null);
  const contentRef: any = useRef(null);
  const VIDEO_PATH = "https://youtu.be/tliX9MC3JgY";
  document.cookie =
    "PREF=value; domain=.youtube.com; path=/; SameSite=None; Secure";
  useEffect(() => {
    if (
      textRef &&
      textRef.current &&
      contentRef &&
      contentRef.current &&
      playerRef &&
      playerRef.current
    ) {
      const results = Splitting({ target: textRef.current, by: "words" });
      const words = textRef.current.querySelectorAll(".word");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: playerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 3,
        },
      });

      words.forEach((word: HTMLElement, index: number) => {
        tl.fromTo(
          word,
          { opacity: 0.5 },
          {
            opacity: 1,
            // duration: 10,
            // ease: "power4.out",
          }
        );
      });
    }
  }, [textRef, contentRef, playerRef]);

  return (
    <>
      <Element name="element1">
        <div className="section hero-section" ref={HeroRef} id="About">
          {/* <div className="about-header">
            <div className="container">
              <div className="img-about">
                <img src={LayerAllday} />
              </div>
              <div className="navbar-about">
                <ul>
                  <li>
                    <Link
                      to="element1"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <p className="text-24-500" style={{ cursor: "pointer" }}>
                        About
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="element2"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <p className="text-24-500" style={{ cursor: "pointer" }}>
                        Ecosystem
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="element3"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <p className="text-24-500" style={{ cursor: "pointer" }}>
                        Network
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="element4"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <p className="text-24-500" style={{ cursor: "pointer" }}>
                        What We do
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="container">
            <div className="banner-hero">
              {/* <ReactPlayer
                ref={playerRef}
                url={VIDEO_PATH}
                controls={false}
                loop
                playing={true}
                width="100%"
                height="100%"
                style={{ borderRadius: "30px" }}
              /> */}
              <video
                width="100%"
                height="100%"
                style={{ borderRadius: "30px" }}
                autoPlay={true}
                muted
                playsInline
                loop
              >
                <source
                  src={require("../../assets/video.mp4")}
                  // src={V}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="banner-title" style={{ borderRadius: "8px" }}>
              <div className="image-banner">
                <img src={LayerAllday} />
                <img src={BackgroundEffeect} className="effect" />
              </div>
              <div className="title-banner-hero">
                <div className="title-top">
                  <p className="text-45">It’s beyond a media network</p>
                  <img src={LayerStart} className="start" />
                </div>
                <div className="title-bottom">
                  <p className="text-18">
                    By enabling the seamless development and distribution of
                    creative ideas across all blockchains, our objective is to
                    build a more open world of Web3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <div className="section about-section " ref={elementRef} id="Network">
        <div className="sticky">
          <div className="line"></div>
          <div className="container">
            <div className="about-content" ref={playerRef}>
              <div className="image-about">
                <img src={LayoutAbout} />
              </div>
              <div className="content" ref={contentRef}>
                <p className="text-40" ref={textRef} id="text-container">
                  The Allday Foundation was founded with a vision of bringing
                  up-to-date crypto information to millions of Web2 users and
                  connecting innovative Web3 builders.
                </p>
              </div>
              <div className="marquee-w">
                <div className="marquee">
                  <span className="text-18-500">
                    Allday. Foundation Allday. Foundation Allday. Foundation
                  </span>
                </div>
                <div className="marquee marquee2">
                  <span className="text-18-500">
                    Allday. Foundation Allday. Foundation Allday. Foundation
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="line-bot"></div>
        </div>
      </div>
    </>
  );
};
export default About;
