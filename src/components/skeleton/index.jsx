import skeletonImg from "@components/ui/skeletonImg.png";

export function Skeleton() {
  return (
    <div className="border-[0.5px] rounded-[4px] border-[#E5E5E5]">
      <div className="animate-pulse w-[260px] h-[310px] flex flex-col justify-center items-center  px-10 py-2">
        <img
          width={80}
          height={80}
          className=" bg-clip-borderpb-5 rounded-full mb-6"
          src={skeletonImg}
        />
        <span className="w-44 h-4 mb-4  rounded-full bg-[#D8D8D8] "></span>

        <span className="mb-3 w-28 h-3 rounded-full bg-[#D8D8D8] "></span>
        <span className="mb-3 w-28 h-3 rounded-full bg-[#D8D8D8] "></span>
      </div>
    </div>
  );
}
