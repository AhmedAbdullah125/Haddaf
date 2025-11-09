import { LazyLoadImage } from "react-lazy-load-image-component";
const PageTitle = ({ title , icon }) => {

    return (
        <div className="w-full overflow-auto h-16 flex items-center px-6 shadow-[0_4px_10px_0_rgba(46,173,0,0.25)] rounded-3xl mb-10">
            <h1 className="flex items-center gap-4 text-primary text-xl font-bold"> <LazyLoadImage src={icon} alt="logo" className="w-5 h-auto" />{title}</h1>
        </div>
    );
};

export default PageTitle;
