import { useNavigate } from "react-router-dom";

export default function Desktopzx7() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-row-reverse items-center   desktophide h-[560px]  ">
      <div className="w-full h-[560px] desktopczx7 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <div className="flex flex-col w-full items-start justify-center ">
          <p className="tracking-wide manropebh2 text-center font-bold">ZX7</p>
          <p className="tracking-wide manropebh2 text-center font-bold">
            SPEAKER
          </p>
        </div>
        <div className="w-full pr-20">
          <p className=" text-ash manropemed leading-6">
            Stream high quality sound wirelessly with minimal loss.The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use .
          </p>
        </div>

        <button
          onClick={() => {
            navigate("/speakers/zx7");
          }}
          class="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10 "
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
