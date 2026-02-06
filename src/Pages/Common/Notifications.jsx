import React, { useMemo, useState } from "react";
import {
  FiUserPlus,
  FiUserCheck,
  FiRepeat,
  FiMessageCircle,
  FiHeart,
  FiBarChart2,
  FiShare2,
  FiMapPin,
} from "react-icons/fi";

const tabs = ["New Followers", "Reposts", "Likes", "Mentions"];

const rawNotifications = [
  {
    id: 1,
    name: "Courtney Ribeiro",
    handle: "@CourtR",
    date: "January 11, 2026",
    status: "follow",
  },
  {
    id: 2,
    name: "Myla Ribeiro",
    handle: "@MylaR",
    date: "January 8, 2026",
    status: "follow",
  },
  {
    id: 3,
    name: "Matthew Beyel",
    handle: "@MattyB",
    date: "January 7, 2026",
    status: "following",
  },
  {
    id: 4,
    name: "Luke Sutton",
    handle: "@LukeS",
    date: "January 7, 2026",
    status: "follow",
  },
];

const reposts = [
  {
    id: 1,
    reposter: "Matthew Beyel",
    reposterHandle: "@MattyB",
    author: "Nicholas Ribeiro",
    authorHandle: "@NCR1183",
    date: "11/24/2025",
    club1: "Sebonack Golf Club",
    club2: "Sebonack Golf Club",
    text:
      "The collaboration was almost unheard of. Doak shaped the wild, rumpled fairways and massive, windswept greens in the classic links style. Nicklaus added strategic bunkering and heroic carries that rewarded bold play creating a rare fusion of old-school ground game and modern aerial drama! #ThisIsSebonack",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    stats: { comments: 3, reposts: 6, likes: 0, views: 542 },
  },
  {
    id: 2,
    reposter: "Matthew Beyel",
    reposterHandle: "@MattyB",
    author: "Nicholas Ribeiro",
    authorHandle: "@NCR1183",
    date: "11/22/2025",
    text: "Anyone want to play golf with @MattyB and I in a few days?",
    image: null,
    stats: { comments: 0, reposts: 3, likes: 1, views: 256 },
  },
];

const likes = [
  {
    id: 1,
    liker: "Matthew Beyel",
    likerHandle: "@MattyB",
    author: "Nicholas Ribeiro",
    authorHandle: "@NCR1183",
    date: "11/24/2025",
    club1: "Sebonack Golf Club",
    club2: "Sebonack Golf Club",
    text:
      "The collaboration was almost unheard of. Doak shaped the wild, rumpled fairways and massive, windswept greens in the classic links style. Nicklaus added strategic bunkering and heroic carries that rewarded bold play creating a rare fusion of old-school ground game and modern aerial drama! #ThisIsSebonack",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    stats: { comments: 3, reposts: 6, likes: 1, views: 542 },
  },
  {
    id: 2,
    liker: "Matthew Beyel",
    likerHandle: "@MattyB",
    author: "Nicholas Ribeiro",
    authorHandle: "@NCR1183",
    date: "11/22/2025",
    text: "Anyone want to play golf with @MattyB and I in a few days?",
    image: null,
    stats: { comments: 0, reposts: 3, likes: 1, views: 256 },
  },
];

