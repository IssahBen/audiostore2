import { useNavigate } from "react-router-dom";
export default function Tabletyx1() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/earphones/yx1");
  }
  return (
    <div className="flex  space-x-[11px] w-full h-[320px] mt-10 mediumhide largehide">
      <div className="w-full  tabletyx1 bg-cover rounded-md"></div>
      <div className="flex flex-col h-full space-y-10 justify-center w-full  bg-extratintwhite px-4 rounded-md">
        <p className="manropebh4 tracking-widest font-extrabold">
          YX1 EARPHONES
        </p>
        <button
          onClick={HandleClick}
          class=" w-48  border-2 border-black text-black font-bold py-4 px-2 "
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
