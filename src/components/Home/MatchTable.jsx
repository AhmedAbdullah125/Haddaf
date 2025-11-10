import React, { useState } from "react";
import greenGound from "../../assets/greenGound.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Pagination from "../Global/Pagination";
import { motion } from "framer-motion";
// Sample rows matching the visual: same values repeated


const MatchTable = ({ data }) => {
  const [page, setPage] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      //make delay here
      viewport={{ once: true }}
      transition={{ duration: .5, delay: 0.5 }}
      className="mt-8" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-green-700">
          <LazyLoadImage src={greenGound} alt="Haddaf" className="w-7 h-auto object-contain" />
          <h3 className="text-lg md:text-xl font-extrabold text-gray-900">تفاصيل المباره</h3>
        </div>
      </div>

      {/* Match HomeTable styles */}
      <div className="bg-white shadow-[0_4px_12px_rgba(46,173,0,0.08)] overflow-hidden">
        <div className="overflow-x-auto overflow-auto w-full max-w-[calc(100vw-370px)] border-black/10 border rounded-3xl">
          <table className="min-w-full text-right overflow-auto w-full">
            <thead className="w-full">
              <tr className="text-gray-600">
                {
                  data.headers.map((header) => (
                    <th key={header.id} className="px-6 py-4 font-semibold whitespace-nowrap">{header.name}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {data.rows.slice((page - 1) * 10, page * 10).map((r) => (
                <tr key={r.id} className="border-t border-gray-200">
                  <td className="px-6 py-4 text-gray-800">{r.id}</td>
                  <td className="px-6 py-4 text-gray-800">{r.customer}</td>
                  <td className="px-6 py-4 text-gray-800">{r.phone}</td>
                  <td className="px-6 py-4 text-gray-800">{r.matchDetails}</td>
                  <td className="px-6 py-4 text-gray-800">{r.guest1}</td>
                  <td className="px-6 py-4 text-gray-800">{r.family}</td>
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

export default MatchTable;