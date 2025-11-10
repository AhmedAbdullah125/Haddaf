import SideBar from "../components/Home/SideBar";
import notification from "../assets/notification.svg";
import PageTitl from "../components/Global/PageTitle";
import NotificationsGrid from "../components/Notification/NotificationsGrid";

const Notifications = () => {
  
  
  return (
    <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
      <SideBar />
      <main className="w-calc100-340px">
        <PageTitl title="الاشعارات" icon={notification} />
       
      <NotificationsGrid/>
      </main>
    </div>
  );
};

export default Notifications;
