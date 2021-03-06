import { useState } from "react";
import { isMobile } from "../helpers/functions";
import FadeWithScroll from "./HOC/FadeWithScroll";
import AnimatedBlackMiddleLine from "./TextEffects/AnimatedBlackMiddleLine";
import CrazyBorder from "./HOC/CrazyBorder";
import ClassWithScroll from "./HOC/ClassWithScroll";
import config from "../site.config";

export default function HomeServices(props) {
  const [isVisible, setVisible] = useState(false);

  const handleServiceTitleEnter = () => {
    setVisible(true);
  };
  const updateServicesIcon = (elementId, scrollY, speed) => {
    if (scrollY < 65) {
      return (document.querySelector(elementId).style.transform = "scale(1)");
    }
    const scrollValues = {
      atEnter: 104,
      atFull: 65,
    };
    const scaleValues = {
      atEnter: 200,
      atFull: 100,
    };
    const newScale =
      scaleValues.atEnter / 100 -
      ((scrollValues.atFull / scrollY) * scaleValues.atFull) / 100;

    document.querySelector(elementId).style.transform =
      "scale(" + newScale + ")";
  };
  return (
    <>
      <style jsx>{`
        .content-home-second {
          background: ${config.colors.ourServices.bg};
          color: ${config.colors.ourServices.fg};
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
            <ClassWithScroll
              id="first-services-icon"
              updateRule={updateServicesIcon}
              targetSelector="img"
            >
              <img src="/images/icons/apps-blue.png" width="80px" />
            </ClassWithScroll>
            <AnimatedBlackMiddleLine
              textColor={"#000060"}
              bgColor="#000060"
              // firstLine={}
              id="first-blackMiddle"
              blackLine="Develop"
              lastLine="Apps"
              startAnimation={isVisible || isMobile()}
            />
          </CrazyBorder>
          <CrazyBorder id="service-cb-2">
            <ClassWithScroll
              id="second-services-icon"
              updateRule={updateServicesIcon}
              targetSelector="img"
            >
              <img src="/images/icons/web-blue.png" width="80px" />
            </ClassWithScroll>
            <AnimatedBlackMiddleLine
              textColor={"#000060"}
              bgColor="#000060"
              id="second-blackMiddle"
              blackLine="Design"
              lastLine="Websites"
              startAnimation={isVisible || isMobile()}
              delay={150}
            />
          </CrazyBorder>
          <CrazyBorder id="service-cb-3">
            <ClassWithScroll
              id="third-services-icon"
              updateRule={updateServicesIcon}
              targetSelector="img"
            >
              <img src="/images/icons/future-blue.png" width="80px" />
            </ClassWithScroll>
            <AnimatedBlackMiddleLine
              textColor={"#000060"}
              bgColor="#000060"
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
