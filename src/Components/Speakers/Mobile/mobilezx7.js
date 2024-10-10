import { useNavigate } from "react-router-dom";
export default function Mobilezx7() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/speakers/zx7");
  }
  return (
    <div className="w-full flex flex-col space-y-8 h-[724px] smallhide largehide">
      <div className="w-full h-[352px] mobileczx7 bg-cover"></div>
      <div className="flex flex-col w-full items-center space-y-4">
        <div className="flex flex-col w-full items-center justify-center ">
          <p className="tracking-wide manropebh4 text-center font-bold">ZX7</p>
          <p className="tracking-wide manropebh4 text-center font-bold">
            SPEAKER
          </p>
        </div>
        <p className="text-center text-ash manropemed leading-6">
          Stream high quality sound wirelessly with minimal loss.The ZX7
          bookshelf speaker uses high-end audiophile components that represents
          the top of the line powered speakers for home or studio use .
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
