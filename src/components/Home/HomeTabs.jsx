import { LazyLoadImage } from "react-lazy-load-image-component";
import manWithBall from "../../assets/manWithBall.svg";
import playground from "../../assets/playground.svg";
import football from "../../assets/football.svg";

const HomeTabs= ({ activeTab, setActiveTab }) => {

    return (
        <div className="flex gap-10 main-content mb-9">
            {/* KPI cards */}
            {/* عدد الملاعب */}
            <div className="flex gap-6 items-center relative h-28 w-full overflow-auto rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_4px_10px_0_rgba(46,173,0,0.25)]"
            onClick={() => setActiveTab(1)}
            >
                <div className="w-14 h-14 rounded-xl bg-white shadow-[0_4px_4px_rgba(46,173,0,0.1)]">
                    <LazyLoadImage src={playground} alt="" className="w-7 h-auto object-contain" />
                </div>
                <div className="flex items-start flex-col h-full justify-between">
                    <h3 className="text-2xl font-extrabold text-gray-900">عدد الملاعب</h3>
                    <div className="mt-3 text-3xl font-extrabold text-primary">12</div>
                </div>
                <LazyLoadImage src={football} alt="haddaf" className="h-16 w-auto absolute bottom-0 end-0" />
            </div>
            {/* عدد المباريات المحجوزة */}
            <div className="flex gap-6 items-center relative h-28 w-full overflow-auto rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_4px_10px_0_rgba(46,173,0,0.25)]"
            onClick={() => setActiveTab(2)}>
                <div className="w-14 h-14 rounded-xl bg-white shadow-[0_4px_4px_rgba(46,173,0,0.1)]">
                    <LazyLoadImage src={manWithBall} alt="" className="w-7 h-auto object-contain" />
                </div>
                <div className="flex items-start flex-col h-full justify-between">
                    <h3 className="text-2xl font-extrabold text-gray-900">عدد المباريات المحجوزة</h3>
                    <div className="mt-3 text-3xl font-extrabold text-primary">12</div>
                </div>
                <LazyLoadImage src={football} alt="haddaf" className="h-16 w-auto absolute bottom-0 end-0" />
            </div>
        </div>
    );
};
export default HomeTabs;
