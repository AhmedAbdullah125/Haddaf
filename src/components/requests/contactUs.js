// lib/api/login.js
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { toast } from "sonner";

export async function contactUs(values, setLoading, form) {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append('complaint', values.message);
  const headers = { "accept-language": "ar" };
  if (token) headers.Authorization = `Bearer ${token}`;
  const url = `${API_BASE_URL}/general/contact-us`;

  try {
    setLoading(true);
    const response = await axios.post(url, formData, { headers });
    const message = response?.data?.msg || "تم إرسال رسالتك بنجاح";
    console.log(response);

    if (response.data.key === "success") {
      setLoading(false);
      toast(message, {
        style: {
          borderColor: "#28a745",
          boxShadow: "0px 0px 10px rgba(40, 167, 69, .5)",
        },
      });
      //reload after half second 
      form.reset();
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
