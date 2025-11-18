// lib/api/login.js
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { toast } from "sonner";

export async function changPhone({ data, setLoading, setStep, setFormData }) {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append('phone', data.mobile);
  formData.append('password', data.password);
  const headers = { "accept-language": "ar" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const url = `${API_BASE_URL}/provider/change-phone`;

  try {
    setLoading(true);
    const response = await axios.post(url, formData, { headers });
    const message = response?.data?.msg || "تم تحديث الملف الشخصي بنجاح";
    console.log(response);

    if (response.data.key === "success") {
      setLoading(false);
      toast(message, {
        style: {
          borderColor: "#28a745",
          boxShadow: "0px 0px 10px rgba(40, 167, 69, .5)",
        },
      });
      //after 2 seconds reload the page
      setStep(2);
      setFormData({
        mobile: data.mobile,
        password: data.password,
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
