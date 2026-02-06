import React from "react";
import {
  FiImage,
  FiSmile,
  FiMapPin,
  FiMoreHorizontal
} from "react-icons/fi";
import { HiOutlineGif } from "react-icons/hi2";

const Home = () => {
  return (
    <>
      <div className="rounded-[28px] bg-white px-6 py-6 shadow-sm">
        {/* <div className="flex items-center justify-between border-b border-[#ece7e2] pb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#5a4f45]">
          <div className="flex gap-6">
            <button className="border-b-2 border-[#0b2b6a] pb-2 text-[#0b2b6a]">
              For You
            </button>
            <button className="pb-2 hover:text-[#0b2b6a]">Following</button>
            <button className="pb-2 hover:text-[#0b2b6a]">Club Feed</button>
            <button className="pb-2 hover:text-[#0b2b6a]">Club 2 Feed</button>
          </div>
        </div> */}

        <div className="mt-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-[#c7bdb3]" />
          <div className="flex-1 text-center text-sm font-semibold text-[#7d7268]">
            Post Away.....
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#efeae6] pt-4 text-[#6d6158]">
          <div className="flex items-center gap-4 text-lg">
            <FiImage />
            <HiOutlineGif />
            <FiSmile />
            <FiMoreHorizontal />
            <FiMapPin />
          </div>
          <button className="rounded-full bg-[#0b2b6a] px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow">
            Post
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-[28px] border border-dashed border-[#d7d0ca] bg-white/60 px-6 py-16 text-center text-sm text-[#9a8f85]">
        Your feed will appear here.
      </div>
    </>
  );
};

export default Home;
