import { useState } from "react";
import { useData } from "../../../Context/DataContext";
export default function TabletVzx9() {
  const [zx9s, setzx9s] = useState(0);
  const { setNumberOfZx9 } = useData();
  return (
    <div className="w-full flex  h-[480px] space-x-14 items-center  mt-5 mediumhide largehide">
      <div className="w-full h-[480px] tabletvzx9 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col">
          <p className="tracking-wide manropebh4  font-bold">ZX9 </p>
          <p className="tracking-wide manropebh4  font-bold">SPEAKER</p>
        </div>
        <p className=" text-ash manropemed leading-6">
          Upgrade your sound system with the all new ZX9 active speaker. It’s a
          bookshelf speaker system that offers truly wireless connectivity --
          creating new possibilities for more pleasing and practical audio
          setups.
        </p>
        <p className=" manropebh5 font-bold">$4,500</p>
        <div className="flex h-[48px] w-[296px] space-x-2">
          <div className="flex w-[120px] bg-ashwhite items-center px-5">
            <p
              onClick={() => {
                if (zx9s > 0) {
                  setzx9s(parseInt(zx9s) - 1);
                } else {
                  setzx9s(zx9s);
                }
              }}
              className="font-bold cursor-pointer"
            >
              -
            </p>
            <input
              value={zx9s}
              readOnly
              className="w-full h-[32px] text-black   bg-ashwhite text-center font-bold"
              type="text"
            />
            <p
              onClick={() => {
                if (zx9s >= 0) {
                  setzx9s(parseInt(zx9s) + 1);
                } else {
                  setzx9s(zx9s);
                }
              }}
              className="font-bold cursor-pointer"
            >
              +
            </p>
          </div>
          <button
            onClick={() => {
              setNumberOfZx9(zx9s);
            }}
            class="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-4 "
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
