
import PhoneUpdateForm from "../components/Settings/PhoneUpdateForm";
import PhoneOTPForm from "../components/Settings/PhoneOTPForm";
import { useState } from "react";
import { motion } from "framer-motion";
import SideBar from "../components/Home/SideBar";
import phone from "../assets/phone.svg";
import PageTitl from "../components/Global/PageTitle";
const PhoneUpdateWrapper = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        mobile: "",
        password: "",
    })
    

    return (
        <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
            <SideBar />
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="md:w-calc100-340px w-full">
                <PageTitl title="تعديل رقم الجوال" icon={phone} />
                {
                    step === 1 ?
                        <PhoneUpdateForm title="تعديل رقم الجوال" icon={phone} formData={formData} setFormData={setFormData} setStep={setStep} />
                        :
                        <PhoneOTPForm title="تعديل رقم الجوال" icon={phone} formData={formData} setFormData={setFormData} setStep={setStep} />
                }
            </motion.div>
        </div>
    );
};

export default PhoneUpdateWrapper;
