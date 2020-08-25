export default function SimpleTextReveal(props) {
  const color = props.color || "white";
  const animationDuration =
    (props.duration && `${props.duration / 1000}s`) || "2s";
  const animationDelay = (props.delay && `${props.delay / 1000}s`) || "0s";
  return (
    <>
      <style jsx>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        h1 {
          font-size: 3em;
          font-weight: normal;
          margin: 0;
        }

        /* title styles */
        .home-title span {
          position: relative;
          overflow: hidden;
          display: block;
          line-height: 1.2;
        }

        .home-title span::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: ${color};
          animation: a-ltr-after ${animationDuration}
            cubic-bezier(0.77, 0, 0.18, 1) forwards;
          transform: translateX(-101%);
        }

        .home-title span::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: ${color};
          animation: a-ltr-before ${animationDuration}
            cubic-bezier(0.77, 0, 0.18, 1) forwards;
          transform: translateX(0);
        }

        .home-title span:nth-of-type(1)::before,
        .home-title span:nth-of-type(1)::after {
          animation-delay: ${animationDelay};
        }
        @keyframes a-ltr-after {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(101%);
          }
        }

        @keyframes a-ltr-before {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
      <h1 className="home-title">
        <span>{props.text}</span>
      </h1>
    </>
  );
}
