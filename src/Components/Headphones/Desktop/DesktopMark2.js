import { useNavigate } from "react-router-dom";

export default function DesktopMark2() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center space-x-28 h-[560px] desktophide   ">
      <div className="w-full h-[506px] desktopcmark2 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <p className="text-brown manropereg tracking-[10px]">NEW PRODUCT</p>
        <div className="flex flex-col w-full items-start justify-center ">
          <p className="tracking-wide manropebh2 text-center font-bold">
            XX99 MARK II
          </p>
          <p className="tracking-wide manropebh2 text-center font-bold">
            HEADPHONES
          </p>
        </div>
        <div className="w-full pr-5 ">
          <p className="  text-ash manropemed leading-6">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.It
            redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/headphones/mark2");
          }}
          class="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10 "
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
