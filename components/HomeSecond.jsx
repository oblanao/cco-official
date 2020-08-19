import { useEffect } from "react";
import Fade from "react-reveal/Fade";

export default function HomeSecond(props) {
  useEffect(() => {}, []);
  return (
    <div className="content content-home-second full-screen">
      <Fade top distance={"30px"} delay={200} cascade>
        <div className="col-left col-50">
          <img src="/images/icons/chip.png" alt="chip-icon" />
        </div>
        <div className="col-right col-50"></div>
      </Fade>
    </div>
  );
}
