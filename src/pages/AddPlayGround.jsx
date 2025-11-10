import SideBar from "../components/Home/SideBar";
import { useState } from "react";
import PageTitl from "../components/Global/PageTitle";
import greenGound from "../assets/greenGound.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MatchesDisplay from "../components/Home/MatchesDisplay";
import AddPlayGroundForm from "../components/Home/AddPlayGroundForm";
const AddPlayGround = () => {
    return (
        <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
            <SideBar />
            <main className="w-calc100-340px">
                <PageTitl title="ادارة الملاعب " icon={greenGound} />
                <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                        <LazyLoadImage src={greenGound} alt="" className="w-6 h-auto object-contain" />
                        <h3 className="text-xl md:text-2xl font-semibold">تعديل الملعب</h3>
                    </div>
                </div>
                <AddPlayGroundForm />
                
            </main>
        </div>
    );
};

export default AddPlayGround;
