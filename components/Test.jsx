import FadeWithScroll from "./HOC/FadeWithScroll";

export default function () {
  const handleScroll = (id, scrollY) => {
    console.log("element ", id, " is at ", scrollY, "%");
  };
  return (
    <>
      <FadeWithScroll id="bubu">
        <p>Haules</p>
      </FadeWithScroll>
      <div
        style={{
          height: 1000,
        }}
      ></div>
      <FadeWithScroll id="cucu">
        <p>Baules</p>
      </FadeWithScroll>
      <div
        style={{
          height: 1000,
        }}
      ></div>
      <FadeWithScroll id="theImage">
        <img
          src="https://images.vexels.com/media/users/3/76761/raw/568a3553a0d3ed3657475829471cf07d-networking-technology-icons.jpg"
          alt="stock"
        />
      </FadeWithScroll>
      {/* <ScrollWatcher id="bubu" onViewportScroll={handleScroll}>
        <p>Haules</p>
      </ScrollWatcher>
      <div
        style={{
          height: 1000,
        }}
      ></div>
      <ScrollWatcher id="cucu" onViewportScroll={handleScroll} debug>
        <p>Baules</p>
      </ScrollWatcher> */}
      <div
        style={{
          height: 2000,
        }}
      ></div>
    </>
  );
}
