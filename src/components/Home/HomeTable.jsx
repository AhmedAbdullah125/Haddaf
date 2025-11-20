import React, { useState } from "react";
import greenGound from "../../assets/greenGound.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Pagination from "../Global/Pagination";
const HomeTable = ({ data, isLoading }) => {
  console.log(data);

  const rows = Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    stadium: "ملعب النخيل",
    players: "12/8",
    duration: "90 دقيقة",
    date: "01/5/2026",
    time: "PM 08:45",
    remaining: "16 دقيقة",
    slotCost: "30 ريال",
  }));
  const headers = [
    {
      name: "رقم",
      key: "id",
      id: 1
    },
    {
      name: "اسم الملعب",
      key: "stadium",
      id: 2
    },
    {
      name: "عدد اللاعبين",
      key: "players",
      id: 3
    },
    {
      name: "مدة المباراة",
      key: "duration",
      id: 4
    },
    {
      name: "موعد المباراة",
      key: "date",
      id: 5
    },
    {
      name: "الساعة",
      key: "time",
      id: 6
    },
    {
      name: "الوقت المتبقي لأقرب مباراة",
      key: "remaining",
      id: 7
    },
    {
      name: "التكلفة",
      key: "slotCost",
      id: 8
    },
    {
      name: "الإجراءات",
      key: "actions",
      id: 9
    },
  ]
  const IconTrash = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M9 3h6v2h5v2H4V5h5V3Zm1 6h2v10h-2V9Zm4 0h2v10h-2V9ZM6 9h2v10H6V9Z" /></svg>
  );
  const IconEdit = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z" /></svg>
  );
  const IconEye = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" /></svg>
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
      {
        data?.latest_games.length > 0 ?
          <div className=" bg-white shadow-[0_4px_12px_rgba(46,173,0,0.08)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-2 text-green-700">
                <LazyLoadImage src={greenGound} alt="Haddaf" className="w-7 h-auto object-contain" />
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900">احدث المباريات</h3>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto overflow-auto w-full max-w-[calc(100vw-370px)] border-black/10 border rounded-3xl">
              <table className="min-w-full text-right overflow-auto w-full">
                <thead className="w-full">
                  <tr className="text-gray-600">
                    {
                      headers.map((header) => (
                        <th key={header.id} className="px-6 py-4 font-semibold whitespace-nowrap text-lg">{header.name}</th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  {data.latest_games.map((row, idx) => (
                    <tr key={row.id} className="border-t border-gray-100">
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.id}</td>
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.stadium_name}</td>
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.players_count}</td>
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.duration}</td>
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.start_date}</td>
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.start_time_formatted}</td>
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.time_remaining_formatted}</td>
                      <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.price}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <Link to={`/match/view/${row.id}`} className="text-gray-600 hover:text-gray-700" aria-label="view"><IconEye /></Link>
                          <Link to={`/match/edit/${row.id}`} className="text-green-600 hover:text-green-700" aria-label="edit"><IconEdit /></Link>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <button className="text-red-600 hover:text-red-700 " aria-label="delete"><IconTrash /></button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="max-w-md w-full px-8 py-11 flex flex-col gap-12 items-center">
                              <div className="absolute top-2 end-5 w-10 h-10 rounded-full p-1 hover:text-white flexCenter"
                                onClick={() => {
                                  document.getElementById("cancel").click();
                                }}
                              ><ImCancelCircle color="#2EAD00" size={28} /></div>
                              <AlertDialogHeader>
                                <AlertDialogTitle className="text-2xl font-semibold text-center">حذف الملعب </AlertDialogTitle>
                              </AlertDialogHeader>
                              {
                                row.status === "active" ?
                                  <AlertDialogDescription className="font-medium text-xl text-center text-777">
                                    لا يمكنك حذف الملعب لأنه نشط
                                  </AlertDialogDescription>
                                  :
                                  <AlertDialogDescription className="font-medium text-xl text-center text-777">
                                    سوف تقوم بحذف الملعب
                                  </AlertDialogDescription>
                              }
                              <AlertDialogFooter className="w-full flex gap-4">
                                <AlertDialogCancel className="hidden" id="cancel">إلغاء</AlertDialogCancel>
                                <AlertDialogAction className="text-white bg-D10000 w-full h-12 rounded-3xl text-center" disabled>حذف</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          :  <span className="text-777 text-lg w-full flexCenter">لا يوجد مباريات محجوزة مؤخرا</span>
      }

      {
        isLoading ? null : data?.pagination?.total_pages > 1 &&
          <Pagination total={data?.pagination?.total_pages} current={page} onChange={(p) => setPage(p)} />
      }
    </motion.div>
  );
};

export default HomeTable;