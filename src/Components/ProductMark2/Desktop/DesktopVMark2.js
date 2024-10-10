import { useState } from "react";
import { useData } from "../../../Context/DataContext";

export default function DesktopVMark2() {
  const [mark2s, setMark2s] = useState(0);
  const { setNumberOfMark2 } = useData();
  return (
    <div className="w-full flex  h-[560px] space-x-14 items-center  mt-5 desktophide">
      <div className="w-full h-[560px] desktopvmark2 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col">
          <p className="tracking-wide manropebh4  font-bold">XX99 MARK II</p>
          <p className="tracking-wide manropebh4  font-bold">HEADPHONES</p>
        </div>
        <p className=" text-ash manropemed leading-6">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <p className=" manropebh5 font-bold">$2,999</p>
        <div className="flex h-[48px] w-[296px] space-x-2">
          <div className="flex w-[120px] bg-ashwhite items-center px-5">
            <p
              onClick={() => {
                if (mark2s > 0) {
                  setMark2s(parseInt(mark2s) - 1);
                } else {
                  setMark2s(mark2s);
                }
              }}
              className="font-bold cursor-pointer"
            >
              -
            </p>
            <input
              value={mark2s}
              readOnly
              className="w-full h-[32px] text-black   bg-ashwhite text-center font-bold"
              type="text"
            />
            <p
              onClick={() => {
                if (mark2s >= 0) {
                  setMark2s(parseInt(mark2s) + 1);
                } else {
                  setMark2s(mark2s);
                }
              }}
              className="font-bold cursor-pointer"
            >
              +
            </p>
          </div>
          <button
            onClick={() => {
              setNumberOfMark2(mark2s);
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
