import SideBar from "../components/Home/SideBar";
import HomeActiveIcon from "../assets/HomeActiveIcon.svg";
import { useState } from "react";
import HomeTabs from "../components/Home/HomeTabs";
import HomeTable from "../components/Home/HomeTable";
import PageTitl from "../components/Global/PageTitle";
import playground from "../assets/playground.svg";
import manWithBall from "../assets/manWithBall.svg";
import MatchesDisplay from "../components/Home/MatchesDisplay";
import { useGetHomeData } from "../components/hooks/useGetHomeData";
import Loading from "../components/Loading";

const Index = () => {

  const [activeTab, setActiveTab] = useState(1);
  const { data, isLoading } = useGetHomeData();
  const rows = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    customer: "رامز",
    phone: "+966 XX XXX XXXX",
    matchDetails: "20/08/2026",
    guest1: "خالد",
    family: "خالد",
  }));

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
    }

  ]
  return (
    <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
      <SideBar />
      <main className="md:w-calc100-340px w-full">
        <PageTitl title="الرئيسية" icon={HomeActiveIcon} />
        <HomeTabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} data={data} isLoading={isLoading} />
        {
          activeTab === 1 ?
            // <HomeTable />
            <MatchesDisplay title="الملاعب" />
            : activeTab === 2 ? isLoading ? <Loading /> : <HomeTable data={data} isLoading={isLoading} /> : ""
        }
      </main>
    </div>
  );
};

export default Index;
