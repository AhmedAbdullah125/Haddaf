import SideBar from "../components/Home/SideBar";
import PageTitle from "../Global/PageTitle";
import HomeActiveIcon from "../assets/HomeActiveIcon.svg";

const Index = () => {

  return (
    <div className="flex min-h-screen p-6 gap-8">
      <SideBar />
      <main className="w-full">
        <PageTitle title="الرئيسية" icon={HomeActiveIcon} />
      </main>
    </div>
  );
};

export default Index;
