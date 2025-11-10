import SideBar from "../components/Home/SideBar";
import phone from "../assets/phone.svg";
import PageTitl from "../components/Global/PageTitle";
import PhoneOTPForm from "../components/Settings/PhoneOTPForm";
const PhoneOTP = () => {
  

  return (
    <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
      <SideBar />
      <main className="md:w-calc100-340px w-full">
        <PageTitl title="تعديل رقم الجوال" icon={phone} />
        <PhoneOTPForm title="تعديل رقم الجوال" icon={phone}/>
      </main>
    </div>
  );
};

export default PhoneOTP;
