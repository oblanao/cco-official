import FadeWithScroll from "./HOC/FadeWithScroll";
import RandomizerToLetter from "./TextEffects/RandomizerToLetter";
import SimpleTextReveal from "./TextEffects/SimpleTextReveal";
import UnderlineText from "./TextEffects/UnderlineText";

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
    </>
  );
}
