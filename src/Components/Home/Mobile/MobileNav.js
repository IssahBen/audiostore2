import { useRef } from "react";
import { useData } from "../../../Context/DataContext";
import { useNavigate } from "react-router-dom";
import MobileCategory from "./MobileCategory";
import MobileCart from "./MobileCart";
export default function MobileNav() {
  const { numberofitems } = useData();
  const hamburger = useRef(null);
  const mobileMenu = useRef(null);
  const cart = useRef(null);
  const navigate = useNavigate();
  function HandleClick() {
    let isOpen = hamburger.current?.classList.contains("open");
    let body = document.getElementById("body");

    let overlay = document.getElementById("overlay");

    if (isOpen) {
      hamburger.current?.classList.remove("open");

      mobileMenu.current?.classList.remove("flex");
      mobileMenu.current?.classList.add("hidden");
      overlay.classList.add("hidden");
      body.style.position = "";
    } else {
      hamburger.current?.classList.add("open");
      mobileMenu.current?.classList.add("flex");
      mobileMenu.current?.classList.remove("hidden");
      overlay.classList.remove("hidden");
      body.style.position = "fixed";
    }
  }
  function Home() {
    navigate("/");
  }
  function CartClick() {
    let isClosed = cart.current?.classList.contains("hidden");
    let overlay = document.getElementById("overlay");
    let body = document.getElementById("body");
    if (isClosed) {
      cart.current?.classList.remove("hidden");
      overlay.classList.remove("hidden");
      body.style.position = "fixed";
    } else {
      cart.current?.classList.add("hidden");
      overlay.classList.add("hidden");
      body.style.position = "";
    }
  }
  return (
    <div className="w-full bg-black smallhide largehide">
      <div className="flex w-full bg-black py-4  px-4 items-center justify-between ">
        <div className="flex items-center">
          <div className=" poppins-regular ">
            <button
              id="menu-btn"
              type="button"
              ref={hamburger}
              className="  z-40 block hamburger md:hidden focus:outline-none"
              onClick={HandleClick}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
            <div
              id="menu"
              ref={mobileMenu}
              className="absolute  rounded-bl-2xl   z-20 tracking-tighter top-14 right-0 hidden   manropereg  w-full    pb-10 px-10  uppercase bg-white text-tintwhite"
            >
              <MobileCategory />
            </div>
            <div
              id="cart"
              ref={cart}
              className="absolute  rounded-2xl   z-20 tracking-tighter top-20  right-6  hidden   manropereg  w-[327px]       uppercase bg-white text-tintwhite"
            >
              <MobileCart />
            </div>
          </div>
          <h1 onClick={Home} className="ml-5 text-white manropemed font-bold">
            audiophile
          </h1>
        </div>
        <svg
          onClick={CartClick}
          width="23"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
            fill="#FFF"
            fill-rule="nonzero"
          />
        </svg>
        {numberofitems === 0 ? (
          ""
        ) : (
          <p className="absolute right-[2px] top-[5px]  text-white font-bold">
            {numberofitems}
          </p>
        )}
      </div>
      <div className="w-full ">
        <div className="border-t-[0.5px] border-t-ash "></div>
      </div>
    </div>
  );
}
