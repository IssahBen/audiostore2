import { useNavigate } from "react-router-dom";

export default function Tabletzx7() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col space-y-8 h-[706px] mediumhide largehide ">
      <div className="w-full h-[352px] tabletczx7 bg-cover"></div>
      <div className="flex flex-col w-full items-center space-y-4">
        <div className="flex flex-col w-full items-center justify-center ">
          <p className="tracking-wide manropebh4 text-center font-bold">ZX7</p>
          <p className="tracking-wide manropebh4 text-center font-bold">
            SPEAKER
          </p>
        </div>
        <div className="w-full px-16">
          <p className="text-center text-ash manropemed leading-6">
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
