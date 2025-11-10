import SideBar from "../components/Home/SideBar";
import settings from "../assets/settings.svg";
import PageTitl from "../components/Global/PageTitle";
import SettingsCont from "../components/Settings/SettingsCont";
const Settings = () => {
  

  return (
    <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
      <SideBar />
      <main className="md:w-calc100-340px w-full">
        <PageTitl title="الاعدادات " icon={settings} />
        <SettingsCont/>
      </main>
    </div>
  );
};

export default Settings;
