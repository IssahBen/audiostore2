import { useNavigate } from "react-router-dom";

export default function MobileOptionsYX1() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full space-y-10 smallhide largehide">
      <p className="text-center manropebh6 font-bold">YOU MAY ALSO LIKE</p>
      <div className="flex flex-col w-full  items-center space-y-4">
        <div className="w-full h-[120px] mobilemark1option bg-cover rounded-xl"></div>
        <p className="text-center font-bold manropebh6 tracking-wide">
          XX99 MARK 1
        </p>
        <button
          onClick={() => {
            navigate("/headphones/mark1");
          }}
          class="bg-brown  tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px]"
        >
          SEE PRODUCT
        </button>
      </div>
      <div className="flex flex-col w-full  items-center space-y-4">
        <div className="w-full h-[120px] mobilexx59option bg-cover rounded-xl"></div>
        <p className="text-center font-bold manropebh6 tracking-wide">XX59</p>
        <button
          onClick={() => {
            navigate("/headphones/xx59");
          }}
          class="bg-brown  tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px]"
        >
          SEE PRODUCT
        </button>
      </div>
      <div className="flex flex-col w-full  items-center space-y-4">
        <div className="w-full h-[120px] mobilezx9option bg-cover rounded-xl"></div>
        <p className="text-center font-bold manropebh6 tracking-wide">
          ZX9 SPEAKER
        </p>
        <button
          onClick={() => {
            navigate("/speakers/zx9");
          }}
          class="bg-brown  tracking-widest hover:bg-hoverbrown text-white font-normal w-[160px] h-[48px]"
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
