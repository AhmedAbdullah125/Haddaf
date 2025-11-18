// lib/api/login.js
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { toast } from "sonner";
export async function toggleNotification({ setLoading }) {
  const token = localStorage.getItem("token");
  const headers = { "accept-language": "ar" };
  if (token) headers.Authorization = `Bearer ${token}`;
  const url = `${API_BASE_URL}/general/switch-notify`;

  try {
    setLoading(true);
    const response = await axios.patch(url, null, { headers });
    const message = response?.data?.msg || "تم حذف المباراة بنجاح";

    if (response.data.key === "success") {
      setLoading(false);
      toast(message, {
        style: {
          borderColor: "#28a745",
          boxShadow: "0px 0px 10px rgba(40, 167, 69, .5)",
        },
      });
    } else {
      setLoading(false);
      toast(response?.data?.msg, {
        style: {
          borderColor: "#dc3545",
          boxShadow: "0px 0px 10px rgba(220, 53, 69, .5)",
        },
        description: "استجابة غير متوقعة",
      });
    }
  } catch (error) {
    setLoading(false);
    const errorMessage = error?.response?.data?.msg || error?.msg;
    toast(errorMessage, {
      style: {
        borderColor: "#dc3545",
        boxShadow: "0px 0px 10px rgba(220, 53, 69, .5)",
      },
    });
  }
}