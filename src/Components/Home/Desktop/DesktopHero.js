import { useNavigate } from "react-router-dom";
export default function DesktopHero() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/headphones/mark2");
  }
  return (
    <div className="flex justify-between items-center   bg-black w-full h-[750px] desktophero px-12 desktophide ">
      <div className="flex flex-col space-y-8  items-start w-2/3 h-80 ">
        <p className="font-normal text-ashwhite tracking-[10px] manropereg ">
          New Product
        </p>
        <p className="manropebh1  tracking-widest font-bold text-white">
          XX99 MARK II HEADPHONES
        </p>
        <p className="manropemed  text-ashwhite font-bold leading-7 tracking-widest w-[349px] ">
          Experience natural,lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </p>
        <button
          onClick={HandleClick}
          class="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10 "
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
