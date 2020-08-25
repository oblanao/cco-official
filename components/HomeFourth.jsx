import { useState } from "react";

import ClassWithScroll from "./HOC/ClassWithScroll";
// import FadeWithScroll from "./HOC/FadeWithScroll";
import FullScreenContent from "./HOC/FullScreenContent";
import ScrollWatcher from "./HOC/ScrollWatcher";
import ExpandingPortfolio from "./ImageEffects/ExpandingPortfolio";
import DoubleBorderButton from "./Buttons/DoubleBorder";
import FadeWithScroll from "./HOC/FadeWithScroll";

export default function HomeFourth(props) {
  const [workButtonAnimation, setWorkButtonAnimation] = useState(false);

  const updateTitleRule = (elementId, scrollY, speed) => {
    document.querySelector(elementId).style.transform =
      "translateY(" + scrollY * 1.25 + "px)";
  };
  return (
    <>
      <style jsx>{`
        .row {
          width: 100%;
        }
        .work-sidebar {
          width: 33%;
          max-width: 360px;
        }
      `}</style>
      <FullScreenContent className="content-fourth">
        {/* <FadeWithScroll
          id="crown-icon"
          targetSelector=".floating-icon"
          topValue={0.5}
        >
          <img
            src="/images/icons/crown-queen-half.png"
            alt="floating-crown-icon"
            className="floating-icon after-intro opacity-0"
          />
        </FadeWithScroll> */}
        <div className="portfolio__inner">
          <ClassWithScroll
            id="work-title"
            targetSelector=".work-title"
            updateRule={updateTitleRule}
          >
            <h2 className="after-intro work-title opacity-0">SELECTED WORK</h2>
          </ClassWithScroll>
          {/* <div className="row">
            <div className="work-sidebar">
              <Scroll3D
                src="https://res.cloudinary.com/websway/image/upload/v1538242836/img_vkgzwy.png"
                width={200}
                id="work-sidebar-3d"
              />
            </div>
            <div className="work-main"></div> 
          </div>
            */}
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
      </FullScreenContent>
    </>
  );
}
