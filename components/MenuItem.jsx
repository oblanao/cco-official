export default function MenuItem(props) {
  return (
    <>
      <style jsx>{`
        :root {
          --classic-blue: #0f4c81;
          --turqoise: #53b0ae;
        }
        .link {
          outline: none;
          text-decoration: none;
          position: relative;
          line-height: 1;
          display: inline-block;
          color: rgba(235, 235, 235, 0.8);
          overflow: hidden;
          cursor: pointer;
          padding-left: 5px;
          padding-right: 5px;
          font-weight: 900;
          z-index: 2;
          display: inline-block;
          text-transform: uppercase;
          transition: all 500ms linear;
        }

         {
          /* .container {
          width: 100%;
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        } */
        }
        .link--takiri {
          font-weight: 700;
          font-size: 5em;
          padding: 0 10px 20px;
          -webkit-transition: color 0.5s;
          transition: 0.5s;
          z-index: 0;
        }
        .link--takiri:hover {
          color: #53b0ae;
        }
        .link--takiri:hover::before {
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
        }
        .link--takiri:hover span {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        .link--takiri:before {
          opacity: 0;
          content: "";
          position: absolute;
          height: 30px;
          width: 120%;
          top: 50%;
          margin-top: -18px;
          left: -10%;
          z-index: -1;
          background: #f9f9f9;
          -webkit-transform: scale3d(0, 1, 1);
          transform: scale3d(0, 1, 1);
          -webkit-transition: -webkit-transform 0.5s;
          transition: transform 0.5s;
        }
        .link--takiri span {
          font-size: 20%;
          font-weight: 400;
          position: absolute;
          right: 15px;
          color: #53b0ae;
          bottom: 0;
          opacity: 0;
          -webkit-transform: translate3d(-10px, -10px, 0);
          transform: translate3d(-10px, -10px, 0);
          -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
          transition: transform 0.5s, opacity 0.5s;
        }
      `}</style>
      <div className="container takiri-cont color-1">
        <a className="link link--takiri" href="#">
          Home<span>Chess Coders Home</span>
        </a>
      </div>
    </>
  );
}
