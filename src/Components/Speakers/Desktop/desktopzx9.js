import { useNavigate } from "react-router-dom";

export default function Desktopzx9() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center space-x-28 h-[560px] desktophide   ">
      <div className="w-full h-[506px] desktopczx9 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col w-full items-start justify-center ">
          <p className="tracking-wide manropebh2 text-center font-bold">ZX9</p>
          <p className="tracking-wide manropebh2 text-center font-bold">
            SPEAKER
          </p>
        </div>
        <div className="w-full pr-5 ">
          <p className="  text-ash manropemed leading-6">
            Upgrade your sound system with all new ZX9 active speaker.It's
            bookshelf speaker system that offers truly wireless
            connectivity-creating new possibilites for more pleasing and
            practical audio setups.
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/speakers/zx9");
          }}
          class="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10 "
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
