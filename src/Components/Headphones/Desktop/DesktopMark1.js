import { useNavigate } from "react-router-dom";

export default function DesktopMark1() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-row-reverse items-center   desktophide h-[560px]  ">
      <div className="w-full h-[560px] desktopcmark1 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <div className="flex flex-col w-full items-start justify-center ">
          <p className="tracking-wide manropebh2 text-center font-bold">
            XX99 MARK I
          </p>
          <p className="tracking-wide manropebh2 text-center font-bold">
            HEADPHONES
          </p>
        </div>
        <div className="w-full pr-20">
          <p className=" text-ash manropemed leading-6">
            As the gold standard for headphones,the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles,mixing
            engineers,and music aficionados alike in studios and on the go.
          </p>
        </div>

        <button
          onClick={() => {
            navigate("/headphones/mark1");
          }}
          class="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10 "
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
