import WebsiteMenu from "./Menu";
import ScrollWatcher from "./HOC/ScrollWatcher";

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
          background: #f2f2f2;
          padding: 20px;
          display: flex;
          align-items: center;
          position: relative;
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

        header.header-floating {
          position: fixed;
          overflow: hidden;
          opacity: 0.9;
          top: 20px;
          height: calc(64px + 1rem);

          width: calc(100% - 40px);
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
          -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
          box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
          z-index: 12491241241;
        }

        header.header-open {
          animation: slideDown 0.3s;
        }

        @keyframes slideDown {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: calc(64px + 1rem);
            opacity: 0.9;
          }
        }
        @media (max-width: 576px) {
          header {
            padding: 0.5rem;
          }
          header.header-floating {
            top: 0.5rem;
            width: calc(100% - 1rem);
          }
        }
      `}</style>

      <header>
        <div className="header-left after-intro opacity-0">
          <img src="/images/logo-color-64.png" alt="logo-cco" height="64" />
        </div>
        <div className="header-center"></div>
        <div className="header-right after-intro opacity-0">
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
