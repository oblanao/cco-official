import { addClass, removeClass } from "../helpers/functions";
import Fullscreen from "./Fullscreen";
import { useState, useEffect } from "react";

export default function Header(props) {
  //TODO: de cacat animatia la buton, in primul rand nu ramane opacity-0 nu stiu de ce pula mea
  useEffect(() => {
    let menuOpenButton = document.querySelector(".burger:not(.active)");
    menuOpenButton.addEventListener("click", function () {
      menuOpenButton.classList.add("active");
      menuCloseButton.classList.add("active");
      setTimeout(openMenu, 0);
    });
    let menuCloseButton = document.querySelector(".burger.active");
    menuCloseButton.addEventListener("click", function () {
      menuCloseButton.classList.remove("active");
      menuOpenButton.classList.remove("active");
      setTimeout(closeMenu, 0);
    });
  }, []);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const animated = !!props.withAnimation;

  const openMenu = () => {
    setMenuOpen(true);
    console.log("open");
    setTimeout(
      () => addClass(".header__navigation", "header__navigation--open"),
      150
    );
    setTimeout(() => addClass(".header-left", "opacity-0"), 170);
    setTimeout(() => addClass(".header-center", "opacity-0"), 170);
    setTimeout(() => addClass(".header-right", "opacity-0"), 170);
    setTimeout(
      () => removeClass(".header__navigation .header-left", "opacity-0"),
      200
    );
    setTimeout(
      () => removeClass(".header__navigation .header-center", "opacity-0"),
      215
    );
    setTimeout(
      () => removeClass(".header__navigation .header-right", "opacity-0"),
      230
    );
    setTimeout(() => addClass(".menu__content", "menu__content--show"), 450); // should match header__navigation transition time
  };
  const closeMenu = () => {
    setMenuOpen(false);
    console.log("close");
    setTimeout(
      () => removeClass(".header__navigation", "header__navigation--open"),
      250
    );
    setTimeout(() => removeClass(".header-left", "opacity-0"), 200);
    setTimeout(() => removeClass(".header-center", "opacity-0"), 215);
    setTimeout(() => removeClass(".header-right", "opacity-0"), 230);
    setTimeout(
      () => addClass(".header__navigation .header-left", "opacity-0"),
      100
    );
    setTimeout(
      () => addClass(".header__navigation .header-center", "opacity-0"),
      115
    );
    setTimeout(
      () => addClass(".header__navigation .header-right", "opacity-0"),
      130
    );
  };
  return (
    <>
      <header className={animated ? "opacity-1" : "opacity-0"}>
        <div className="header-left">
          <img src="/images/logo-black-64.png" alt="logo-cco" height="64" />
        </div>
        <div className="header-center"></div>
        <div className="header-right">
          {/* <button onClick={openMenu}>OPEN</button> */}
          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <div className="header__navigation">
        <Fullscreen>
          <div className="menu__full">
            <div className="menu__content">
              <header>
                <div className="header-left">
                  <img
                    src="/images/logo-white-64.png"
                    alt="logo-cco"
                    height="64"
                  />
                </div>
                <div className="header-center"></div>
                <div className="header-right">
                  <div className="burger active">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  {/* <button onClick={closeMenu}>CLOSE</button> */}
                </div>
              </header>
            </div>
          </div>
        </Fullscreen>
      </div>
    </>
  );
}
