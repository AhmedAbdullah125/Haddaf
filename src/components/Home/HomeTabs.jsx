import { LazyLoadImage } from "react-lazy-load-image-component";
import football from "../../assets/football.svg";
import { motion } from "framer-motion";
import Loading from "../Loading";
import { useGetHomeData } from "../../components/hooks/useGetHomeData";
const HomeTabs = ({ setActiveTab, tabs, data, isLoading }) => {

    return (
        <div className="flex flex-col flex-small-col gap-small main-content mb-9">
            {
                isLoading ? <Loading /> :
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0 }}
                            className="home-tab flex md-gap-6-gap-2 items-center relative md:h-28 h-20 w-full overflow-auto cursor-pointer rounded-3xl border border-gray-200 bg-white variable-p-small shadow-[0_4px_10px_0_rgba(46,173,0,0.25)]" onClick={() => setActiveTab(1)}>
                            <div className="w-14 h-14 rounded-xl flexCenter bg-white shadow-[0_4px_10px_0_rgba(46,173,0,0.25)]">
                                <LazyLoadImage src={tabs[0].icon} alt="Haddaf" className="w-7 h-auto object-contain" />
                            </div>
                            <div className="flex items-start flex-col h-full justify-between">
                                <h3 className="text-2xl font-extrabold text-gray-900">{tabs[0].title}</h3>
                                <div className="mt-3 text-3xl font-extrabold text-primary">{data.stadiums_count}</div>
                            </div>
                            <LazyLoadImage src={football} alt="haddaf" className="h-16 w-auto absolute bottom-0 end-0" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0 }}
                            className="home-tab flex md-gap-6-gap-2 items-center relative md:h-28 h-20 w-full overflow-auto cursor-pointer rounded-3xl border border-gray-200 bg-white variable-p-small shadow-[0_4px_10px_0_rgba(46,173,0,0.25)]" onClick={() => setActiveTab(2)}>
                            <div className="w-14 h-14 rounded-xl flexCenter bg-white shadow-[0_4px_10px_0_rgba(46,173,0,0.25)]">
                                <LazyLoadImage src={tabs[1].icon} alt="Haddaf" className="w-7 h-auto object-contain" />
                            </div>
                            <div className="flex items-start flex-col h-full justify-between">
                                <h3 className="text-2xl font-extrabold text-gray-900">{tabs[1].title}</h3>
                                <div className="mt-3 text-3xl font-extrabold text-primary">{data.reserved_games_count}</div>
                            </div>
                            <LazyLoadImage src={football} alt="haddaf" className="h-16 w-auto absolute bottom-0 end-0" />
                        </motion.div>
                    </>

            }
        </div>
    );
};
export default HomeTabs;