const mentions = [
  {
    id: 1,
    author: "Matthew Beyel",
    handle: "@MattyB",
    date: "11/24/2025",
    text:
      "Playing at Galloway with @NCR1183 on Saturday at 8am if anyone wants to join us!",
    stats: { comments: 3, reposts: 6, likes: 1, views: 542 },
  },
  {
    id: 2,
    author: "Matthew Beyel",
    handle: "@MattyB",
    date: "11/24/2025",
    text:
      "Playing at Galloway with @NCR1183 on Saturday at 8am if anyone wants to join us!",
    stats: { comments: 3, reposts: 6, likes: 1, views: 542 },
  },
  {
    id: 3,
    author: "Matthew Beyel",
    handle: "@MattyB",
    date: "11/24/2025",
    text:
      "Playing at Galloway with @NCR1183 on Saturday at 8am if anyone wants to join us!",
    stats: { comments: 3, reposts: 6, likes: 1, views: 542 },
  },
];

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("New Followers");
  const notifications = useMemo(() => rawNotifications, []);

  return (
    <div className="rounded-[28px] bg-white shadow-sm">
      <div className="flex items-center gap-8 border-b border-[#e8e2dc] px-8 pt-6 text-xs font-semibold uppercase tracking-[0.26em] text-[#6c6158]">
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

      {activeTab === "New Followers" && (
        <div className="divide-y divide-[#e8e2dc]">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center gap-4 px-8 py-5 sm:flex-nowrap"
            >
              <div className="h-14 w-14 shrink-0 rounded-full bg-[#c9c0b8]" />
              <div className="min-w-[180px]">
                <p className="text-sm font-semibold text-[#1b1b1b]">
                  {item.name}
                </p>
                <p className="text-xs text-[#7a6f66]">{item.handle}</p>
              </div>
              <div className="flex flex-1 items-center justify-between gap-3 sm:justify-end">
                <button
                  type="button"
                  className={[
                    "flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]",
                    item.status === "following"
                      ? "border-[#1b1b1b] text-[#1b1b1b]"
                      : "border-[#d8d0c8] text-[#5b4f46]",
                  ].join(" ")}
                >
                  {item.status === "following" ? (
                    <>
                      <FiUserCheck />
                      Following
                    </>
                  ) : (
                    <>
                      <FiUserPlus />
                      Follow
                    </>
                  )}
                </button>
                <div className="text-xs text-[#7a6f66]">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Reposts" && (
        <div className="divide-y divide-[#e8e2dc]">
          {reposts.map((post) => (
            <div key={post.id} className="px-8 py-6">
              <div className="flex items-center justify-between text-xs text-[#7a6f66]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#c9c0b8]" />
                  <div>
                    <span className="font-semibold text-[#1b1b1b]">
                      {post.reposter}
                    </span>{" "}
                    {post.reposterHandle}
                  </div>
                </div>
                <FiRepeat className="text-lg text-[#2b6df3]" />
              </div>

              <div className="mt-4 flex items-start gap-4">
                <div className="h-14 w-14 rounded-full bg-[#c9c0b8]" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#7a6f66]">
                    <span className="text-sm font-semibold text-[#1b1b1b]">
                      {post.author}
                    </span>
                    <span>{post.authorHandle}</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="mt-2 space-y-1 text-xs text-[#7a6f66]">
                    <div className="flex items-center gap-2">
                      <FiMapPin />
                      {post.club1}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin />
                      {post.club2}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#3e332c]">
                    {post.text}
                  </p>

                  {post.image && (
                    <div className="mt-4 overflow-hidden rounded-2xl border border-[#efeae6]">
                      <img
                        src={post.image}
                        alt="Golf course"
                        className="h-64 w-full object-cover"
                      />
                    </div>
                  )}

                <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[#7a6f66]">
                  <div className="flex items-center gap-2">
                    <FiMessageCircle />
                    {post.stats.comments}
                  </div>
                  <div className="flex items-center gap-2 text-[#2b6df3]">
                    <FiRepeat />
                    {post.stats.reposts}
                  </div>
                    <div className="flex items-center gap-2">
                      <FiHeart />
                      {post.stats.likes}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiBarChart2 />
                      {post.stats.views}
                    </div>
                    <FiShare2 />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Likes" && (
        <div className="divide-y divide-[#e8e2dc]">
          {likes.map((post) => (
            <div key={post.id} className="px-8 py-6">
              <div className="flex items-center justify-between text-xs text-[#7a6f66]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#c9c0b8]" />
                  <div>
                    <span className="font-semibold text-[#1b1b1b]">
                      {post.liker}
                    </span>{" "}
                    {post.likerHandle}
                  </div>
                </div>
                <FiHeart className="text-lg text-[#e2332f]" />
              </div>

              <div className="mt-4 flex items-start gap-4">
                <div className="h-14 w-14 rounded-full bg-[#c9c0b8]" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#7a6f66]">
                    <span className="text-sm font-semibold text-[#1b1b1b]">
                      {post.author}
                    </span>
                    <span>{post.authorHandle}</span>
                    <span>{post.date}</span>
                  </div>
                  {post.club1 && (
                    <div className="mt-2 space-y-1 text-xs text-[#7a6f66]">
                      <div className="flex items-center gap-2">
                        <FiMapPin />
                        {post.club1}
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin />
                        {post.club2}
                      </div>
                    </div>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-[#3e332c]">
                    {post.text}
                  </p>

                  {post.image && (
                    <div className="mt-4 overflow-hidden rounded-2xl border border-[#efeae6]">
                      <img
                        src={post.image}
                        alt="Golf course"
                        className="h-64 w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[#7a6f66]">
                    <div className="flex items-center gap-2">
                      <FiMessageCircle />
                      {post.stats.comments}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiRepeat />
                      {post.stats.reposts}
                    </div>
                    <div className="flex items-center gap-2 text-[#e2332f]">
                      <FiHeart />
                      {post.stats.likes}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiBarChart2 />
                      {post.stats.views}
                    </div>
                    <FiShare2 />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab !== "New Followers" &&
        activeTab !== "Reposts" &&
        activeTab !== "Likes" &&
        activeTab !== "Mentions" && (
          <div className="px-8 py-16 text-center text-sm text-[#9a8f85]">
            No activity to show yet.
          </div>
        )}

      {activeTab === "Mentions" && (
        <div className="divide-y divide-[#e8e2dc]">
          {mentions.map((item) => (
            <div key={item.id} className="px-8 py-5">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-full bg-[#c9c0b8]" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#7a6f66]">
                    <span className="text-sm font-semibold text-[#1b1b1b]">
                      {item.author}
                    </span>
                    <span>{item.handle}</span>
                    <span>{item.date}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#3e332c]">
                    {item.text.split("@NCR1183").map((part, index, array) => (
                      <React.Fragment key={`${item.id}-${index}`}>
                        {part}
                        {index < array.length - 1 && (
                          <span className="font-semibold text-[#2b6df3]">
                            @NCR1183
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[#7a6f66]">
                    <div className="flex items-center gap-2">
                      <FiMessageCircle />
                      {item.stats.comments}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiRepeat />
                      {item.stats.reposts}
                    </div>
                    <div className="flex items-center gap-2 text-[#e2332f]">
                      <FiHeart />
                      {item.stats.likes}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiBarChart2 />
                      {item.stats.views}
                    </div>
                    <FiShare2 />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
