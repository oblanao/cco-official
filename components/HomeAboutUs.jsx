import ClassWithScroll from "./HOC/ClassWithScroll";
import FadeWithScroll from "./HOC/FadeWithScroll";
import FullScreenContent from "./HOC/FullScreenContent";
import DoubleBorderButton from "./Buttons/DoubleBorder";
import ScrollWatcher from "./HOC/ScrollWatcher";
import { useState } from "react";
import RandomizerToLetter from "./TextEffects/RandomizerToLetter";
import TextWithIcon from "./HOC/TextWithIcon";

export default function HomeAboutUs(props) {
  const [counterAnimation, setCounterAnimation] = useState(false);
  const updateTitleRule = (elementId, scrollY, speed) => {
    document.querySelector(elementId).style.transform =
      "translateY(" + scrollY * 1.25 + "px)";
  };

  const [aboutButtonAnimation, setAboutButtonAnimation] = useState(false);
  // const updateTextRule = (elementId, scrollY, speed) => {
  //   let scaleValue = 100 / scrollY;
  //   if (scaleValue > 1.2) {
  //     scaleValue = 1.2;
  //   }
  //   document.getElementById(elementId).style.transform =
  //     "scale(" + scaleValue + ")";
  // };
  return (
    <>
      <style jsx>{``}</style>
      {/* <div className="content content-third full-screen"> */}
      <FullScreenContent className="content-third">
        {/* <FadeWithScroll
          id="chip-icon"
          targetSelector=".floating-icon"
          topValue={0.5}
        >
          <img
            src="/images/icons/chip-half.png"
            alt="floating-brain-icon"
            className="floating-icon after-intro opacity-0"
          />
        </FadeWithScroll> */}
        <div className="content-section__inner">
          <ClassWithScroll
            id="about-title"
            targetSelector=".about-title"
            updateRule={updateTitleRule}
          >
            <h2 className="after-intro about-title opacity-0">ABOUT US</h2>
          </ClassWithScroll>

          <div className="about-content">
            <FadeWithScroll
              id="about-text-first"
              targetSelector=".text-with-icon"
            >
              <TextWithIcon
                textComponent={
                  <h4 className="about-texts">
                    We are a young company, for whom innovation and
                    professionalism are at the forefront. Once we start a
                    project, we believe we can fully meet the needs of our
                    clients.
                  </h4>
                }
                iconComponent={
                  <img src="/images/icons/suitcase-white.png" width="128px" />
                }
              />
            </FadeWithScroll>
            <FadeWithScroll
              id="about-text-second"
              targetSelector=".text-with-icon"
            >
              <TextWithIcon
                iconRight
                textComponent={
                  <h4 className="about-texts">
                    Whether you are a company or an individual, we will help you
                    create a digital dimension to your work. As part of our
                    continuous improvement, we also focus on modern IT
                    technologies.
                  </h4>
                }
                iconComponent={
                  <img src="/images/icons/light-bulb-white.png" width="128px" />
                }
              />
            </FadeWithScroll>
          </div>
          <ScrollWatcher
            id="about-button"
            onEnter={() => setAboutButtonAnimation(true)}
          >
            <DoubleBorderButton
              className="about-button"
              text="Get to Know Us"
              mainColor="white"
              startAnimation={aboutButtonAnimation}
            />
          </ScrollWatcher>
          {/* </ClassWithScroll> */}
          {/* </div> */}
        </div>
      </FullScreenContent>
    </>
  );
}
