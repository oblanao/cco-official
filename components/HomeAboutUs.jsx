import ClassWithScroll from "./HOC/ClassWithScroll";
import FadeWithScroll from "./HOC/FadeWithScroll";
import DoubleBorderButton from "./Buttons/DoubleBorder";
import ScrollWatcher from "./HOC/ScrollWatcher";
import { useState } from "react";
import TextWithIcon from "./HOC/TextWithIcon";
import config from "../site.config";

export default function HomeAboutUs(props) {
  const updateTitleRule = (elementId, scrollY, speed) => {
    document.querySelector(elementId).style.transform =
      "translateY(" + scrollY * 1.25 + "px)";
  };

  const [aboutButtonAnimation, setAboutButtonAnimation] = useState(false);
  return (
    <>
      <style jsx>{`
        .content-third {
          background: ${config.colors.aboutUs.bg};
          color: ${config.colors.aboutUs.fg};
        }
      `}</style>
      <div className="full-screen content content-third">
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
        </div>
      </div>
    </>
  );
}
