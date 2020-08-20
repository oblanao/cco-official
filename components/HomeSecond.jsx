import { useState, useEffect } from "react";
import { BlackMiddleLine } from "./TextEffects";
import VisibilitySensor from "react-visibility-sensor";
import { vh, isMobile } from "../helpers/functions";

export default function HomeSecond(props) {
  const [topOffset, setOffset] = useState(0);
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    console.log("isMobile? ", isMobile());
    const offset = isMobile() ? 0 : 350;
    console.log(offset);
    setOffset(offset);
  }, []);
  const handleScroll = (isVisible) => {
    console.log("ande");
    if (isVisible) {
      const el = document.querySelector(".content-title");
      el.classList.remove("opacity-0");
      setVisible(true);
    }
  };
  return (
    <>
      <style jsx>{`
        .content-home-second {
          background: #f2f2f2;
          color: black;
          flex-direction: column;
          padding: 5rem 0;
          font-family: "Queental";
          justify-content: flex-start;
        }
        .services-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
        }
        .content-home-second .content-title {
          margin-bottom: 5rem;
          transition: opacity 0.75s ease-in;
        }
        @media (max-width: 991px) {
          .content-home-second {
            padding: 2.5rem 0;
          }
          .services-container {
            flex-direction: column;
          }
        }
      `}</style>
      <div className="content content-home-second after-intro">
        <VisibilitySensor
          onChange={handleScroll}
          offset={{
            top: 30,
            bottom: topOffset,
          }}
        >
          <h2
            className={isMobile() ? "content-title" : "content-title opacity-0"}
          >
            OUR SERVICES
          </h2>
        </VisibilitySensor>
        <div className="services-container">
          <BlackMiddleLine
            // firstLine="Let's"
            blackLine="Develop"
            lastLine="Apps"
            textColor="black"
            bgColor="transparent"
            onClick={console.log}
            id="1"
            startAnimation={isVisible || isMobile()}
          />
          <BlackMiddleLine
            // firstLine="Let's"
            blackLine="Design"
            lastLine="Websites"
            textColor="black"
            bgColor="transparent"
            onClick={console.log}
            id="2"
            startAnimation={isVisible}
            delay={150}
          />
          <BlackMiddleLine
            // firstLine="Let's"
            blackLine="Build"
            lastLine="The Future"
            textColor="black"
            bgColor="transparent"
            onClick={console.log}
            id="3"
            startAnimation={isVisible}
            delay={200}
          />
        </div>
      </div>
    </>
  );
}
