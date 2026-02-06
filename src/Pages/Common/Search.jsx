import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const tabs = ["For You", "Following", "Club Feed", "Club 2 Feed"];

const Search = () => {
  const [activeTab, setActiveTab] = useState("For You");

  return (
    <div className="rounded-[28px] bg-white shadow-sm">
      <div className="flex flex-wrap items-center gap-8 border-b border-[#e8e2dc] px-8 pt-6 text-xs font-semibold uppercase tracking-[0.26em] text-[#6c6158]">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              className={[
                "pb-4",
                isActive
                  ? "border-b-2 border-[#0b2b6a] text-[#0b2b6a]"
                  : "hover:text-[#0b2b6a]",
              ].join(" ")}
              onClick={() => setActiveTab(tab)}
              type="button"
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="px-8 py-6">
        <div className="flex items-center gap-2 rounded-full border border-[#ece7e2] bg-[#f7f4f2] px-4 py-2 text-sm text-[#7a6f66]">
          <FiSearch />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none"
          />
        </div>

        <div className="mt-6 h-[540px] rounded-2xl border border-dashed border-[#e3ded8] bg-white/80" />
      </div>
    </div>
  );
};

export default Search;
