import React, { useState } from "react";
import notifIcon from "../../assets/notifIcon.svg";
import deleteIcon from "../../assets/deleteIicon.svg";
import nonotification from "../../assets/nonotification.jpg";
import { motion } from "framer-motion";
import { useGetNotifications } from "../hooks/useGetNotifications";
import Loading from "../Loading";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { ImCancelCircle } from "react-icons/im";
import { deleteNotification } from "../requests/deleteNotification";

const NotificationsGrid = () => {
  const { data, isLoading } = useGetNotifications();
  console.log(data);
  
  const [loading, setLoading] = useState(false)
  const handleDelete = (id) => {
    console.log("delete one notification");
    deleteNotification(id, setLoading)
  };
  const handleDeleteAll = () => {
    console.log("Delete all notifications");
    deleteNotification(null, setLoading)
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      //make delay here
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="py-8 px-6  border shadow-[0_4px_10px_0_rgba(46,173,0,0.25)] border-black/10 rounded-3xl">
      {
        isLoading || loading ? <Loading /> :
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg md:text-xl font-extrabold text-gray-900">أحدث التنبيهات</h3>{
                data?.notifications?.length > 0 &&
                <button onClick={handleDeleteAll} className="text-red-600 hover:text-red-700 underline underline-offset-4">حذف الكل</button>
              }
            </div>

            {
              data?.notifications?.length > 0 ?
                <div className="flex flex-col divide-y divide-gray-100">
                  {data?.notifications?.map((n) => (
                    <div key={n.id} className="flex items-center justify-between py-4">

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <div className="flex items-center gap-3 cursor-pointer">
                            <span className="w-10 h-10 rounded-full bg2EAD001A text-green-600 flex items-center justify-center ">
                              <img src={notifIcon} alt="notification" className="w-5 h-5" />
                            </span>
                            <div className="text-right">
                              <p className="text-gray-900 font-medium">{n?.title}</p>
                              <p className="text-777 text-sm">{n?.created_at}</p>
                            </div>
                          </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="max-w-md w-full px-8 py-11 flex flex-col gap-12 items-center">
                          <div className="absolute top-2 end-5 w-10 h-10 rounded-full p-1 hover:text-white flexCenter cursor-pointer" 
                            onClick={() => {
                              document.getElementById("cancel").click();
                            }}
                          ><ImCancelCircle color="#2EAD00" size={28} /></div>
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-2xl font-semibold text-center">{n?.data?.title_ar}</AlertDialogTitle>
                          </AlertDialogHeader>
                          <AlertDialogDescription className="font-medium text-xl text-center text-777">
                            <p>{n?.body}</p>
                          </AlertDialogDescription>
                          <AlertDialogFooter className="w-full flex gap-4">
                            <AlertDialogCancel className="hidden" id="cancel">إلغاء</AlertDialogCancel>
                            <AlertDialogAction className="text-white bg-D10000 w-full h-12 rounded-3xl text-center" onClick={() => handleDelete(n.id)}>حذف</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <button onClick={() => handleDelete(n.id)} className="text-red-600 hover:text-red-700" aria-label="حذف التنبيه">
                        <img src={deleteIcon} alt="delete" className="w-5 h-5" />
                      </button>

                    </div>
                  ))}
                </div>
                :
                <motion.div
                  initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  //make delay here
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0 }} className="w-full flexCenter h-300px">
                  <img src={nonotification} alt="nonotification" className="w-full h-full object-contain" />
                </motion.div>
            }

          </>
      }
    </motion.div>
  );
};

export default NotificationsGrid;
