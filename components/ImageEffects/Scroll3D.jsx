import ScrollWatcher from "../HOC/ScrollWatcher";

export default function Scroll3D(props) {
  const { src, width } = props;
  const calculatedMarginTop = width * 1.75;

  const updateRule = (elementId, offsetToMiddle, speed) => {
    console.log("updateRule");
    const imgs =
      document.getElementById(props.id) &&
      document.getElementById(props.id).querySelectorAll("img");
    if (!imgs.length) {
      console.log("props.id ", props.id);
      return;
    }
    // AT 100 or 0: 0,0,0,0
    // AT 50: 40,80,120,160
    const distance = Math.abs(50 - offsetToMiddle);
    let multiplier = 0.2;
    if (distance < 10) {
      multiplier = 1;
    } else if (distance < 20) {
      multiplier = 0.8;
    } else if (distance < 30) {
      multiplier = 0.6;
    } else if (distance < 40) {
      multiplier = 0.4;
    }
    console.log(offsetToMiddle);
    for (let i = 0; i < imgs.length; i++) {
      const transformVal = 40 * (i + 1) * multiplier;
      imgs[i].style.opacity = 0.4 + i * 0.2;
      imgs[
        i
      ].style.transform = `translate(${transformVal}px,${-transformVal}px)`;
    }
  };
  return (
    <>
      <style jsx>{`
        .container {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-top: ${calculatedMarginTop + "px"};
          background: rgba(0, 0, 0, 0);
          transform: rotate(-30deg) skew(25deg) scale(0.8);
          transition: 0.5s;
        }
        .container img {
          position: absolute;
          width: 100%;
          max-width: ${width + "px" || "200px"};
          transition: 0.5s;
          filter: grayscale(1);
        }
        @media (max-width: 991px) {
          .container {
            display: none !important;
          }
        }
      `}</style>
      <ScrollWatcher
        id={props.id}
        targetSelector={".container"}
        onViewportScroll={updateRule}
      >
        <div className="container" id={props.id}>
          <img src={src} />
          <img src={src} />
          <img src={src} />
          <img src={src} />
        </div>
      </ScrollWatcher>
    </>
  );
}

/**
 * .container:hover img:nth-child(4) {
          transform: translate(160px, -160px);
          opacity: 1;
        }
        .container:hover img:nth-child(3) {
          transform: translate(120px, -120px);
          opacity: 0.8;
        }
        .container:hover img:nth-child(2) {
          transform: translate(80px, -80px);
          opacity: 0.6;
        }
        .container:hover img:nth-child(1) {
          transform: translate(40px, -40px);
          opacity: 0.4;
        }
 */
