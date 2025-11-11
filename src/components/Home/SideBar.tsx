import React, { useState } from "react";
import cornerBall from "@/assets/football.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { ImCancelCircle } from "react-icons/im";
import bars from "../../../src/assets/bars.svg";
import homeGray from "../../../src/assets/homeGray.svg";
import homeWhite from "../../../src/assets/homeWhite.svg";
import reportGray from "../../../src/assets/reportsGray.svg";
import reportWhite from "../../../src/assets/reportsWhite.svg";
import settingsGray from "../../../src/assets/settingsGray.svg";
import settingsWhite from "../../../src/assets/settingsWhite.svg";
import stadumGray from "../../../src/assets/stadumGray.svg";
import stadumWhite from "../../../src/assets/stadumWhite.svg";
import contactGray from "../../../src/assets/contactGray.svg";
import contactWhite from "../../../src/assets/contactWhite.svg";
import profileGray from "../../../src/assets/profileGrag.svg";
import profileWhite from "../../../src/assets/profileWhite.svg";
import notificationGray from "../../../src/assets/notificationGray.svg";
import notificationWhite from "../../../src/assets/notificationWhite.svg";
const SideBar = () => {
  const [open, setOpen] = useState(true)
  const { pathname } = useLocation();

  return (
    <aside
      dir="rtl"
      className={`SideBar flex-shrink-0 w-[288px] h-[calc(100vh-48px)] bg-white border border-gray-200 rounded-[48px] py-12 px-6 shadow-[0_4px_10px_0_rgba(46,173,0,0.25)]
      absolute lg:relative z-20 start-0
      transform transition-transform duration-300 ease-in-out
      ${open ? "translate-x-72" : "translate-x-0"} lg:translate-x-0
      `}
    >
      <div className=" w-full h-full flex flex-col items-stretch gap-10 relative ">
        <div className="flex lg:hidden   absolute top-10 -end-20 border shadow-[0_4px_10px_0_rgba(46,173,0,0.25)] w-14 h-14 cursor-pointer rounded-bars bg-white items-center justify-center z-10 " onClick={() => setOpen(!open)}>
          <LazyLoadImage src={bars} alt="bars" className="h-10 w-auto" />
        </div>


        <div className="links flex flex-col justify-between h-full">
          <div className="upper-part flex flex-col gap-6">
            <NavLink to="/" className={({ isActive }) => ["group hover:scale-105 ease-in-out duration-300 flex items-center gap-3 w-full rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}>
              {/* make home svg icon */}
              <LazyLoadImage src={pathname === "/" ? homeWhite : homeGray} alt="home" className="h-5 w-auto" />
              <span className="flex items-center gap-3">
                الرئيسية
              </span>
            </NavLink>

            <NavLink to="/playgrounds" className={({ isActive }) => ["group hover:scale-105 ease-in-out duration-300 flex items-center gap-3 w-full rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}>
              {/* make playGround svg icon */}
              <LazyLoadImage src={pathname === "/playgrounds" ? stadumWhite : stadumGray} alt="playGround" className="h-5 w-auto" />
              <span className="flex items-center gap-3">
                ادارة الملاعب
              </span>
            </NavLink>

            <NavLink to="/reports" className={({ isActive }) => ["group hover:scale-105 ease-in-out duration-300 flex items-center gap-3 w-full rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}>
              {/* make report svg icon */}
              <LazyLoadImage src={pathname === "/reports" ? reportWhite : reportGray} alt="report" className="h-5 w-auto" />
              <span className="flex items-center gap-3">
                التقارير
              </span>

            </NavLink>

            <NavLink to="/notifications" className={({ isActive }) => ["group hover:scale-105 ease-in-out duration-300 flex items-center gap-3 w-full  rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}>
              {/* make notification svg icon */}
              <LazyLoadImage src={pathname === "/notifications" ? notificationWhite : notificationGray} alt="notification" className="h-5 w-auto" />
              <span className="flex items-center gap-3">
                الاشعارات
              </span>
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => ["group hover:scale-105 ease-in-out duration-300 flex items-center gap-3 w-full  rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}>
              <LazyLoadImage src={pathname === "/contact" ? contactWhite : contactGray} alt="contact" className="h-5 w-auto" />
              <span className="flex items-center gap-3">
                تواصل معنا
              </span>
            </NavLink>

            <NavLink to="/profile" className={({ isActive }) => ["group hover:scale-105 ease-in-out duration-300 flex items-center gap-3 w-full rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}>
              <LazyLoadImage src={pathname === "/profile" ? profileWhite : profileGray} alt="profile" className="h-5 w-auto" />
              <span className="flex items-center gap-3">
                الملف الشخصي
              </span>
            </NavLink>

            <NavLink to="/settings" className={({ isActive }) => ["group hover:scale-105 ease-in-out duration-300 flex items-center gap-3 w-full rounded-full px-4 py-[17px] text-sm font-semibold transition", isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100",].join(" ")}>
              <LazyLoadImage src={pathname === "/settings" ? settingsWhite : settingsGray} alt="settings" className="h-5 w-auto" />
              <span className="flex items-center gap-3">
                الاعدادات
              </span>
            </NavLink>
          </div>


          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button type="button" className="flex items-center justify-start gap-3 text-red-600 hover:text-red-700 text-sm font-semibold" >
                {/* make logout svg icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
                <span>تسجيل الخروج</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-md w-full px-8 py-11 flex flex-col gap-12 items-center">
              <div className="absolute top-2 end-5 w-10 h-10 rounded-full p-1 hover:bg-red-700 hover:text-white flexCenter"
                onClick={() => { document.getElementById("cancel").click(); }}><ImCancelCircle size={28} /></div>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl font-semibold text-center">حذف الملعب </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription className="font-medium text-xl text-center text-777">
                ستقوم بالخروج من الحساب
              </AlertDialogDescription>
              <AlertDialogFooter className="w-full flex gap-4">
                <AlertDialogCancel className="hidden" id="cancel">إلغاء</AlertDialogCancel>
                <AlertDialogAction className="text-white bg-D10000 w-full h-12 rounded-3xl text-center">تأكيد الخروج </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <LazyLoadImage src={cornerBall} alt="cornerBall" className="pointer-events-none select-none absolute bottom-0 end-0 w-28 h-28 z-10 rounded-[48px]" />
    </aside>
  );
};

export default SideBar;