import { useState } from "react";
import { isMobile } from "../helpers/functions";
import FadeWithScroll from "./HOC/FadeWithScroll";
import AnimatedBlackMiddleLine from "./TextEffects/AnimatedBlackMiddleLine";
import CrazyBorder from "./HOC/CrazyBorder";

export default function HomeSecond(props) {
  const [isVisible, setVisible] = useState(false);

  const handleServiceTitleEnter = () => {
    setVisible(true);
  };

  return (
    <>
      <style jsx>{`
        .content-home-second {
          background: #f2f2f2;
          flex-direction: column;
          padding: 5rem 1rem;
          padding-bottom: 150px;
          font-family: "Queental";
          justify-content: center;
          align-items: center;
        }
        .services-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
        }
        .content-home-second .content-title {
          margin-bottom: 5rem;
          transition-delay: 0.25s;
          transition: opacity 0.6s ease-in;
        }
        @media (max-width: 991px) {
          .content-home-second {
            padding-top: 2.5rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .content-home-second .content-title {
            margin-bottom: 2rem;
          }
          .services-container {
            flex-direction: column;
          }
        }
      `}</style>
      <div className="content content-home-second after-intro">
        <FadeWithScroll
          onEnter={handleServiceTitleEnter}
          id="services-title"
          targetSelector={"h2.content-title"}
        >
          <h2 className="content-title">OUR SERVICES</h2>
        </FadeWithScroll>
        <div className="services-container">
          <CrazyBorder id="service-cb-1">
            <img src="/images/icons/apps-black.png" width="80px" />
            <AnimatedBlackMiddleLine
              // firstLine={}
              id="first-blackMiddle"
              blackLine="Develop"
              lastLine="Apps"
              startAnimation={isVisible || isMobile()}
            />
          </CrazyBorder>
          <CrazyBorder id="service-cb-2">
            <img src="/images/icons/web-black.png" width="80px" />
            <AnimatedBlackMiddleLine
              id="second-blackMiddle"
              blackLine="Design"
              lastLine="Websites"
              startAnimation={isVisible || isMobile()}
              delay={150}
            />
          </CrazyBorder>
          <CrazyBorder id="service-cb-3">
            <img src="/images/icons/future-black.png" width="80px" />
            <AnimatedBlackMiddleLine
              id="third-blackMiddle"
              blackLine="Build"
              lastLine="The Future"
              startAnimation={isVisible || isMobile()}
              delay={200}
            />
          </CrazyBorder>
        </div>
      </div>
    </>
  );
}
