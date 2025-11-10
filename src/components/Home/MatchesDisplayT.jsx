import React, { useState } from "react";
import greenGound from "../../assets/greenGound.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Pagination from "../Global/Pagination";

const MatchesDisplayTable = () => {

  const rows = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    playerName: "رامز",
    phone: "+966 XX XXX XXXX",
    bookingDate: "20/08/2026",
    firstGuest: "خالد",
    familyName: "خالد",
  }));

  const data = {
    headers: [
      {
        name: "رقم",
        key: "id",
        id: 1,
        sortable: true
      },
      {
        name: "اسم اللاعب",
        key: "playerName",
        id: 2,
        sortable: true
      },
      {
        name: "رقم الجوال",
        key: "phone",
        id: 3,
        sortable: true
      },
      {
        name: "تاريخ الحجز",
        key: "bookingDate",
        id: 4,
        sortable: true
      },
      {
        name: "اسم الضيف الاول",
        key: "firstGuest",
        id: 5,
        sortable: true
      },
      {
        name: "اسم العائلة",
        key: "familyName",
        id: 6,
        sortable: true
      },
    ],
    rows: rows
  }

  const SortIcon = ({ className = "w-3.5 h-3.5 text-gray-400" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M7 10l5-5 5 5H7zm0 4l5 5 5-5H7z"/>
    </svg>
  );

  const IconEye = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" /></svg>
  );

  const [page, setPage] = useState(1);
  return (
    <div className="home-table mt-8" >
      {/* Container */}
      <div className=" bg-white shadow-[0_4px_12px_rgba(46,173,0,0.08)] overflow-hidden">
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
                  <td className="px-6 py-4 text-777 text-nowrap text-lg font-medium">{row.id}</td>
                  <td className="px-6 py-4 text-777 text-nowrap text-lg font-medium">{row.playerName}</td>
                  <td className="px-6 py-4 text-777 text-nowrap text-lg font-medium">{row.phone}</td>
                  <td className="px-6 py-4 text-777 text-nowrap text-lg font-medium">{row.bookingDate}</td>
                  <td className="px-6 py-4 text-777 text-nowrap text-lg font-medium">{row.firstGuest}</td>
                  <td className="px-6 py-4 text-777 text-nowrap text-lg font-medium">{row.familyName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination total={2} current={page} onChange={(p) => setPage(p)} />
    </div>
  );
};

export default MatchesDisplayTable;