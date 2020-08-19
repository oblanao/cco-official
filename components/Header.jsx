import WebsiteMenu from "./Menu";
import { useState } from "react";

export default function Header(props) {
  //TODO: de cacat animatia la buton, in primul rand nu ramane opacity-0 nu stiu de ce pula mea
  const isNavActive = () => {
    return !!document.body.classList.contains("nav-active");
  };
  // const [menuOpen, setMenuOpen] = useState(false);
  // console.log("is menu open ", menuOpen);
  const animated = !!props.withAnimation;
  const onMenuClick = () => {
    console.log("click");
    if (isNavActive()) {
      console.log("menu is open");
      document.body.classList.remove("nav-active");
      // setMenuOpen(false);
    } else {
      console.log("menu not open");
      document.body.classList.add("nav-active");
      // setMenuOpen(true);
    }
  };
  return (
    <>
      <style jsx>{`
        header {
          padding: 20px;
          display: flex;
          align-items: center;
          /* box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.5); */
          position: relative;
        }

        @media (max-width: 576px) {
          header {
            padding: 0.5rem;
          }
        }

        .header__navigation {
          position: fixed;
          background-color: #fff;
          z-index: -1;
          transform: scaleY(0);
          transform-origin: 50% 50%;
          opacity: 0;
          visibility: hidden;
          transition: all 0.45s;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        header,
        header > div {
          transition: opacity 0.45s;
          opacity: 1;
        }
        .header__navigation--open {
          transform: scaleY(1);
          opacity: 1;
          visibility: visible;
          z-index: 999999;
        }
        .menu__full {
          background: black;
          color: white;
          width: 100%;
          height: 100%;
          z-index: 99999999;
        }
        .menu__content {
          opacity: 0;
          transition: opacity 0.5s ease-in;
        }

        .menu__content--show {
          opacity: 1;
        }

        .header-left,
        .header-right {
          min-width: 64px;
        }
        .header-center {
          flex-grow: 1;
        }
        .header-right {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
      <header className={animated ? "opacity-1" : "opacity-0"}>
        <div className="header-left">
          <img src="/images/logo-color-64.png" alt="logo-cco" height="64" />
        </div>
        <div className="header-center"></div>
        <div className="header-right">
          <WebsiteMenu handleClick={onMenuClick} />
        </div>
      </header>
      {/* <div className="header__navigation">
        <Fullscreen>
          <div className="menu__full">
            <div className="menu__content"></div>
          </div>
        </Fullscreen>
      </div> */}
    </>
  );
}
