import ClassWithScroll from "./HOC/ClassWithScroll";
// import FadeWithScroll from "./HOC/FadeWithScroll";
import FullScreenContent from "./HOC/FullScreenContent";
import Hover3D from "./ImageEffects/Hover3D";
import Scroll3D from "./ImageEffects/Scroll3D";

export default function HomeFourth(props) {
  const updateTitleRule = (elementId, scrollY, speed) => {
    document.querySelector(elementId).style.transform =
      "translateY(" + scrollY * 0.75 + "px)";
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
        <div className="content-section__inner">
          <ClassWithScroll
            id="work-title"
            targetSelector=".work-title"
            updateRule={updateTitleRule}
          >
            <h2 className="after-intro work-title opacity-0">OUR WORK</h2>
          </ClassWithScroll>
          <div className="row">
            <div className="work-sidebar">
              <Scroll3D
                src="https://res.cloudinary.com/websway/image/upload/v1538242836/img_vkgzwy.png"
                width={200}
                id="work-sidebar-3d"
              />
            </div>
            <div className="work-main"></div>
          </div>
        </div>
      </FullScreenContent>
    </>
  );
}
