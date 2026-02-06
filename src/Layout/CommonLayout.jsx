import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiBell,
  FiMessageSquare,
  FiUsers,
  FiGlobe,
  FiShoppingBag,
  FiBarChart2,
  FiAward,
  FiSettings,
  FiUser,
  FiUserPlus
} from "react-icons/fi";

const CommonLayout = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const isChat = location.pathname.startsWith("/chat");

  const navItemClass = (active) =>
    [
      "flex w-full items-center gap-3 rounded-full px-4 py-2",
      active ? "bg-[#f1ede9] text-[#1b1b1b]" : "hover:bg-[#f6f4f2]",
    ].join(" ");

  return (
    <div className="min-h-screen bg-[#f6f4f2] text-[#1b1b1b]">
      <div className="mx-auto flex w-full max-w-[1300px] gap-6 px-4 py-8">
        <aside className="hidden w-[240px] shrink-0 rounded-[28px] bg-white px-6 py-8 shadow-sm lg:block">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full border-2 border-[#1b1b1b] bg-[#f1d7c5]">
              <div className="flex h-full items-center justify-center text-lg font-bold text-[#1b1b1b]">
                G
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#8b7b6e]">
                Golf
              </p>
              <p className="text-lg font-semibold">Clubhouse</p>
            </div>
          </div>

          <nav className="mt-10 space-y-4 text-sm font-semibold text-[#4a3f36]">
            <NavLink to="/home" className={navItemClass(isActive("/home"))}>
              <FiHome className="text-lg" />
              Home
            </NavLink>
            <NavLink to="/search" className={navItemClass(isActive("/search"))}>
              <FiSearch className="text-lg" />
              Search
            </NavLink>
            <NavLink
              to="/notifications"
              className={navItemClass(isActive("/notifications"))}
            >
              <FiBell className="text-lg" />
              Notifications
            </NavLink>
            <NavLink to="/chat" className={navItemClass(isActive("/chat"))}>
              <FiMessageSquare className="text-lg" />
              Chats
            </NavLink>
            <NavLink to="/clubs" className={navItemClass(isActive("/clubs"))}>
              <FiUsers className="text-lg" />
              Clubs
            </NavLink>
            <NavLink
              to="/experiences"
              className={navItemClass(isActive("/experiences"))}
            >
              <FiGlobe className="text-lg" />
              Experiences
            </NavLink>
            <button className="flex w-full items-center gap-3 rounded-full px-4 py-2 hover:bg-[#f6f4f2]">
              <FiShoppingBag className="text-lg" />
              Marketplace
            </button>
            <button className="flex w-full items-center gap-3 rounded-full px-4 py-2 hover:bg-[#f6f4f2]">
              <FiBarChart2 className="text-lg" />
              Leaderboards
            </button>
            <button className="flex w-full items-center gap-3 rounded-full px-4 py-2 hover:bg-[#f6f4f2]">
              <FiAward className="text-lg" />
              Trophy Room
            </button>
            <button className="flex w-full items-center gap-3 rounded-full px-4 py-2 hover:bg-[#f6f4f2]">
              <FiSettings className="text-lg" />
              Settings
            </button>
          </nav>

          <button className="mt-8 w-full rounded-full bg-[#0b2b6a] px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow">
            Post
          </button>

          <NavLink
            to="/profile"
            className={navItemClass(isActive("/profile")) + " mt-6"}
          >
            <div className="h-10 w-10 rounded-full bg-[#d9d4cf]" />
            <div className="text-sm font-semibold">Profile</div>
            <FiUser className="ml-auto text-lg text-[#6d6158]" />
          </NavLink>

          <button className="mt-8 w-full rounded-full bg-[#0b2b6a] px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow">
            Log Out
          </button>
        </aside>

        <main
          className={
            isChat
              ? "flex-1 lg:h-[calc(100vh-4rem)]"
              : "flex-1 overflow-y-auto lg:h-[calc(100vh-4rem)]"
          }
        >
          <Outlet />
        </main>

        {!isChat && (
          <aside className="hidden w-[260px] shrink-0 overflow-y-auto rounded-[28px] bg-white px-6 py-8 shadow-sm lg:block lg:h-[calc(100vh-4rem)]">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a4f45]">
            Who To Follow
          </div>
          <div className="mt-6 space-y-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-2xl bg-[#f6f4f2] px-3 py-3"
              >
                <div className="h-12 w-12 rounded-full bg-[#c9c0b8]" />
                <div className="flex-1 text-sm">
                  <p className="font-semibold text-[#1b1b1b]">David Altman</p>
                  <p className="text-xs text-[#7a6f66]">@DAltman</p>
                </div>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8d0c8] text-[#5b4f46]">
                  <FiUserPlus />
                </button>
              </div>
            ))}
          </div>
        </aside>
        )}
      </div>
    </div>
  );
};

export default CommonLayout;
