export default function CircleCTA(props) {
  return (
    <>
      <style jsx>{``}</style>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="30px"
        height="300px"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        xmlSpace="preserve"
        className="svg__cta"
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -60, 0 a 60,60 0 0,1 127,0 a 60,60 0 0,1 -127,0 "
          ></path>
        </defs>
        <circle cx="150" cy="100" r="75" fill="none"></circle>
        <g>
          <use xlinkHref="#circlePath" fill="none"></use>
          <text fill="white">
            <textPath xlinkHref="#circlePath">
              Let's build something amazing together
            </textPath>
          </text>
        </g>
      </svg>
    </>
  );
}
