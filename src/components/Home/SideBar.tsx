import React from "react";
import logo from "@/assets/logo.png";
import cornerBall from "@/assets/football.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside
      dir="rtl"
      className="SideBar relative overflow-hidden w-[288px] h-[calc(100vh-48px)] bg-white border border-gray-200 rounded-[48px] py-12 px-6 flex flex-col items-stretch gap-10 shadow-[0_4px_10px_0_rgba(46,173,0,0.25)]"
    >
      <div className="flex items-center justify-center">
        <LazyLoadImage src={logo} alt="logo" className="h-10 w-auto" />
      </div>

      <div className="links flex flex-col justify-between h-full">
        <div className="upper-part flex flex-col gap-6">
          <NavLink to="/" className={({ isActive }) => ["group flex items-center gap-3 w-full justify-between rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}>
            {/* make home svg icon */}
            <span className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-5" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span>الرئيسية</span>
            </span>
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white hidden group-[.active]:inline-block"
              aria-hidden
            >
              •
            </span>
          </NavLink>

          <NavLink to="/playgrounds" className={({ isActive }) => ["group flex items-center gap-3 w-full justify-between rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}>
            {/* make playGround svg icon */}
            <span className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span>ادارة الملاعب</span>
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white hidden group-[.active]:inline-block" aria-hidden>
              •
            </span>
          </NavLink>

          <NavLink to="/reports" className={({ isActive }) => ["group flex items-center gap-3 w-full justify-between rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}>
            <span className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h12.75M3 9h12.75M3 13.5h9M18 8.25l3 3-6 6H12v-3l6-6z"
                />
              </svg>
              <span>التقارير</span>
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white hidden group-[.active]:inline-block" aria-hidden>
              •
            </span>
          </NavLink>

          <NavLink to="/notifications" className={({ isActive }) => ["group flex items-center gap-3 w-full justify-between rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}> 
            <span className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 18.75a2.25 2.25 0 01-4.5 0m9-6v-1.5a6.75 6.75 0 10-13.5 0v1.5a3 3 0 01-.879 2.121L3.75 16.5h16.5l-1.621-1.629A3 3 0 0118.75 12.75z"
                />
              </svg>
              <span>الاشعارات</span>
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white hidden group-[.active]:inline-block" aria-hidden>
              •
            </span>
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => ["group flex items-center gap-3 w-full justify-between rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}> 
            <span className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H6.75l-4.5 4.5V4.5A2.25 2.25 0 014.5 2.25h15a2.25 2.25 0 012.25 2.25z"
                />
              </svg>
              <span>تواصل معنا</span>
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white hidden group-[.active]:inline-block" aria-hidden>
              •
            </span>
          </NavLink>

          <NavLink to="/profile" className={({ isActive }) => ["group flex items-center gap-3 w-full justify-between rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}> 
            <span className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span>الملف الشخصي</span>
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white hidden group-[.active]:inline-block" aria-hidden>
              •
            </span>
          </NavLink>

          <NavLink to="/settings" className={({ isActive }) => ["group flex items-center gap-3 w-full justify-between rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}> 
            <span className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.781l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149a1.59 1.59 0 00-.93.78 1.125 1.125 0 00.107 1.205l.527.737c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.93l-.149.893c-.09.543-.56.94-1.11.94H11.45c-.55 0-1.02-.397-1.11-.94l-.149-.893a1.59 1.59 0 00-.78-.93c-.424-.165-.764-.478-.93-.781-.165-.398-.142-.854.108-1.204l.527-.737a1.125 1.125 0 00-.12-1.45l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.272-.806.107-1.204-.165-.397-.505-.71-.93-.781l-.894-.15c-.542-.09-.94-.56-.94-1.109V4.833c0-.55.398-1.02.94-1.11l.894-.148z"
                />
              </svg>
              <span>الاعدادات</span>
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white hidden group-[.active]:inline-block" aria-hidden>
              •
            </span>
          </NavLink>
        </div>

        <button
          type="button"
          className="flex items-center justify-start gap-3 text-red-600 hover:text-red-700 text-sm font-semibold"
        >
          {/* make logout svg icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>
          <span>تسجيل الخروج</span>
        </button>
      </div>
      <LazyLoadImage src={cornerBall} alt="cornerBall" className="pointer-events-none select-none absolute bottom-0 end-0 w-28 h-28 z-10"/>
    </aside>
  );
};

export default SideBar;