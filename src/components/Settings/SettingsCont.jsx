import React, { useEffect, useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { ImCancelCircle } from "react-icons/im";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch"
import { Link, useNavigate } from "react-router-dom";
import { useGetProfileData } from '../hooks/useGetProfileData'
import Loading from '../Loading'
import { toggleNotification } from "../requests/toggleNotification";
import { deleteAccount } from "../requests/deleteAccount";
const IconBell = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 18.75a2.25 2.25 0 01-4.5 0m9-6v-1.5a6.75 6.75 0 10-13.5 0v1.5a3 3 0 01-.879 2.121L3.75 16.5h16.5l-1.621-1.629A3 3 0 0118.75 12.75z" />
    </svg>
);
const IconPhone = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.757a2.25 2.25 0 00-1.743-2.183l-3.036-.76a2.25 2.25 0 00-2.138.65l-.97.97a12.035 12.035 0 01-5.303-5.303l.97-.97a2.25 2.25 0 00.65-2.138L7.44 3.993A2.25 2.25 0 005.257 2.25H3.5A2.25 2.25 0 001.25 4.5v2.25z" />
    </svg>
);
const IconLock = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V7.125a4.125 4.125 0 10-8.25 0V10.5M6.75 10.5h10.5A2.25 2.25 0 0119.5 12.75v6a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18.75v-6A2.25 2.25 0 016.75 10.5z" />
    </svg>
);
const IconInfo = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9h1.5m-1.5 3h1.5m-1.5 3h1.5M12 3.75a8.25 8.25 0 110 16.5 8.25 8.25 0 010-16.5z" />
    </svg>
);
const IconPencil = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a1.5 1.5 0 012.121 2.121l-11.1 11.1a4.5 4.5 0 01-1.591.986l-2.25.75.75-2.25a4.5 4.5 0 01.986-1.591l11.084-11.116z" />
    </svg>
);
const IconDoc = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-6.75a2.25 2.25 0 00-2.25-2.25h-6.75M8.25 21.75h7.5a2.25 2.25 0 002.25-2.25v-9l-6-6h-3.75A2.25 2.25 0 006 6.75v12.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
);
const IconTrash = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 7.5h12M9 7.5V6a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 6v1.5m-7.5 0h10.5m-9 3v6m3-6v6m3-6v6M6.75 7.5l.75 12a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5l.75-12" />
    </svg>
);
const IconChevronLeft = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const SettingsCont = () => {
    const { data, isLoading } = useGetProfileData();
    const [isNotifEnabled, setIsNotifEnabled] = useState(data?.is_notify);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setIsNotifEnabled(data?.is_notify);
    }, [data]);
    console.log(data);
    const items = [
        { id: 2, title: "تعديل رقم الجوال", Icon: IconPhone, href: "/phone_update" },
        { id: 3, title: "تعديل كلمة المرور", Icon: IconLock, href: "/password_update" },
        { id: 4, title: "من نحن", Icon: IconInfo, href: "/about" },
        { id: 5, title: "الشروط و الاحكام", Icon: IconPencil, href: "/terms_and_conditions" },
        { id: 6, title: "سياسة الخصوصية", Icon: IconDoc, href: "/privacy_policy" },
    ];
    const handleChangeNotification = (e) => {
        setIsNotifEnabled(e);
        toggleNotification({ setLoading });
    };
    const navigate = useNavigate();
    const handleDeleteAccount = () => {
        deleteAccount(setLoading, navigate);
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            //make delay here
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="py-8 px-6 border shadow-[0_4px_10px_0_rgba(46,173,0,0.25)] border-black/10 rounded-3xl">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900">اعدادات الحساب</h3>
            </div>
            {
                isLoading ? <Loading /> :
                    <>

                        <div className="flex flex-col divide-y divide-gray-100">
                            <div className="flex items-center justify-between py-4">
                                <div className="flex items-center gap-3">
                                    <IconBell className="w-5 h-5 text-gray-500 " />
                                    <span className="text-gray-900 font-medium">تفعيل الاشعارات</span>
                                </div>

                                <Switch id="airplane-mode" style={{ direction: "ltr" }} onCheckedChange={(e) => handleChangeNotification(e)} checked={isNotifEnabled} />
                            </div>

                            {items.map(({ id, title, Icon, href }) => (
                                <Link to={href} key={id} className="flex items-center justify-between py-4">
                                    <div className="flex items-center gap-3">
                                        <Icon className="w-5 h-5 text-gray-500" />
                                        <span className="text-gray-900 font-medium">{title}</span>
                                    </div>
                                    <IconChevronLeft className="w-5 h-5 text-gray-500" />
                                </Link>
                            ))}
                        </div>


                        <AlertDialog>
                            <AlertDialogTrigger asChild className="flex items-center w-full justify-between pt-6 py-4">
                                <div className="flex items-center w-full justify-between pt-6">
                                    <button type="button" className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium">
                                        <IconTrash className="w-5 h-5" />
                                        <span>حذف الحساب نهائيا</span>
                                    </button>
                                    <IconChevronLeft className="w-5 h-5 text-red-600" />
                                </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="max-w-md w-full px-8 py-11 flex flex-col gap-12 items-center">
                                <div className="absolute top-2 end-5 w-10 h-10 rounded-full p-1 hover:bg-red-700 hover:text-white flexCenter"
                                    onClick={() => {
                                        document.getElementById("cancel").click();
                                    }}
                                ><ImCancelCircle size={28} /></div>
                                <AlertDialogHeader>
                                    <AlertDialogTitle className="text-2xl font-semibold text-center">حذف الحساب </AlertDialogTitle>
                                </AlertDialogHeader>

                                <AlertDialogDescription className="font-medium text-xl text-center text-777">
                                    سوف تقوم بحذف حسابك الشخصي
                                </AlertDialogDescription>
                                <AlertDialogFooter className="w-full flex gap-4">
                                    <AlertDialogCancel className="hidden" id="cancel">إلغاء</AlertDialogCancel>
                                    <AlertDialogAction className="text-white bg-D10000 w-full h-12 rounded-3xl text-center" onClick={handleDeleteAccount}>حذف</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </>
            }
        </motion.div>
    );
};

export default SettingsCont;
