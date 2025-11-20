
import { motion } from "framer-motion";
import { useGetFixedPagesData } from "../../components/hooks/useGetFixedPages";
import Loading from '../Loading'
import parse from 'html-react-parser'

const FixedPagesCont = ({ title, keyWord, icon }) => {
    const { data, isLoading } = useGetFixedPagesData(keyWord);
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }} className="py-8 px-6 border shadow-[0_4px_10px_0_rgba(46,173,0,0.25)] border-black/10 rounded-3xl">
            {
                isLoading ? <Loading /> :
                    <>
                        <div className="flex items-center gap-4 mb-6">
                            <img src={icon} alt="haddaf" className="w-8 h-8" />
                            <h3 className="text-lg md:text-xl font-extrabold text-gray-900">{title}</h3>
                        </div>
                        <div className="text-black text-lg font-medium">{parse(data)}</div>

                    </>
            }
        </motion.div>
    );
};

export default FixedPagesCont;
