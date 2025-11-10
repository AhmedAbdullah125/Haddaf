import React, { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { ImCancelCircle } from "react-icons/im";
import Pagination from "../Global/Pagination";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const MatchesDisplay = () => {

  const rows = [
    {
      id: 1,
      stadium: "ملعب النخيل",
      players: "12/8",
      location: "الرياض",
      status: "active",
    },
    {
      id: 2,
      stadium: "ملعب النخيل",
      players: "12/8",
      location: "الرياض",
      status: "inactive",
    }
  ]
  const data = {
    headers: [
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
        name: "الموقع الجغرافي",
        key: "location",
        id: 3
      },
      {
        name: "الحالة",
        key: "status",
        id: 4
      },
      {
        name: "الإجراءات",
        key: "actions",
        id: 5
      },
    ],
    rows: rows
  }
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
      <div className=" bg-white shadow-[0_4px_10px_0_rgba(46,173,0,0.25)] border-black/10 border rounded-3xl overflow-hidden">

        {/* Table */}
        <div className="overflow-x-auto overflow-auto w-full max-w-[calc(100vw-370px)] ">
          <table className="min-w-full text-right overflow-auto w-full">
            <thead className="w-full">
              <tr className="text-gray-600">
                {
                  data.headers.map((header) => (
                    <th key={header.id} className="px-6 py-4 font-semibold whitespace-nowrap text-lg">{header.name}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, idx) => (
                <tr key={row.id} className="border-t border-gray-100">
                  <td className="px-6 py-4 text-777 text-nowrap text-lg font-medium">{row.id}</td>
                  <td className="px-6 py-4 text-777 text-nowrap text-lg font-medium">{row.stadium}</td>
                  <td className="px-6 py-4 text-777 text-nowrap text-lg font-medium">{row.location}</td>
                  <td className={`px-6 py-4 text-nowrap text-lg font-medium ${row.status === "active" ? "text-green-600" : "text-red-600"}`}>{row.status == "active" ? "نشط" : "غير نشط"}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <Link to={`/match/view/${row.id}`} className="text-gray-600 hover:text-gray-700" aria-label="view"><IconEye /></Link>
                      <Link className="text-green-600 hover:text-green-700" to={`/playground/edit/${row.id}`} aria-label="edit"><IconEdit /></Link>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button className="text-red-600 hover:text-red-700 " aria-label="delete"><IconTrash /></button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="max-w-md w-full px-8 py-11 flex flex-col gap-12 items-center">
                          <div className="absolute top-2 end-5 w-10 h-10 rounded-full p-1 hover:bg-red-700 hover:text-white flexCenter"
                            onClick={() => {
                              document.getElementById("cancel").click();
                            }}
                          ><ImCancelCircle size={28} /></div>
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
                            {
                              row.status === "active" ?
                                <AlertDialogAction className="text-white bg-D10000 w-full h-12 rounded-3xl text-center" disabled>حذف</AlertDialogAction>
                                :
                                <AlertDialogAction className="text-white bg-D10000 w-full h-12 rounded-3xl text-center">حذف</AlertDialogAction>
                            }

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
      <Pagination total={2} current={page} onChange={(p) => setPage(p)} />
    </motion.div>
  );
};

export default MatchesDisplay;