export default function SimpleTextReveal(props) {
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
          background: white;
          animation: a-ltr-after 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
          transform: translateX(-101%);
        }

        .home-title span::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: white;
          animation: a-ltr-before 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
          transform: translateX(0);
        }

        .home-title span:nth-of-type(1)::before,
        .home-title span:nth-of-type(1)::after {
          animation-delay: 0s;
        }

        .home-title span:nth-of-type(2)::before,
        .home-title span:nth-of-type(2)::after {
          animation-delay: 0.5s;
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
