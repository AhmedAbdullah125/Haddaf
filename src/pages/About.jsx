import SideBar from "../components/Home/SideBar";
import about from "../assets/about.svg";
import PageTitl from "../components/Global/PageTitle";
import FixedPagesCont from "../components/Settings/FixedPagesCont";
const About = () => {

  return (
    <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
      <SideBar />
      <main className="md:w-calc100-340px w-full">
        <PageTitl title="من نحن" icon={about} />
        <FixedPagesCont title={"من نحن"} keyWord="about" icon={about}/>
      </main>
    </div>
  );
};

export default About;
