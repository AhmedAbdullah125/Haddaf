// lib/api/login.js
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { toast } from "sonner";

export async function userLogout({ navigate }) {
  const generateDeviceId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let deviceId = '';
    for (let i = 0; i < 20; i++) {
      deviceId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return deviceId;
  };
  const getDeviceId = () => {
    let deviceId = localStorage.getItem('device_id');
    if (!deviceId) {
      deviceId = generateDeviceId();
      localStorage.setItem('device_id', deviceId);
    }
    return deviceId;
  };



  const token = localStorage.getItem("token");
  const lang = localStorage.getItem("lang") || "ar";
  const formData = new FormData();
  formData.append('device_id', getDeviceId());
  const headers = { "accept-language": lang };

  if (token) headers.Authorization = `Bearer ${token}`;

  const url = `${API_BASE_URL}/provider/logout`;

  try {
    const response = await axios.post(url, formData, { headers });
    const message = response?.data?.msg || "تم تسجيل الخروج بنجاح";
    console.log(response);

    if (response.data.key === "success") {
      toast(message, {
        style: {
          borderColor: "#28a745",
          boxShadow: "0px 0px 10px rgba(40, 167, 69, .5)",
        },
      });

      localStorage.removeItem("token");
      navigate("/login");
    } else {
      toast(response?.data?.msg, {
        style: {
          borderColor: "#dc3545",
          boxShadow: "0px 0px 10px rgba(220, 53, 69, .5)",
        },
        description: "استجابة غير متوقعة",
      });
    }
  } catch (error) {
    const errorMessage = error?.response?.data?.msg || error?.msg;
    toast(errorMessage, {
      style: {
        borderColor: "#dc3545",
        boxShadow: "0px 0px 10px rgba(220, 53, 69, .5)",
      },
    });
  }
}
