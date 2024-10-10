import { useEffect, useState } from "react";
import { useData } from "../../../Context/DataContext";
import { useNavigate } from "react-router-dom";
export default function MobileCart() {
  const [numberofitems, setNumberOfItems] = useState(0);
  const [sum, setSum] = useState(0);
  const navigate = useNavigate();
  const {
    numberOfMark1,
    setNumberOfMark1,
    numberOfMark2,
    setNumberOfMark2,
    numberOfxx59,
    setNumberOfxx59,
    numberOfZx7,
    setNumberOfZx7,
    numberOfZx9,
    setNumberOfZx9,
    numberOfYx1,
    setNumberOfYx1,
  } = useData();

  useEffect(() => {
    const list = [
      numberOfMark1,
      numberOfMark2,
      numberOfYx1,
      numberOfZx7,
      numberOfZx9,
      numberOfxx59,
    ];
    const total =
      numberOfMark2 * 2999 +
      numberOfMark1 * 1750 +
      numberOfxx59 * 899 +
      numberOfYx1 * 599 +
      numberOfZx7 * 3500 +
      numberOfZx9 * 4500;
    setSum(total);

    let items = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i] !== 0) {
        items += 1;
      }
    }
    setNumberOfItems(items);
  }, [
    numberOfMark1,
    numberOfMark2,
    numberOfYx1,
    numberOfZx7,
    numberOfZx9,
    numberOfxx59,
  ]);
  function Removeall() {
    setNumberOfMark1(0);
    setNumberOfMark2(0);
    setNumberOfYx1(0);
    setNumberOfZx7(0);
    setNumberOfZx9(0);
    setNumberOfYx1(0);
    setNumberOfxx59(0);
  }
  function Checkout() {
    navigate("/checkout");
  }

  return (
    <div className="w-full h-full flex flex-col  space-y-2 px-10 py-5">
      <div className="flex w-full justify-between">
        <h2 className="text-black manropebh6 font-bold">
          CART({numberofitems})
        </h2>
        <p onClick={Removeall} className="manropemed text-ash underline">
          Remove all
        </p>
      </div>
      {numberOfMark1 === 0 ? (
        ""
      ) : (
        <Mark1 mark1s={numberOfMark1} setmark1={setNumberOfMark1} />
      )}
      {numberOfMark2 === 0 ? (
        ""
      ) : (
        <Mark2 mark2s={numberOfMark2} setmark2={setNumberOfMark2} />
      )}
      {numberOfxx59 === 0 ? (
        ""
      ) : (
        <Xx59 xx59s={numberOfxx59} setxx59={setNumberOfxx59} />
      )}
      {numberOfZx7 === 0 ? (
        ""
      ) : (
        <Zx7 zx7s={numberOfZx7} setzx7={setNumberOfZx7} />
      )}
      {numberOfZx9 === 0 ? (
        ""
      ) : (
        <Zx9 zx9s={numberOfZx9} setzx9={setNumberOfZx9} />
      )}
      {numberOfYx1 === 0 ? (
        ""
      ) : (
        <Yx1 yx1s={numberOfYx1} setyx1={setNumberOfYx1} />
      )}
      <div className="flex justify-between">
        <p className="font-medium text-ash manropebh6">Total</p>
        <p className="font-bold text-black manropebh5">$ {sum}</p>
      </div>
      <button
        onClick={Checkout}
        class="bg-brown hover:bg-hoverbrown text-white font-normal w-[271px] h-[48px] "
      >
        CHECKOUT
      </button>
    </div>
  );
}

