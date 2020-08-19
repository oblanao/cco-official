export default function () {
  return (
    <>
      {/* <div className="container kuk-cont color-0"> */}
      <a href="#" className="link link--kukuri">
        Kukuri
      </a>
      {/* </div> */}
      <style jsx>{`
        .link {
          outline: none;
          text-decoration: none;
          position: relative;
          font-size: 8em;
          line-height: 1;
          display: inline-block;
        }

        .link--kukuri {
          text-transform: uppercase;
          font-weight: 900;
          overflow: hidden;
          color: white;
          opacity: 0.5;
          transition: opacity 1.3s ease;
        }
        .link--kukuri:hover {
          opacity: 1;
        }
        .link--kukuri::after {
          content: "";
          position: absolute;
          height: 16px;
          width: 100%;
          top: 50%;
          margin-top: -8px;
          right: 0;
          background: #f9f9f9;
          opacity: 0.6;
          transform: translate3d(-100%, 0, 0);
          transition: transform 1s ease-out, opacity 0.4s;
          transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
        }
        .link--kukuri:hover::after {
          transform: translate3d(100%, 0, 0);
          opacity: 1;
        }
        .link--kukuri::before {
          content: attr(data-letters);
          position: absolute;
          z-index: 2;
          overflow: hidden;
          color: #424242;
          white-space: nowrap;
          width: 0%;
          transition: width 0.4s 0.3s;
        }
        .link--kukuri:hover::before {
          width: 100%;
        }
      `}</style>
    </>
  );
}
