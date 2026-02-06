import React, { useMemo, useState } from "react";
import {
  FiUser,
  FiMail,
  FiUsers as FiUsersGroup,
  FiLink,
  FiCalendar,
  FiMessageCircle,
  FiRepeat,
  FiHeart,
  FiBarChart2,
  FiShare2,
  FiMapPin,
  FiMessageSquare,
  FiClock,
  FiClipboard,
  FiCalendar as FiCalendarIcon,
  FiUsers,
  FiCreditCard,
  FiList,
  FiCoffee
} from "react-icons/fi";

function Profile() {
  const tabs = useMemo(
    () => [
      "Information",
      "Posts",
      "Replies",
      "Media",
      "Marketplace",
      "Experiences",
      "Club Member",
    ],
    []
  );
  const [activeTab, setActiveTab] = useState("Information");

  const posts = [
    {
      id: 1,
      date: "11/24/2025",
      text:
        "The collaboration was almost unheard of. Doak shaped the wild, rumpled fairways and massive, windswept greens in the classic links style. Nicklaus added strategic bunkering and heroic carries that rewarded bold play creating a rare fusion of old-school ground game and modern aerial drama! #ThisIsSebonack",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      stats: { comments: 3, reposts: 6, likes: 0, views: 542 },
    },
  ];

  const replies = [
    {
      id: 1,
      author: "Matthew Beyel",
      handle: "@MattyB",
      date: "12/14/2025",
      text:
        "I am home this weekend and likely playing Galloway National Saturday at 8am. Anyone out in the wind care to join me??",
      reply: "@MattyB you know I am there!",
      stats: { comments: 3, reposts: 0, likes: 12, views: 245 },
    },
    {
      id: 2,
      author: "Matthew Beyel",
      handle: "@MattyB",
      date: "12/14/2025",
      text:
        "I am home this weekend and likely playing Galloway National Saturday at 8am. Anyone out in the wind care to join me??",
      reply: "@MattyB you know I am there!",
      stats: { comments: 3, reposts: 0, likes: 12, views: 245 },
    },
  ];

  const media = [
    "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
  ];

  const clubFeatures = [
    { id: 1, label: "Club Chats", icon: FiMessageSquare },
    { id: 2, label: "Tee Times", icon: FiClock },
    { id: 3, label: "Club Calendar", icon: FiCalendarIcon },
    { id: 4, label: "Club Roster", icon: FiUsers },
    { id: 5, label: "Club Events", icon: FiClipboard },
    { id: 6, label: "Member Billing", icon: FiCreditCard },
    { id: 7, label: "Leaderboards", icon: FiList },
    { id: 8, label: "Club Dining", icon: FiCoffee },
    { id: 9, label: "Club GPS", icon: FiMapPin },
  ];

  return (
    <div className="rounded-[28px] bg-white shadow-sm">
      <div className="relative h-56 rounded-t-[28px] border-b border-[#e6dfd9]">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
          alt="Cover"
          className="h-full w-full rounded-t-[28px] object-cover"
        />
      </div>

      <div className="px-6 pb-6">
        <div className="-mt-10 flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-end gap-4">
            <div className="h-20 w-20 rounded-full border-4 border-white bg-gradient-to-br from-[#7c66c2] to-[#efb3c4]" />
            <div>
              <p className="text-lg font-bold uppercase">Nicholas Ribeiro</p>
              <p className="text-xs font-semibold uppercase text-[#7a6f66]">
                @NCR1183
              </p>
              <p className="mt-1 text-xs text-[#7a6f66]">
                Bio: Golf addict traveling anywhere for golf
              </p>
              <div className="mt-2 flex flex-wrap gap-4 text-xs text-[#7a6f66]">
                <span className="flex items-center gap-1">
                  <FiLink />
                  Website
                </span>
                <span className="flex items-center gap-1">
                  <FiCalendar />
                  Joined November 2025
                </span>
              </div>
              <div className="mt-3 flex gap-6 text-xs font-semibold">
                <span>623 Following</span>
                <span>3,789 Followers</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d0c8] text-[#5b4f46]">
              <FiUsersGroup />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d0c8] text-[#5b4f46]">
              <FiMail />
            </button>
            <button className="rounded-full border border-[#1b1b1b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              Following
            </button>
          </div>
        </div>

        <div className="mt-6 border-b border-[#ece7e2] text-xs font-semibold uppercase tracking-[0.2em] text-[#5a4f45]">
          <div className="flex flex-wrap gap-6">
            {tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  className={[
                    "pb-3",
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
        </div>

        {activeTab === "Information" && (
          <div className="mt-6 space-y-8 text-sm text-[#4f453d]">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase text-[#6f645b]">
                Name:
                <span className="ml-2 font-normal text-[#1b1b1b]">
                  Nicholas Ribeiro
                </span>
              </p>
              <p className="text-xs font-semibold uppercase text-[#6f645b]">
                Primary Address:
                <span className="ml-2 font-normal text-[#1b1b1b]">
                  1552 Schuylkill Ave, Reading PA 19601
                </span>
              </p>
              <p className="text-xs font-semibold uppercase text-[#6f645b]">
                Cell Phone:
                <span className="ml-2 font-normal text-[#1b1b1b]">
                  610-207-9563
                </span>
              </p>
              <p className="text-xs font-semibold uppercase text-[#6f645b]">
                Email:
                <span className="ml-2 font-normal text-[#1b1b1b]">
                  Nick114920@gmail.com
                </span>
              </p>
              <p className="text-xs font-semibold uppercase text-[#6f645b]">
                GHIN#:
                <span className="ml-2 font-normal text-[#1b1b1b]">
                  2618516
                </span>
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-[#6f645b]">
                Club Member:
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {["A", "B", "C"].map((item) => (
                  <div
                    key={item}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8d0c8] bg-white text-xs font-semibold text-[#6f645b]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-[#6f645b]">
                Relatives:
              </p>
              <div className="mt-4 flex gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-12 w-12 rounded-full bg-[#c9c0b8]"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "Posts" && (
          <div className="mt-6 space-y-6">
            {posts.map((post) => (
              <article key={post.id} className="rounded-2xl border border-[#ece7e2] p-4">
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7c66c2] to-[#efb3c4]" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#7a6f66]">
                      <span className="font-semibold text-[#1b1b1b]">
                        Nicholas Ribeiro
                      </span>
                      <span>@NCR1183</span>
                      <span>{post.date}</span>
                    </div>
                    <p className="mt-2 text-xs text-[#6f645b]">{post.text}</p>
                    {post.image && (
                      <div className="mt-4 overflow-hidden rounded-2xl border border-[#efeae6]">
                        <img
                          src={post.image}
                          alt="Golf course"
                          className="h-72 w-full object-cover"
                        />
                      </div>
                    )}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[#7a6f66]">
                      <div className="flex items-center gap-2">
                        <FiMessageCircle />
                        <span>{post.stats.comments}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiRepeat />
                        <span>{post.stats.reposts}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiHeart />
                        <span>{post.stats.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiBarChart2 />
                        <span>{post.stats.views}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiShare2 />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {activeTab === "Replies" && (
          <div className="mt-6 space-y-6">
            {replies.map((reply) => (
              <article key={reply.id} className="rounded-2xl border border-[#ece7e2] p-4">
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7c66c2] to-[#efb3c4]" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#7a6f66]">
                      <span className="font-semibold text-[#1b1b1b]">
                        {reply.author}
                      </span>
                      <span>{reply.handle}</span>
                      <span>{reply.date}</span>
                    </div>
                    <p className="mt-2 text-xs text-[#6f645b]">
                      {reply.text}
                    </p>
                    <div className="mt-3 rounded-xl border border-[#ece7e2] bg-[#f8f5f2] px-3 py-2 text-xs text-[#4f453d]">
                      <span className="font-semibold text-[#2b6df3]">
                        {reply.reply.split(" ")[0]}
                      </span>{" "}
                      {reply.reply.split(" ").slice(1).join(" ")}
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[#7a6f66]">
                      <div className="flex items-center gap-2">
                        <FiMessageCircle />
                        <span>{reply.stats.comments}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiRepeat />
                        <span>{reply.stats.reposts}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#e2332f]">
                        <FiHeart />
                        <span>{reply.stats.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiBarChart2 />
                        <span>{reply.stats.views}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiShare2 />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {activeTab === "Media" && (
          <div className="mt-6 grid grid-cols-3 gap-3">
            {media.map((img, index) => (
              <div
                key={`${img}-${index}`}
                className="aspect-square overflow-hidden rounded-2xl border border-[#ece7e2]"
              >
                <img
                  src={img}
                  alt="Media"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === "Club Member" && (
          <div className="mt-6 space-y-8">
            <div className="grid grid-cols-3 gap-6">
              {clubFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="flex flex-col items-center gap-3 rounded-2xl border border-[#ece7e2] py-6 text-center text-xs font-semibold text-[#4f453d]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d8d0c8] text-2xl text-[#1b1b1b]">
                      <Icon />
                    </div>
                    {feature.label}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab !== "Information" &&
          activeTab !== "Posts" &&
          activeTab !== "Replies" &&
          activeTab !== "Media" &&
          activeTab !== "Club Member" && (
            <div className="mt-6 rounded-2xl border border-dashed border-[#e3ded8] py-16 text-center text-sm text-[#9a8f85]">
              No content yet.
            </div>
          )}
      </div>
    </div>
  );
}

export default Profile;
