import SideBar from "../components/Home/SideBar";
import PageTitl from "../components/Global/PageTitle";
import greenGound from "../assets/greenGound.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import MatchesDisplayTable from "../components/Home/MatchesDisplayTable";
import { motion } from "framer-motion";
import { useGetMatchesData } from "../components/hooks/useGetMatchesData";
import Loading from "../components/Loading";
import { useState } from "react";
import { useGetStadiumData } from "../components/hooks/useGetStadiumData";

const GroundMatches = () => {
    const { id } = useParams();
    console.log(id);
   
    const [page, setPage] = useState(1);
    const { data, isLoading } = useGetMatchesData(id, page);
    const { data: stadium, isLoading: stadiumLoading } = useGetStadiumData({ id })
    console.log(stadium);

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
                    transition={{ duration: 0.5, delay: 0.5 }} >
                    <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                            <LazyLoadImage src={greenGound} alt="Haddaf" className="w-6 h-auto object-contain" />
                            <h3 className="text-xl md:text-2xl font-semibold">عرض جميع المباريات الخاصة ب{stadium?.name}</h3>
                        </div>
                        <Link to={`/match/add/${id}`} className="bg-primary h-12 px-9 rounded-3xl flex items-center gap-2 text-white">
                            <GoPlus size={20} />
                            اضافة المباراة
                        </Link>
                    </div>
                    {
                        isLoading ? <Loading /> : data?.games.length > 0 ? <MatchesDisplayTable data={data} isLoading={isLoading} page={page} setPage={setPage} /> :
                            <div className="flex flex-col items-center">
                                <Loading />
                                <h3 className="text-xl md:text-2xl font-semibold">لا يوجد مباريات</h3>
                            </div>
                    }
                </motion.div>
            </main>
        </div>
    );
};

export default GroundMatches;
