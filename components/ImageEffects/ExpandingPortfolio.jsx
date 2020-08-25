export default function ExpandingPortfolio(props) {
  const { items } = props || [];
  return (
    <>
      <style jsx>{`
        .expanding-portfolio-container {
          display: flex;
          width: 100%;
          height: 100%;
          max-height: 60vh;
          padding: 4% 2%;
          box-sizing: border-box;
          margin-top: 4.5rem;
          margin-bottom: 4.5rem;
        }

        .box {
          border: 5px solid rgba(255, 255, 255, 0.7);
          border-radius: 25%;
          flex: 1;
          overflow: hidden;
          transition: 1.5s;
          transition-delay: 0.25s;
          margin: 0 2%;
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
          line-height: 0;
          cursor: pointer;
        }

        .box > img {
          width: 200%;
          height: calc(100% - 100px);
          object-fit: cover;
          object-position: 50% 50%;
          transition: 1.5s;
          transition-delay: 0.25s;
          filter: grayscale(1);
        }

        .box > span {
          font-size: 3.8vh;
          display: block;
          text-align: center;
          height: 100px;
          line-height: 2.6;
        }

        .box:hover {
          flex: 1 1 50%;
          border-radius: 10px;
          border-color: black;
        }
        .box:hover > img {
          width: 100%;
          height: 100%;
          filter: grayscale(0);
        }
        @media (max-width: 991px) {
          .expanding-portfolio-container {
            flex-direction: column;
            max-height: none;
          }
          .expanding-portfolio-container > .box:not(:last-child) {
            margin-bottom: 2.5rem;
          }
          .box > img {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
      <div className="expanding-portfolio-container">
        {items.map((item, index) => (
          <div className="box" key={`portfolio-box-${index}`}>
            <img src={item.src} />
            <span>{item.title}</span>
          </div>
        ))}
        {/* <div className="box">
      <img src="https://source.unsplash.com/1000x800" />
      <span>CSS</span>
    </div> */}
      </div>
    </>
  );
}
