import SideBar from "../components/Home/SideBar";
import reports from "../assets/reports.svg";
import { useState } from "react";
import HomeTabs from "../components/Home/HomeTabs";
import PageTitl from "../components/Global/PageTitle";
import playground from "../assets/playground.svg";
import manWithBall from "../assets/manWithBall.svg";
import HomeTable from "../components/Home/HomeTable";
import { useGetHomeData } from "../components/hooks/useGetHomeData";
import MatchesDisplay from "../components/Home/MatchesDisplay";
import Loading from "../components/Loading";


const Reports = () => {
const { data, isLoading } = useGetHomeData();
    const [activeTab, setActiveTab] = useState(1);
    const tabs = [
        {
            title: "عدد الملاعب",
            icon: playground,
            count: 12,
            id: 1
        },
        {
            title: "عدد المباريات المحجوزة",
            icon: manWithBall,
            count: 12,
            id: 2
        },

    ]
    return (
        <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
            <SideBar />
            <main className="w-calc100-340px">
                <PageTitl title="التقارير" icon={reports} />
                <HomeTabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} data={data} isLoading={isLoading} />
                {
                    activeTab === 1 ?
                        <MatchesDisplay title="تفاصيل الملاعب" />
                         : activeTab === 2 ? isLoading ? <Loading /> : <HomeTable data={data} isLoading={isLoading} /> : ""
                }
            </main>
        </div>
    );
};

export default Reports;
