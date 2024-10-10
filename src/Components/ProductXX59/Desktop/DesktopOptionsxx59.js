import { useNavigate } from "react-router-dom";

export default function DesktopOptionsxx59() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full space-y-10 pt-20 desktophide">
      <p className="text-center manropebh4 font-bold">YOU MAY ALSO LIKE</p>
      <div className="flex w-full space-x-4">
        <div className="flex  flex-col   items-center space-y-4  w-full ">
          <div className="w-full h-[318px] desktopmark2option bg-cover rounded-xl"></div>
          <p className="text-center font-bold manropebh6 tracking-wide">
            XX99 MARK II
          </p>
          <button
            onClick={() => {
              navigate("/headphones/mark2");
            }}
            className="bg-brown  tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px]"
          >
            SEE PRODUCT
          </button>
        </div>
        <div className="flex flex-col w-full  items-center space-y-4">
          <div className="w-full h-[318px] desktopmark1option bg-cover rounded-xl"></div>
          <p className="text-center font-bold manropebh6 tracking-wide">XX59</p>
          <button
            onClick={() => {
              navigate("/headphones/mark1");
            }}
            className="bg-brown  tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px]"
          >
            SEE PRODUCT
          </button>
        </div>
        <div className="flex flex-col w-full  items-center space-y-4">
          <div className="w-full h-[318px] desktopzx9option bg-cover rounded-xl"></div>
          <p className="text-center font-bold manropebh6 tracking-wide">
            ZX9 SPEAKER
          </p>
          <button
            onClick={() => {
              navigate("/speakers/zx9");
            }}
            className="bg-brown  tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px]"
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
}
