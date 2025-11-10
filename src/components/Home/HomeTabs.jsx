import { LazyLoadImage } from "react-lazy-load-image-component";
import football from "../../assets/football.svg";
import { motion } from "framer-motion";
const HomeTabs = ({ setActiveTab, tabs }) => {

    return (
        <div className="flex flex-col flex-small-col gap-small main-content mb-9">
            {
                tabs.map((tab) => (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0 }}
                        key={tab.id} className="flex md-gap-6-gap-2 items-center relative md:h-28 h-20 w-full overflow-auto cursor-pointer rounded-3xl border border-gray-200 bg-white variable-p-small shadow-[0_4px_10px_0_rgba(46,173,0,0.25)]" onClick={() => setActiveTab(tab.id)}>
                        <div className="w-14 h-14 rounded-xl flexCenter bg-white shadow-[0_4px_10px_0_rgba(46,173,0,0.25)]">
                            <LazyLoadImage src={tab.icon} alt="Haddaf" className="w-7 h-auto object-contain" />
                        </div>
                        <div className="flex items-start flex-col h-full justify-between">
                            <h3 className="text-2xl font-extrabold text-gray-900">{tab.title}</h3>
                            <div className="mt-3 text-3xl font-extrabold text-primary">{tab.count}</div>
                        </div>
                        <LazyLoadImage src={football} alt="haddaf" className="h-16 w-auto absolute bottom-0 end-0" />
                    </motion.div>
                ))
            }
        </div>
    );
};
export default HomeTabs;
