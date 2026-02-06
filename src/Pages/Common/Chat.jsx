import React from "react";
import {
  FiSearch,
  FiSmile,
  FiImage,
  FiSend,
  FiMoreHorizontal
} from "react-icons/fi";

const Chat = () => {
  const chats = [
    {
      name: "Courtney Ribeiro",
      handle: "@courT",
      time: "11:32am",
      preview: "Where are you?",
    },
    {
      name: "Myla Ribeiro",
      handle: "@MylaR",
      time: "10:53am",
      preview: "Hi, I am headed out to the grocery...",
    },
    {
      name: "Matthew Beyey",
      handle: "@MattyB",
      time: "10:31am",
      preview: "Headed to Galloway saturday...",
      active: true,
    },
    {
      name: "Luke Sutton",
      handle: "@LukeS",
      time: "6:38am",
      preview: "When are you coming up...",
    },
    {
      name: "Zack Baratz",
      handle: "@ZackB",
      time: "1/1/2026",
      preview: "I am in FL for the winter.",
    },
    {
      name: "Adam Schlanger",
      handle: "@SCHLANG",
      time: "1/1/2026",
      preview: "When are you headed to NY? I...",
    },
    {
      name: "Scott Leonard",
      handle: "@SLeon",
      time: "12/18/2025",
      preview: "Nick, thanks for the holiday...",
    },
  ];

  return (
    <div className="flex h-full gap-6">
      <section className="w-[320px] shrink-0 overflow-hidden rounded-[28px] bg-white shadow-sm lg:h-[calc(100vh-4rem)]">
        <div className="border-b border-[#ece7e2] px-5 py-4">
          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#4b4036]">
            Chat
          </h2>
          <div className="mt-4 flex items-center gap-2 rounded-full bg-[#f6f4f2] px-3 py-2 text-xs text-[#7a6f66]">
            <FiSearch />
            <span>Search</span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={`h-10 w-10 rounded-full border ${
                  index === 0
                    ? "border-red-500"
                    : "border-[#d9d4cf] bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="max-h-[calc(100vh-12rem)] overflow-y-auto pb-6">
          {chats.map((chat) => (
            <div
              key={chat.name}
              className={`flex items-center gap-3 border-b border-[#efeae6] px-5 py-4 text-xs ${
                chat.active ? "bg-[#dfeeff]" : "bg-white"
              }`}
            >
              <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-[#7c66c2] to-[#efb3c4]">
                {chat.active && (
                  <span className="absolute -left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-red-500" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-[#1b1b1b]">{chat.name}</p>
                  <span className="text-[10px] text-[#7a6f66]">
                    {chat.time}
                  </span>
                </div>
                <p className="text-[10px] text-[#7a6f66]">{chat.handle}</p>
                <p className="mt-1 text-[11px] text-[#5f554c]">
                  {chat.preview}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-1 flex-col overflow-hidden rounded-[28px] bg-white shadow-sm lg:h-[calc(100vh-4rem)]">
        <div className="flex items-center gap-3 border-b border-[#ece7e2] px-6 py-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7c66c2] to-[#efb3c4]" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#1b1b1b]">
              Matthew Beyey
            </p>
            <p className="text-xs text-[#7a6f66]">@MattyB</p>
          </div>
          <button className="text-[#7a6f66]">
            <FiMoreHorizontal />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="flex justify-end">
            <div className="max-w-[320px] rounded-full bg-[#111111] px-4 py-2 text-xs text-white">
              This is the main chat template
            </div>
          </div>
          <p className="mt-3 text-center text-[10px] text-[#9b9086]">
            Jan 1, 2026, 9:41 AM
          </p>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#7c66c2] to-[#efb3c4]" />
              <div className="rounded-2xl bg-[#ececec] px-4 py-2 text-xs text-[#1b1b1b]">
                Oh?
              </div>
            </div>
            <div className="ml-12 inline-block rounded-2xl bg-[#ececec] px-4 py-2 text-xs text-[#1b1b1b]">
              Cool
            </div>
            <div className="ml-12 inline-block rounded-2xl bg-[#ececec] px-4 py-2 text-xs text-[#1b1b1b]">
              How does it work?
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <div className="rounded-2xl bg-[#111111] px-4 py-2 text-xs text-white">
              Boom!
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <div className="max-w-[260px] rounded-2xl bg-[#111111] px-4 py-3 text-xs text-white">
              You just edit any text to type in the conversation you want to
              show, and delete any bubbles you don&apos;t want to use
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#7c66c2] to-[#efb3c4]" />
              <div className="rounded-2xl bg-[#ececec] px-4 py-2 text-xs text-[#1b1b1b]">
                Hmmm
              </div>
            </div>
            <div className="ml-12 inline-block rounded-2xl bg-[#ececec] px-4 py-2 text-xs text-[#1b1b1b]">
              I think I get it
            </div>
            <div className="ml-12 inline-block rounded-2xl bg-[#ececec] px-4 py-2 text-xs text-[#1b1b1b]">
              Headed to Galloway saturday if you want to join?
            </div>
          </div>
        </div>

        <div className="border-t border-[#ece7e2] px-6 py-4">
          <div className="flex items-center gap-3 rounded-full border border-[#e1dad4] bg-white px-4 py-2 text-xs text-[#7a6f66]">
            <span className="flex-1">Message...</span>
            <button className="text-[#7a6f66]">
              <FiSmile />
            </button>
            <button className="text-[#7a6f66]">
              <FiImage />
            </button>
            <button className="text-[#7a6f66]">
              <FiSend />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chat;