function Mark2({ mark2s, setmark2 }) {
  return (
    <div className="flex w-full justify-between items-center ">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartmark2 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">XX99 MK II</p>
          <p className="font-semi-bold text-ash">$ 2,999</p>
        </div>
      </div>
      <div className="flex w-[96px] bg-ashwhite items-center px-5">
        <p
          onClick={() => {
            if (mark2s > 0) {
              setmark2(parseInt(mark2s) - 1);
            } else {
              setmark2(mark2s);
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
              setmark2(parseInt(mark2s) + 1);
            } else {
              setmark2(mark2s);
            }
          }}
          className="font-bold cursor-pointer"
        >
          +
        </p>
      </div>
    </div>
  );
}
function Mark1({ mark1s, setmark1 }) {
  return (
    <div className="flex w-full justify-between items-center ">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartmark1 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">XX99 MK I</p>
          <p className="font-semi-bold text-ash">$ 1,750</p>
        </div>
      </div>
      <div className="flex w-[96px] bg-ashwhite items-center px-5">
        <p
          onClick={() => {
            if (mark1s > 0) {
              setmark1(parseInt(mark1s) - 1);
            } else {
              setmark1(mark1s);
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
              setmark1(parseInt(mark1s) + 1);
            } else {
              setmark1(mark1s);
            }
          }}
          className="font-bold cursor-pointer"
        >
          +
        </p>
      </div>
    </div>
  );
}
function Xx59({ xx59s, setxx59 }) {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartxx59 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">XX59</p>
          <p className="font-semi-bold text-ash">$899</p>
        </div>
      </div>
      <div className="flex w-[96px] bg-ashwhite items-center px-5">
        <p
          onClick={() => {
            if (xx59s > 0) {
              setxx59(parseInt(xx59s) - 1);
            } else {
              setxx59(xx59s);
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
              setxx59(parseInt(xx59s) + 1);
            } else {
              setxx59(xx59s);
            }
          }}
          className="font-bold cursor-pointer"
        >
          +
        </p>
      </div>
    </div>
  );
}
function Zx7({ zx7s, setzx7 }) {
  return (
    <div className="flex w-full justify-between  items-center">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartzx7  bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">ZX7</p>
          <p className="font-semi-bold text-ash">$3,500</p>
        </div>
      </div>
      <div className="flex w-[96px] bg-ashwhite items-center px-5">
        <p
          onClick={() => {
            if (zx7s > 0) {
              setzx7(parseInt(zx7s) - 1);
            } else {
              setzx7(zx7s);
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
              setzx7(parseInt(zx7s) + 1);
            } else {
              setzx7(zx7s);
            }
          }}
          className="font-bold cursor-pointer"
        >
          +
        </p>
      </div>
    </div>
  );
}
function Zx9({ zx9s, setzx9 }) {
  return (
    <div className="flex w-full justify-between items-center ">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartzx9 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">ZX9</p>
          <p className="font-semi-bold text-ash">$4,500</p>
        </div>
      </div>
      <div className="flex w-[96px] bg-ashwhite items-center px-5">
        <p
          onClick={() => {
            if (zx9s > 0) {
              setzx9(parseInt(zx9s) - 1);
            } else {
              setzx9(zx9s);
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
              setzx9(parseInt(zx9s) + 1);
            } else {
              setzx9(zx9s);
            }
          }}
          className="font-bold cursor-pointer"
        >
          +
        </p>
      </div>
    </div>
  );
}
function Yx1({ yx1s, setyx1 }) {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex space-x-2 items-center">
        <div className="w-[64px] h-[64px] cartyx1 bg-cover"></div>
        <div className="flex flex-col space-y-2">
          <p className="manropemed font-bold text-black">YX1</p>
          <p className="font-semi-bold text-ash">$4,500</p>
        </div>
      </div>
      <div className="flex w-[96px] bg-ashwhite items-center px-5">
        <p
          onClick={() => {
            if (yx1s > 0) {
              setyx1(parseInt(yx1s) - 1);
            } else {
              setyx1(yx1s);
            }
          }}
          className="font-bold cursor-pointer"
        >
          -
        </p>
        <input
          value={yx1s}
          readOnly
          className="w-full h-[32px] text-black   bg-ashwhite text-center font-bold"
          type="text"
        />
        <p
          onClick={() => {
            if (yx1s >= 0) {
              setyx1(parseInt(yx1s) + 1);
            } else {
              setyx1(yx1s);
            }
          }}
          className="font-bold cursor-pointer"
        >
          +
        </p>
      </div>
    </div>
  );
}
