import { useNavigate } from "react-router-dom";
export default function Mobileyx1() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/earphones/yx1");
  }
  return (
    <div className="flex flex-col space-y-8 w-full  mt-10 smallhide largehide">
      <div className="w-full h-52 yx1 bg-cover rounded-md"></div>
      <div className="flex flex-col  space-y-10 justify-center w-full h-52 bg-extratintwhite px-4 rounded-md">
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
