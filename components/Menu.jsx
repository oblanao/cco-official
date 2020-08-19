import { useEffect, useState } from "react";

export default function WebsiteMenu(props) {
  useEffect(() => {
    var app = function () {
      var body = undefined;
      var menu = undefined;
      var menuItems = undefined;
      var init = function init() {
        body = document.querySelector("body");
        menu = document.querySelector(".menu-icon");
        menuItems = document.querySelectorAll(".nav__list-item");
        applyListeners();
      };
      var applyListeners = function applyListeners() {
        console.log("applied listener");
        menu.addEventListener("click", function () {
          return props.handleClick();
        });
      };
      init();
    };
    app();
  }, []);
  return (
    <>
      <style jsx>{``}</style>
      <img
        src="/images/logo-white-64.png"
        width="64"
        height="64"
        className="menu-logo"
      />
      <div className="nav-but-wrap">
        <div className="menu-icon hover-target">
          <span className="menu-icon__line menu-icon__line-left"></span>
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line menu-icon__line-right"></span>
        </div>
      </div>
      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item active-nav">
              <a href="#" className="hover-target effect-underline">
                home
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="hover-target effect-underline">
                about
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="hover-target effect-underline">
                portfolio
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="hover-target effect-underline">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
