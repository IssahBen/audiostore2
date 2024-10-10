import { useNavigate } from "react-router-dom";

export default function Tablet59() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col space-y-8 h-[706px]  mediumhide largehide">
      <div className="w-full h-[352px] tabletc59 bg-cover"></div>
      <div className="flex flex-col w-full items-center space-y-4">
        <div className="flex flex-col w-full items-center justify-center ">
          <p className="tracking-wide manropebh4 text-center font-bold">XX59</p>
          <p className="tracking-wide manropebh4 text-center font-bold">
            HEADPHONES
          </p>
        </div>

        <div className="w-full px-16">
          <p className="text-center text-ash manropemed leading-6">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones.The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/headphones/xx59");
          }}
          class="bg-brown hover:bg-hoverbrown text-white font-normal py-4 px-10 "
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
