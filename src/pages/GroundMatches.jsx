import SideBar from "../components/Home/SideBar";
import { useState } from "react";
import PageTitl from "../components/Global/PageTitle";
import greenGound from "../assets/greenGound.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import MatchesDisplayTable from "../components/Home/MatchesDisplayTable";
const GroundMatches = () => {
    return (
        <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
            <SideBar />
            <main className="w-calc100-340px">
                <PageTitl title="ادارة الملاعب " icon={greenGound} />
                <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                        <LazyLoadImage src={greenGound} alt="" className="w-6 h-auto object-contain" />
                        <h3 className="text-xl md:text-2xl font-semibold">عرض جميع المباريات الخاصة بملعب النخيل</h3>
                    </div>
                    <Link to={`/match/add`} className="bg-primary h-12 px-9 rounded-3xl flex items-center gap-2 text-white">
                        <GoPlus size={20} />
                        اضافة المباراة
                    </Link>
                </div>
                <MatchesDisplayTable />
            </main>
        </div>
    );
};

export default GroundMatches;
