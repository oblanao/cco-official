import { useState } from "react";

import ClassWithScroll from "./HOC/ClassWithScroll";
// import FadeWithScroll from "./HOC/FadeWithScroll";
import ScrollWatcher from "./HOC/ScrollWatcher";
import ExpandingPortfolio from "./ImageEffects/ExpandingPortfolio";
import DoubleBorderButton from "./Buttons/DoubleBorder";
import FadeWithScroll from "./HOC/FadeWithScroll";
import config from "../site.config";

export default function HomePortfolio(props) {
  const [workButtonAnimation, setWorkButtonAnimation] = useState(false);

  const updateTitleRule = (elementId, scrollY, speed) => {
    document.querySelector(elementId).style.transform =
      "translateY(" + scrollY * 1.25 + "px)";
  };
  return (
    <>
      <style jsx>{`
        .content-fourth {
          background: ${config.colors.selectedWork.bg};
          color: ${config.colors.selectedWork.fg};
        }
        .row {
          width: 100%;
        }
        .work-sidebar {
          width: 33%;
          max-width: 360px;
        }
      `}</style>
      <div className="full-screen content content-fourth">
        <div className="portfolio__inner">
          <ClassWithScroll
            id="work-title"
            targetSelector=".work-title"
            updateRule={updateTitleRule}
          >
            <h2 className="after-intro work-title opacity-0">SELECTED WORK</h2>
          </ClassWithScroll>
          <FadeWithScroll
            id="portfolio-element"
            targetSelector={".expanding-portfolio-container"}
            noMobile={true}
          >
            <ExpandingPortfolio
              items={[
                {
                  src:
                    "https://chesscoders.com/wp-content/uploads/2020/02/Chess-Coders_Portfolio_Outran-728x728.jpg",
                  title: "OUTRAN ACTIVE",
                },
                {
                  src:
                    "https://chesscoders.com/wp-content/uploads/2019/07/barbumagic-728x728.jpg",
                  title: "BARBU MAGIC",
                },
                {
                  src:
                    "https://chesscoders.com/wp-content/uploads/2019/03/chesscoders-portofolio-romco-screenshot1-728x728.jpg",
                  title: "ROMCO ML",
                },
              ]}
            />
          </FadeWithScroll>
          <ScrollWatcher
            id="work-button"
            onEnter={() => setWorkButtonAnimation(true)}
          >
            <DoubleBorderButton
              className="work-button"
              text="VIEW MORE"
              mainColor="white"
              startAnimation={workButtonAnimation}
            />
          </ScrollWatcher>
        </div>
      </div>
    </>
  );
}
