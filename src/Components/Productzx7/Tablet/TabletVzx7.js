import { useState } from "react";
import { useData } from "../../../Context/DataContext";
export default function TabletVzx7() {
  const [zx7s, setzx7s] = useState(0);
  const { setNumberOfZx7 } = useData();
  return (
    <div className="w-full flex  h-[480px] space-x-14 items-center  mt-5 mediumhide largehide">
      <div className="w-full h-[480px] tabletvzx7 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col">
          <p className="tracking-wide manropebh4  font-bold">ZX7 </p>
          <p className="tracking-wide manropebh4  font-bold">SPEAKER</p>
        </div>
        <p className=" text-ash manropemed leading-6">
          Stream high quality sound wirelessly with minimal to no loss. The ZX7
          speaker uses high-end audiophile components that represents the top of
          the line powered speakers for home or studio use.
        </p>
        <p className=" manropebh5 font-bold">$3,500</p>
        <div className="flex h-[48px] w-[296px] space-x-2">
          <div className="flex w-[120px] bg-ashwhite items-center px-5">
            <p
              onClick={() => {
                if (zx7s > 0) {
                  setzx7s(parseInt(zx7s) - 1);
                } else {
                  setzx7s(zx7s);
                }
              }}
              className="font-bold cursor-pointer"
            >
              -
            </p>
            <input
              value={zx7s}
              readOnly
              className="w-full h-[32px] text-black   bg-ashwhite text-center font-bold"
              type="text"
            />
            <p
              onClick={() => {
                if (zx7s >= 0) {
                  setzx7s(parseInt(zx7s) + 1);
                } else {
                  setzx7s(zx7s);
                }
              }}
              className="font-bold cursor-pointer"
            >
              +
            </p>
          </div>
          <button
            onClick={() => {
              setNumberOfZx7(zx7s);
            }}
            className="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-4 "
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
