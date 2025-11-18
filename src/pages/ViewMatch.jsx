import SideBar from "../components/Home/SideBar";
import PageTitl from "../components/Global/PageTitle";
import greenGound from "../assets/greenGound.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MatchesDisplayT from "../components/Home/MatchesDisplayT";
import { motion } from "framer-motion";

const ViewMatch = () => {
   
    return (
        <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
            <SideBar />
            <main className="w-calc100-340px">
                <PageTitl title="ادارة الملاعب " icon={greenGound} />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    //make delay here
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className=" mb-8">
                    <div className="flex items-center gap-2">
                        <LazyLoadImage src={greenGound} alt="Haddaf" className="w-6 h-auto object-contain" />
                        <h3 className="text-xl md:text-2xl font-semibold">تفاصيل المبارة</h3>
                    </div>
                    <MatchesDisplayT />
                </motion.div>
            </main>
        </div>
    );
};

export default ViewMatch;
