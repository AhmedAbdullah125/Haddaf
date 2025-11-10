import SideBar from "../components/Home/SideBar";
import messege from "../assets/messege.svg";
import PageTitl from "../components/Global/PageTitle";
import ContactForm from "../components/Contact/ContactForm";
const Contact = () => {


    return (
        <div className="flex min-h-screen p-6 gap-8 max-w-[100vw]">
            <SideBar />
            <main className="w-calc100-340px">
                <PageTitl title="تواصل معنا " icon={messege} />
                <ContactForm/>
            </main>
        </div>
    );
};

export default Contact;
