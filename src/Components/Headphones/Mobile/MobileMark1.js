import { useNavigate } from "react-router-dom";
export default function MobileMark1() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/headphones/mark1");
  }
  return (
    <div className="w-full flex flex-col space-y-8 h-[724px] smallhide largehide">
      <div className="w-full h-[352px] mobilecmark1 bg-cover"></div>
      <div className="flex flex-col w-full items-center space-y-4">
        <p className="tracking-wide manropebh4 text-center font-bold">
          XX99 MARK I HEADPHONES
        </p>
        <p className="text-center text-ash manropemed leading-6">
          As the gold standard for headphones,the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles,mixing
          engineers,and music aficionados alike in studios and on the go.
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
