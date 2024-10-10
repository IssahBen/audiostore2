import { useState } from "react";
import { useData } from "../../../Context/DataContext";
export default function DesktopVxx59() {
  const [xx59s, setxx59s] = useState(0);
  const { setNumberOfxx59 } = useData();
  return (
    <div className="w-full flex  h-[560px] space-x-14 items-center  mt-5 desktophide">
      <div className="w-full h-[560px] desktopvxx59 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col">
          <p className="tracking-wide manropebh4  font-bold">XX99 MARK I</p>
          <p className="tracking-wide manropebh4  font-bold">HEADPHONES</p>
        </div>
        <p className=" text-ash manropemed leading-6">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <p className=" manropebh5 font-bold">$899</p>
        <div className="flex h-[48px] w-[296px] space-x-2">
          <div className="flex w-[120px] bg-ashwhite items-center px-5">
            <p
              onClick={() => {
                if (xx59s > 0) {
                  setxx59s(parseInt(xx59s) - 1);
                } else {
                  setxx59s(xx59s);
                }
              }}
              className="font-bold cursor-pointer"
            >
              -
            </p>
            <input
              value={xx59s}
              readOnly
              className="w-full h-[32px] text-black   bg-ashwhite text-center font-bold"
              type="text"
            />
            <p
              onClick={() => {
                if (xx59s >= 0) {
                  setxx59s(parseInt(xx59s) + 1);
                } else {
                  setxx59s(xx59s);
                }
              }}
              className="font-bold cursor-pointer"
            >
              +
            </p>
          </div>
          <button
            onClick={() => {
              setNumberOfxx59(xx59s);
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
