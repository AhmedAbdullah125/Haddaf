import SideBar from "../components/Home/SideBar";
import reports from "../assets/reports.svg";
import PageTitl from "../components/Global/PageTitle";
import FixedPagesCont from "../components/Settings/FixedPagesCont";
const PrivacyPolicy = () => {
  

  return (
    <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
      <SideBar />
      <main className="md:w-calc100-340px w-full">
        <PageTitl title="سياسة الخصوصية" icon={reports} />
        <FixedPagesCont title="سياسة الخصوصية" icon={reports} description="مرحبًا بك في هدّاف، التطبيق الأول لحجز الملاعب والمباريات بسهولة وسرعة داخل المملكة العربية السعودية. "/>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
