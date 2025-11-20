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
import about from "@/assets/abdout.svg"
import notification from "@/assets/notificationGray.svg"
import terms from "@/assets/termsg.svg"
import phone from "@/assets/phoneg.svg"
import password from "@/assets/password.svg"
import privacy from "@/assets/bars.svg"
import deleteIcon from "@/assets/delete.svg"
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
    const items = [
        { id: 2, title: "تعديل رقم الجوال", Icon: phone, href: "/phone_update" },
        { id: 3, title: "تعديل كلمة المرور", Icon: password, href: "/password_update" },
        { id: 4, title: "من نحن", Icon: about, href: "/about" },
        { id: 5, title: "الشروط و الاحكام", Icon: terms, href: "/terms_and_conditions" },
        { id: 6, title: "سياسة الخصوصية", Icon: privacy, href: "/privacy_policy" },
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
                isLoading || loading ? <Loading /> :
                    <>

                        <div className="flex flex-col divide-y divide-gray-100">
                            <div className="flex items-center justify-between py-4">
                                <div className="flex items-center gap-3">
                                    <img src={notification} alt="haddaf" className="h-6 w-6 object-contain" />
                                    <span className="text-gray-900 font-medium">تفعيل الاشعارات</span>
                                </div>

                                <Switch id="airplane-mode" style={{ direction: "ltr" }} onCheckedChange={(e) => handleChangeNotification(e)} checked={isNotifEnabled} />
                            </div>

                            {items.map(({ id, title, Icon, href }) => (
                                <Link to={href} key={id} className="flex items-center justify-between py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={Icon} alt="haddaf" className="h-6 w-6 object-contain" />
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
                                        <img src={deleteIcon} alt="haddaf" className="h-6 w-6 object-contain" />
                                        <span>حذف الحساب نهائيا</span>
                                    </button>
                                    <IconChevronLeft className="w-5 h-5 text-red-600" />
                                </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="max-w-md w-full px-8 py-11 flex flex-col gap-12 items-center">
                                <div className="absolute top-2 end-5 w-10 h-10 rounded-full p-1 hover:text-white flexCenter"
                                    onClick={() => {
                                        document.getElementById("cancel").click();
                                    }}
                                ><ImCancelCircle color="#2EAD00" size={28} /></div>
                                <AlertDialogHeader>
                                    <AlertDialogTitle className="text-2xl font-semibold text-center">حذف الحساب </AlertDialogTitle>
                                </AlertDialogHeader>

                                <AlertDialogDescription className="font-medium text-xl text-center text-777">
                                    سوف تقوم بحذف حسابك الشخصي
                                </AlertDialogDescription>
                                <AlertDialogFooter className="w-full flex gap-4">
                                    <AlertDialogAction className="text-white bg-D10000 hover:bg-black hover:text-white w-full h-12 rounded-3xl text-center" onClick={handleDeleteAccount}>حذف</AlertDialogAction>
                                    <AlertDialogCancel className="text-white cancel-btn hover:bg-black hover:text-white w-fit h-12 rounded-3xl text-center" id="cancel">تراجع</AlertDialogCancel>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </>
            }
        </motion.div>
    );
};

export default SettingsCont;
