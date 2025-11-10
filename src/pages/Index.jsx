import SideBar from "../components/Home/SideBar";
import HomeActiveIcon from "../assets/HomeActiveIcon.svg";
import { useState } from "react";
import HomeTabs from "../components/Home/HomeTabs";
import HomeTable from "../components/Home/HomeTable";
import MatchTable from "../components/Home/MatchTable";
import PageTitl from "../components/Global/PageTitle";
import playground from "../assets/playground.svg";
import manWithBall from "../assets/manWithBall.svg";

const Index = () => {
  
  const [activeTab, setActiveTab] = useState(1);
  const rows = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    customer: "رامز",
    phone: "+966 XX XXX XXXX",
    matchDetails: "20/08/2026",
    guest1: "خالد",
    family: "خالد",
  }));
  const data ={
    headers:[
      {
        name:"رقم",
        key:"id",
        id:1
      },
      {
        name:"اسم العميل",
        key:"customer",
        id:2
      },
      {
        name:"رقم الجوال",
        key:"phone",
        id:3
      },
      {
        name:"تفاصيل المباراه",
        key:"matchDetails",
        id:4
      },
      {
        name:"اسم الضيف الاول",
        key:"guest1",
        id:5
      },
      {
        name:"اسم العائلة",
        key:"family",
        id:6
      },
    ],
    rows:rows
  }
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
        <HomeTabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        {
          activeTab === 1 ? 
          <HomeTable />
          : activeTab === 2 ? <MatchTable data={data} /> : ""
        }

      </main>
    </div>
  );
};

export default Index;
