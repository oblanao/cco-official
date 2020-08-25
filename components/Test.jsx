import FadeWithScroll from "./HOC/FadeWithScroll";
import RandomizerToLetter from "./TextEffects/RandomizerToLetter";
import SimpleTextReveal from "./TextEffects/SimpleTextReveal";
import UnderlineText from "./TextEffects/UnderlineText";
import AnimatedTyping from "./TextEffects/AnimatedTyping";
import Hover3D from "./ImageEffects/Hover3D";
import ExpandingPortfolio from "./ImageEffects/ExpandingPortfolio";

export default function Test() {
  return (
    <>
      {/* <RandomizerToLetter id="1" text="50" /> */}
      <SimpleTextReveal
        duration={1000}
        delay={200}
        text={"Chess Coders brings you money"}
      />
      <p>
        Haules balaules <UnderlineText text="haules baules" />
      </p>
      <AnimatedTyping
        duration={10000}
        delay={2000}
        text={"This is animated typing. Hello world!"}
      />

      <ExpandingPortfolio
        items={[
          {
            src:
              "https://chesscoders.com/wp-content/uploads/2020/02/Chess-Coders_Portfolio_Outran-728x728.jpg",
            title: "OUTRAN ACTIVE",
          },
          {
            src:
              "https://chesscoders.com/wp-content/uploads/2019/07/barbumagic-728x728.jpg",
            title: "BARBU MAGIC",
          },
          {
            src:
              "https://chesscoders.com/wp-content/uploads/2019/03/chesscoders-portofolio-romco-screenshot1-728x728.jpg",
            title: "ROMCO ML",
          },
        ]}
      />
    </>
  );
}
