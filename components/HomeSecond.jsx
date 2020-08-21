import { useState } from "react";
import { isMobile } from "../helpers/functions";
import FadeWithScroll from "./HOC/FadeWithScroll";
import AnimatedBlackMiddleLine from "./TextEffects/AnimatedBlackMiddleLine";

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
          color: #;
          flex-direction: column;
          padding: 5rem 1rem;
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
            padding: 2.5rem 1rem;
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
          <AnimatedBlackMiddleLine
            // firstLine={}
            id="first-blackMiddle"
            blackLine="Develop"
            lastLine="Apps"
            startAnimation={isVisible || isMobile()}
          />
          <AnimatedBlackMiddleLine
            id="second-blackMiddle"
            blackLine="Design"
            lastLine="Websites"
            startAnimation={isVisible || isMobile()}
            delay={150}
          />
          <AnimatedBlackMiddleLine
            id="third-blackMiddle"
            blackLine="Build"
            lastLine="The Future"
            startAnimation={isVisible || isMobile()}
            delay={200}
          />
        </div>
      </div>
    </>
  );
}
