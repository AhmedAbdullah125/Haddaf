import React, { useState } from "react";
import greenGound from "../../assets/greenGound.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Pagination from "../Global/Pagination";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ReportsStadumsTable = () => {

const rows = Array.from({ length: 4 }).map((_, i) => ({
  id: i + 1,
  stadium: "ملعب النخيل",
  reservations: "20 حجز",
  location: "الرياض",
}));
const data = {
  headers:[
    { name:"رقم", key:"id", id:1, sortable: false },
    { name:"اسم الملعب", key:"stadium", id:2, sortable: true },
    { name:"حجوزات المباراة", key:"reservations", id:3, sortable: true },
    { name:"الموقع الجغرافي", key:"location", id:4, sortable: true },
    { name:"عرض تفاصيل", key:"details", id:5, sortable: false },
  ],
  rows: rows,
};
const IconEye = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"/></svg>
);
const SortIcon = ({ className = "w-3.5 h-3.5 text-gray-400" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M7 10l5-5 5 5H7zm0 4l5 5 5-5H7z"/>
  </svg>
);

const [page, setPage] = useState(1);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      //make delay here
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
       className="home-table mt-8" >
      {/* Container */}
      <div className=" bg-white shadow-[0_4px_12px_rgba(46,173,0,0.08)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-green-700">
            <LazyLoadImage src={greenGound} alt="Haddaf" className="w-7 h-auto object-contain" />
            <h3 className="text-lg md:text-xl font-extrabold text-gray-900">تفاصيل الملاعب</h3>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto overflow-auto w-full max-w-[calc(100vw-370px)] border-black/10 border rounded-3xl">
          <table className="min-w-full text-right overflow-auto w-full">
            <thead className="w-full">
              <tr className="text-gray-600">
                {
                  data.headers.map((header) => (
                    <th key={header.id} className="px-6 py-4 font-semibold whitespace-nowrap text-lg">
                      <div className="inline-flex items-center gap-1">
                        <span>{header.name}</span>
                        {header.sortable ? <SortIcon /> : null}
                      </div>
                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row) => (
                <tr key={row.id} className="border-t border-gray-100">
                  <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.id}</td>
                  <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.stadium}</td>
                  <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.reservations}</td>
                  <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.location}</td>
                  <td className="px-6 py-4">
                    <Link to={`/playground/matches/${row.id}`} className="text-gray-600 hover:text-gray-700" aria-label="عرض التفاصيل"><IconEye /></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination total={2} current={page} onChange={(p) => setPage(p)} />
    </motion.div>
  );
};

export default ReportsStadumsTable;