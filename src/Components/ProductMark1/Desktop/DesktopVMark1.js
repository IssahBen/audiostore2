import { useState } from "react";
import { useData } from "../../../Context/DataContext";
export default function DesktopVMark1() {
  const [mark1s, setMark1s] = useState(0);
  const { setNumberOfMark1 } = useData();
  return (
    <div className="w-full flex  h-[560px] space-x-14 items-center  mt-5 desktophide">
      <div className="w-full h-[560px] desktopvmark1 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col">
          <p className="tracking-wide manropebh4  font-bold">XX99 MARK I</p>
          <p className="tracking-wide manropebh4  font-bold">HEADPHONES</p>
        </div>
        <p className=" text-ash manropemed leading-6">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <p className=" manropebh5 font-bold">$1,750</p>
        <div className="flex h-[48px] w-[296px] space-x-2">
          <div className="flex w-[120px] bg-ashwhite items-center px-5">
            <p
              onClick={() => {
                if (mark1s > 0) {
                  setMark1s(parseInt(mark1s) - 1);
                } else {
                  setMark1s(mark1s);
                }
              }}
              className="font-bold cursor-pointer"
            >
              -
            </p>
            <input
              value={mark1s}
              readOnly
              className="w-full h-[32px] text-black   bg-ashwhite text-center font-bold"
              type="text"
            />
            <p
              onClick={() => {
                if (mark1s >= 0) {
                  setMark1s(parseInt(mark1s) + 1);
                } else {
                  setMark1s(mark1s);
                }
              }}
              className="font-bold cursor-pointer"
            >
              +
            </p>
          </div>
          <button
            onClick={() => {
              setNumberOfMark1(mark1s);
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
