

const FixedPagesCont = ({ title, icon, description }) => {


    return (
        <div className="py-8 px-6 border shadow-[0_4px_10px_0_rgba(46,173,0,0.25)] border-black/10 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
                <img src={icon} alt="haddaf" className="w-8 h-8" />
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900">{title}</h3>
            </div>
            <p className="text-black text-lg font-medium">{description}</p>

        </div>
    );
};

export default FixedPagesCont;
