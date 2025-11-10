import SideBar from "../components/Home/SideBar";
import phone from "../assets/phone.svg";
import PageTitl from "../components/Global/PageTitle";
import PasswordUpdateForm from "../components/Settings/PasswordUpdateForm";
import { motion } from "framer-motion";
const PhoneUpdate = () => {
    return (
        <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
            <SideBar />
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                 className="md:w-calc100-340px w-full">
                <PageTitl title="الاعدادات " icon={phone} />
                <PasswordUpdateForm title="تعديل كلمة المرور" icon={phone} />
            </motion.div>
        </div>
    );
};

export default PhoneUpdate;
