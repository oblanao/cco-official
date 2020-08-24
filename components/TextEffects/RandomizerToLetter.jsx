import { useEffect } from "react";

export default function RandomizerToLetter(props) {
  const uniqueId = `random-content-${props.id}`;
  useEffect(() => {
    if (props.startAnimation) {
      var theLetters = "!@#$%^&*()_+{}:\"|?><,./;'[]-=0987654321"; //You can customize what letters it will cycle through
      var ctnt = props.text || ""; // Your text goes here
      var speed = 30; // ms per frame
      var increment = 8; // frames per step. Must be >2
      var clen = ctnt.length;
      var si = 0;
      var stri = 0;
      var block = "";
      var fixed = "";
      //Call self x times, whole function wrapped in setTimeout
      (function rustle(i) {
        setTimeout(function () {
          if (--i) {
            rustle(i);
          }
          nextFrame(i);
          si = si + 1;
        }, speed);
      })(clen * increment + 1);
      function nextFrame(pos) {
        for (var i = 0; i < clen - stri; i++) {
          //Random number
          var num = Math.floor(theLetters.length * Math.random());
          //Get random letter
          var letter = theLetters.charAt(num);
          block = block + letter;
        }
        if (si == increment - 1) {
          stri++;
        }
        if (si == increment) {
          // Add a letter;
          // every speed*10 ms
          fixed = fixed + ctnt.charAt(stri - 1);
          si = 0;
        }
        document.getElementById(uniqueId).innerHTML = fixed + block;
        block = "";
      }
    }
  }, [props.startAnimation]);
  return (
    <>
      <style jsx>{`
        .randomizer-output {
          font-weight: bold;
          text-shadow: 0.08em 0em white;
          display: inline-block;
        }
      `}</style>
      <div id={uniqueId} className="randomizer-output">
        {"_".repeat(props.text.length)}
      </div>
    </>
  );
}
