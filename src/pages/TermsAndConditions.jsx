import SideBar from "../components/Home/SideBar";
import terms from "../assets/terms.svg";
import PageTitl from "../components/Global/PageTitle";
import FixedPagesCont from "../components/Settings/FixedPagesCont";
const TermsAndConditions = () => {
  

  return (
    <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
      <SideBar />
      <main className="md:w-calc100-340px w-full">
        <PageTitl title="الشروط والأحكام" icon={terms} />
        <FixedPagesCont title="الشروط والأحكام" icon={terms} description="مرحبًا بك في هدّاف، التطبيق الأول لحجز الملاعب والمباريات بسهولة وسرعة داخل المملكة العربية السعودية. "/>
      </main>
    </div>
  );
};

export default TermsAndConditions;
