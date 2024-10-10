import { useNavigate } from "react-router-dom";

export default function Tabletzx9() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col space-y-8 h-[706px]  mediumhide largehide ">
      <div className="w-full h-[352px] tabletczx9 bg-cover"></div>
      <div className="flex flex-col w-full items-center space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col w-full items-center justify-center ">
          <p className="tracking-wide manropebh4 text-center font-bold">ZX9</p>
          <p className="tracking-wide manropebh4 text-center font-bold">
            SPEAKER
          </p>
        </div>
        <div className="w-full px-16">
          <p className="text-center  text-ash manropemed leading-6">
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
