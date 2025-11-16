import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
const DisplayProfile = ({ data }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            //make delay here
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="max-w-96 flex flex-col items-center gap-6">
            <LazyLoadImage src={data?.image} alt="profileImg" className="w-28 h-28 rounded-full mb-2 object-cover" />
            <div className="flex flex-col gap-4 w-full">
                <span className="text-lg font-medium">الاسم بالكامل</span>
                <div className="w-full h-12 border border-[#777] rounded-3xl px-4 flex items-center">
                    {data?.name}
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <span className="text-lg font-medium">رقم الجوال</span>
                <div className="w-full h-12 border border-[#777] rounded-3xl px-4 flex items-center">
                    {data?.phone}
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <span className="text-lg font-medium">رقم الهوية</span>
                <div className="w-full h-12 border border-[#777] rounded-3xl px-4 flex items-center">
                    {data?.identity_number}
                </div>
            </div>
        </motion.div>
    );
};

export default DisplayProfile;
