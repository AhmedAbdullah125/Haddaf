import React, { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { ImCancelCircle } from "react-icons/im";
import Pagination from "../Global/Pagination";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { deleteMatch } from "../requests/deleteMatch";
import { useLocation } from "react-router-dom";
const MatchesDisplayTable = ({ data, isLoading, page, setPage }) => {
    console.log(data);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    console.log(currentPath.split("/")[1] == "playground" && currentPath.split("/")[2] == "matches");
    const headers = [
        { name: "رقم", key: "id", id: 1 },
        { name: "الملعب", key: "stadium", id: 2 },
        { name: "عدد اللاعبين", key: "players", id: 3 },
        { name: "مدة المباراة", key: "duration", id: 4 },
        { name: "موعد المباراة", key: "date", id: 5 },
        { name: "الساعة", key: "time", id: 6 },
        { name: "الوقت المتبقي للمباراة", key: "remaining", id: 7 },
        { name: "القطة للمباراة", key: "slotCost", id: 8 },
        { name: "الاجراءات", key: "actions", id: 9 },
    ]
    const headers2 = [
        { name: "رقم", key: "id", id: 1 },
        { name: "عدد اللاعبين", key: "players", id: 3 },
        { name: "مدة المباراة", key: "duration", id: 4 },
        { name: "موعد المباراة", key: "date", id: 5 },
        { name: "الساعة", key: "time", id: 6 },
        { name: "الوقت المتبقي للمباراة", key: "remaining", id: 7 },
        { name: "القطة للمباراة", key: "slotCost", id: 8 },
        { name: "الاجراءات", key: "actions", id: 9 },
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
    console.log(page);

    return (
        <div className="home-table mt-8" >
            {/* Container */}
            {
                isLoading || loading ? <Loading /> :
                    <div className=" bg-white shadow-[0_4px_10px_0_rgba(46,173,0,0.25)] border-black/10 border rounded-3xl overflow-hidden">

                        {/* Table */}
                        <div className="overflow-x-auto overflow-auto w-full max-w-[calc(100vw-370px)] ">
                            <table className="min-w-full text-right overflow-auto w-full">
                                <thead className="w-full">
                                    <tr className="text-gray-600">
                                        {
                                            currentPath.split("/")[1] == "playground" && currentPath.split("/")[2] == "matches_details" ?
                                                headers2.map((header) => (
                                                    <th key={header.id} className="px-6 py-4 font-semibold whitespace-nowrap text-lg">{header.name}</th>
                                                )) :
                                                headers.map((header) => (
                                                    <th key={header.id} className="px-6 py-4 font-semibold whitespace-nowrap text-lg">{header.name}</th>
                                                ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.games.map((row) => (
                                        <tr key={row.id} className="border-t border-gray-100">
                                            <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.id}</td>
                                            {
                                                currentPath.split("/")[1] == "playground" && currentPath.split("/")[2] == "matches_details" ? null :
                                                    < td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.stadium_name}</td>
                                            }
                                            <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.players_count}</td>
                                            <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.duration}</td>
                                            <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.start_date}</td>
                                            <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.start_time_formatted}</td>
                                            <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.time_remaining_formatted}</td>
                                            <td className="px-6 py-3 text-777 text-nowrap text-lg font-medium">{row.price}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">

                                                    <Link className=" hover:text-green-700" to={`/match/view/${row.id}`} aria-label="view"><IconEye /></Link>
                                                    {
                                                        currentPath.split("/")[1] == "playground" && currentPath.split("/")[2] == "matches_details" ? null : <>

                                                            <Link className="text-green-600 hover:text-green-700" to={`/match/edit/${row.id}`} aria-label="edit"><IconEdit /></Link>
                                                            <AlertDialog>
                                                                <AlertDialogTrigger asChild>
                                                                    <button className="text-red-600 hover:text-red-700" aria-label="delete"><IconTrash /></button>
                                                                </AlertDialogTrigger>
                                                                <AlertDialogContent className="max-w-md w-full px-8 py-11 flex flex-col gap-12 items-center">
                                                                    <div className="absolute top-2 end-5 w-10 h-10 rounded-full p-1 hover:text-white flexCenter"
                                                                        onClick={() => {
                                                                            document.getElementById("cancel").click();
                                                                        }}
                                                                    ><ImCancelCircle color="#2EAD00" size={28} /></div>
                                                                    <AlertDialogHeader>
                                                                        <AlertDialogTitle className="text-2xl font-semibold text-center">حذف المبارة </AlertDialogTitle>
                                                                    </AlertDialogHeader>
                                                                    <AlertDialogDescription className="font-medium text-xl text-center text-777">
                                                                        {
                                                                            row.time_remaining_minutes <= 60 ? " لا يمكنك حذف المباراة لأن المدة المتبقية اقل من ساعة" : "سوف تقوم بحذف المبارة"
                                                                        }
                                                                    </AlertDialogDescription>
                                                                    <AlertDialogFooter className="w-full flex gap-4">
                                                                        <AlertDialogCancel className="hidden" id="cancel">إلغاء</AlertDialogCancel>
                                                                        <AlertDialogAction className="text-white bg-D10000 w-full h-12 rounded-3xl text-center" disabled={row.time_remaining_minutes <= 60} onClick={() => deleteMatch({ id: row.id, setLoading })}>حذف</AlertDialogAction>
                                                                    </AlertDialogFooter>
                                                                </AlertDialogContent>
                                                            </AlertDialog>
                                                        </>
                                                    }
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
            {
                isLoading ? null : data?.pagination?.total_pages > 1 && <Pagination total={data?.pagination?.total_pages} current={page} onChange={(p) => setPage(p)} />
            }
        </div >
    );
};

export default MatchesDisplayTable;