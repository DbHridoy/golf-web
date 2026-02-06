import React from "react";

const clubs = [
  { id: 1, name: "Preserved Links" },
  { id: 2, name: "LedgerRock Golf Club" },
  { id: 3, name: "Sebonack Golf Club" },
];

const Clubs = () => {
  return (
    <div className="rounded-[28px] bg-white shadow-sm">
      <div className="flex items-center justify-center gap-4 border-b border-[#e8e2dc] px-8 py-6">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7c66c2] to-[#efb3c4]" />
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1b1b1b]">
          My Clubs
        </div>
      </div>

      <div className="divide-y divide-[#e8e2dc] px-6">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="flex items-center gap-4 py-6 text-sm font-semibold text-[#1b1b1b]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8d0c8] text-xs font-semibold text-[#6f645b]">
              {club.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </div>
            {club.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
