import { useNavigate } from "react-router-dom";

export default function TabletMark1() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col space-y-8 h-[706px] mediumhide largehide ">
      <div className="w-full h-[352px] tabletcmark1 bg-cover"></div>
      <div className="flex flex-col w-full items-center space-y-4">
        <div className="flex flex-col w-full items-center justify-center ">
          <p className="tracking-wide manropebh4 text-center font-bold">
            XX99 MARK I
          </p>
          <p className="tracking-wide manropebh4 text-center font-bold">
            HEADPHONES
          </p>
        </div>
        <div className="w-full px-16">
          <p className="text-center text-ash manropemed leading-6">
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
