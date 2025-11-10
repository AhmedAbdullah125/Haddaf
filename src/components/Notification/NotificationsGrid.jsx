import React, { useState } from "react";
import notifIcon from "../../assets/notifIcon.svg";
import deleteIcon from "../../assets/deleteIicon.svg";
import nonotification from "../../assets/nonotification.jpg";
const NotificationsGrid = () => {

  const [items, setItems] = useState([
    { id: 1, title: "تم ارسال طلب حجز جديد رقم #145" },
    { id: 2, title: "تم ارسال طلب حجز جديد رقم #145" },
    { id: 3, title: "تم ارسال طلب حجز جديد رقم #145" },
    { id: 4, title: "تم ارسال طلب حجز جديد رقم #145" },
    { id: 5, title: "تم ارسال طلب حجز جديد رقم #145" },
  ]);

  const handleDelete = (id) => setItems((prev) => prev.filter((n) => n.id !== id));
  const handleDeleteAll = () => setItems([]);
  return (
    <div className="py-8 px-6  border shadow-[0_4px_10px_0_rgba(46,173,0,0.25)] border-black/10 rounded-3xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg md:text-xl font-extrabold text-gray-900">أحدث التنبيهات</h3>{
          items.length > 0 &&
          <button onClick={handleDeleteAll} className="text-red-600 hover:text-red-700 underline underline-offset-4">حذف الكل</button>
        }
      </div>

      {
        items.length > 0 ?
          <div className="flex flex-col divide-y divide-gray-100">
            {items.map((n) => (
              <div key={n.id} className="flex items-center justify-between py-4">

                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg2EAD001A text-green-600 flex items-center justify-center">
                    <img src={notifIcon} alt="notification" className="w-5 h-5" />
                  </span>
                  <div className="text-right">
                    <p className="text-gray-900 font-medium">{n.title}</p>
                    <p className="text-777 text-sm">منذ 1 ساعة</p>
                  </div>
                </div>
                <button onClick={() => handleDelete(n.id)} className="text-red-600 hover:text-red-700" aria-label="حذف التنبيه">
                  <img src={deleteIcon} alt="delete" className="w-5 h-5" />
                </button>

              </div>
            ))}
          </div>
          :
          <div className="w-full flexCenter h-300px">
            <img src={nonotification} alt="nonotification" className="w-full h-full object-contain" />
          </div>
      }
    </div>
  );
};

export default NotificationsGrid;
