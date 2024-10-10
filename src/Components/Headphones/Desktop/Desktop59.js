import { useNavigate } from "react-router-dom";

export default function Desktop59() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex  items-center space-x-28 h-[560px] desktophide ">
      <div className="w-full h-[560px] desktopc59 bg-cover"></div>
      <div className="flex flex-col w-full items-start space-y-4">
        <div className="flex flex-col w-full items-start justify-center ">
          <p className="tracking-wide manropebh2 text-center font-bold">XX59</p>
          <p className="tracking-wide manropebh2 text-center font-bold">
            HEADPHONES
          </p>
        </div>

        <div className="w-full ">
          <p className=" text-ash manropemed leading-6">
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
