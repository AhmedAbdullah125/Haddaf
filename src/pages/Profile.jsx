import SideBar from "../components/Home/SideBar";
import settings from "../assets/settings.svg";
import PageTitl from "../components/Global/PageTitle";
import { useState } from "react";
import DisplayProfile from "../components/profile/DisplayProfile";
import EditProfile from "../components/profile/EditProfile";
import { motion } from "framer-motion";
const Profile = () => {
    const [mode, setMode] = useState("display");
    return (
        <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
            <SideBar />
            <main className="md:w-calc100-340px w-full">
                <PageTitl title="الاعدادات " icon={settings} />
                <div className="flex flex-col gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        //make delay here
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0 }}
                        className="flex bg-0691290D w-fit rounded-full h-12 gap-6  items-center">
                        <button className={`${mode === "display" ? "bg-primary text-white" : "text-[#00000099]"} text-xl font-medium rounded-full h-full px-10`} onClick={() => setMode("display")}>الملف الشخصي</button>
                        <button className={`${mode === "edit" ? "bg-primary text-white" : "text-[#00000099]"} text-xl font-medium rounded-full h-full px-10`} onClick={() => setMode("edit")}>تعديل الملف الشخصي</button>
                    </motion.div>
                    {mode === "display" ?
                        <DisplayProfile />
                        :
                        <EditProfile />
                    }
                </div>
            </main >
        </div >
    );
};

export default Profile;
