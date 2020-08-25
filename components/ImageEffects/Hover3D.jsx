export default function Hover3D(props) {
  const { src, width } = props;
  const calculatedMarginTop = width * 1.75;
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
        .container:hover img:nth-child(4) {
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
        @media (max-width: 991px) {
          .container {
            display: none !important;
          }
        }
      `}</style>
      <div className="container">
        <img src={src} />
        <img src={src} />
        <img src={src} />
        <img src={src} />
      </div>
    </>
  );
}
