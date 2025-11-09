import SideBar from "../components/Home/SideBar";
import HomeActiveIcon from "../assets/HomeActiveIcon.svg";
import { useState } from "react";
import HomeTabs from "../components/Home/HomeTabs";
import HomeTable from "../components/Home/HomeTable";
import MatchTable from "../components/Home/MatchTable";
import PageTitl from "../components/Global/PageTitle";
const Index = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
      <SideBar />
      <main className="w-full">
        <PageTitl title="الرئيسية" icon={HomeActiveIcon} />
        <HomeTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {
          activeTab === 1 ? 
          <HomeTable />
          : activeTab === 2 ? <MatchTable /> : ""
        }

      </main>
    </div>
  );
};

export default Index;
