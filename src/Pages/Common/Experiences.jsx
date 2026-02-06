import React, { useMemo, useState } from "react";
import { FiCheckCircle, FiXCircle, FiArrowLeft } from "react-icons/fi";

const categories = [
  {
    id: 1,
    title: "Top 100 Courses In The World",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Top 100 Courses In The USA",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Top USA Courses By State",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "USA National Parks",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "USA States I've Been",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "USA Top 100 Steak Houses",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "USA Top 100 Restaurants",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "USA Top 100 Pizza Shops",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    title: "USA Top 100 Ice Cream Shops",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
  },
];

const parks = [
  {
    id: 1,
    name: "Great Smoky Mountains National Park",
    location: "Tennessee, USA",
    status: "visited",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Zion National Park",
    location: "Utah, USA",
    status: "not-visited",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Grand Canyon National Park",
    location: "Arizona, USA",
    status: "not-visited",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

const Experiences = () => {
  const [activeView, setActiveView] = useState("grid");
  const stats = useMemo(() => ({ visited: 3, total: 63 }), []);

  return (
    <div className="rounded-[28px] bg-white shadow-sm">
      <div className="border-b border-[#e8e2dc] px-8 pt-6">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#5a4f45]">
          <button className="pb-3">Posts</button>
          <button className="pb-3">Replies</button>
          <button className="pb-3">Media</button>
          <button className="pb-3">Marketplace</button>
          <button className="border-b-2 border-[#0b2b6a] pb-3 text-[#0b2b6a]">
            Experiences
          </button>
          <button className="pb-3">Club</button>
        </div>
      </div>

      {activeView === "grid" && (
        <div className="grid grid-cols-3 gap-6 px-8 py-8">
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              className="flex flex-col items-center gap-3 text-center text-xs font-semibold text-[#1b1b1b]"
              onClick={() => setActiveView("detail")}
            >
              <div className="h-24 w-24 overflow-hidden rounded-full border border-[#d8d0c8]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="leading-tight">{item.title}</span>
            </button>
          ))}
        </div>
      )}

      {activeView === "detail" && (
        <div className="px-8 py-8">
          <button
            type="button"
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6f645b]"
            onClick={() => setActiveView("grid")}
          >
            <FiArrowLeft />
            Back
          </button>

          <div className="flex flex-col items-center gap-4 text-center">
            <div className="h-20 w-20 overflow-hidden rounded-full border border-[#d8d0c8]">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
                alt="USA National Parks"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f645b]">
              USA National Parks
            </div>
            <div className="text-xs text-[#7a6f66]">
              Ranked by Total 2024 Visits
            </div>
            <div className="text-xl font-semibold text-[#1b1b1b]">
              {stats.visited}/{stats.total}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {parks.map((park) => (
              <div
                key={park.id}
                className="flex items-center justify-between rounded-2xl border border-[#ece7e2] px-4 py-4"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src={park.image}
                      alt={park.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1b1b1b]">
                      {park.name}
                    </p>
                    <p className="text-xs text-[#7a6f66]">{park.location}</p>
                  </div>
                </div>
                {park.status === "visited" ? (
                  <FiCheckCircle className="text-2xl text-[#22c55e]" />
                ) : (
                  <FiXCircle className="text-2xl text-[#e2332f]" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiences;
