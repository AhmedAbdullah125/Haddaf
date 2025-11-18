import React, { useState } from "react";
import Pagination from "../Global/Pagination";
import { useGetMatchesData } from "../../components/hooks/useGetMatcheDetails";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
const MatchesDisplayTable = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetMatchesData(id, page)
  console.log(data);

  const headers = [
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
      name: "الاسم الأول للضيف",
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
  ]
  const SortIcon = ({ className = "w-3.5 h-3.5 text-gray-400" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M7 10l5-5 5 5H7zm0 4l5 5 5-5H7z" />
    </svg>
  );

  const IconEye = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" /></svg>
  );

  return (
    <div className="home-table mt-8" >
      {/* Container */}
      <div className=" bg-white shadow-[0_4px_12px_rgba(46,173,0,0.08)] overflow-hidden">
        {/* Table */}
        {
          isLoading ? <Loading /> :
          data?.reservations?.length > 0 ?
            <div className="overflow-x-auto overflow-auto w-full max-w-[calc(100vw-370px)] border-black/10 border rounded-3xl">
              <table className="min-w-full text-right overflow-auto w-full">
                <thead className="w-full">
                  <tr className="text-gray-600">
                    {
                      headers.map((header) => (
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
                  {data.reservations.map((row) => (
                    <tr key={row.id} className="border-t border-gray-100">
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.id}</td>
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.player_name}</td>
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.mobile_number}</td>
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.booking_date}</td>
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.guest_name}</td>
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.family_name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            :
            <div className="flex items-center justify-center w-full" >
              <p className="text-gray-600 text-4xl">لا يوجد بيانات</p>
            </div>
        }
      </div>
      {
        data?.pagination?.total_pages > 1 &&
        <Pagination total={data?.pagination?.total_pages} current={page} onChange={(p) => setPage(p)} />
      }
    </div>
  );
};

export default MatchesDisplayTable;