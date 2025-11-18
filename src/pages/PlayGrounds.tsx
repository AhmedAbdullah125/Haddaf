import SideBar from "../components/Home/SideBar";
import { useState } from "react";
import PageTitl from "../components/Global/PageTitle";
import greenGound from "../assets/greenGound.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MatchesDisplay from "../components/Home/MatchesDisplay";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
const PlayGrounds = () => {
    return (
        <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
            <SideBar />
            <main className="w-calc100-340px">
                <PageTitl title="ادارة الملاعب " icon={greenGound} />
                <motion.div
                      initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    //make delay here
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className="flex items-center justify-between mb-8 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                        <LazyLoadImage src={greenGound} alt="Haddaf" className="w-6 h-auto object-contain" />
                        <h3 className="text-xl md:text-2xl font-semibold">عرض جميع الملاعب الخاصة بك</h3>
                    </div>
                    <Link to={`/playground/add`} className="bg-primary h-12 px-9 rounded-3xl flex items-center gap-2 text-white">
                        <GoPlus size={20} />

                        اضافة ملعب
                    </Link>
                </motion.div>
                <MatchesDisplay title="الملاعب" />
            </main>
        </div>
    );
};

export default PlayGrounds;
