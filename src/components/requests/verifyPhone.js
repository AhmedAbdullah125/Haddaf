import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { toast } from "sonner";
export async function verifyPhone({ data, setLoading, formData, navigate }) {
  const token = localStorage.getItem("token");
  const formData2 = new FormData();
  formData2.append('phone', formData.mobile);
  formData2.append('code', data.otp);
  const headers = { "accept-language": "ar" };
  if (token) headers.Authorization = `Bearer ${token}`;
  const url = `${API_BASE_URL}/provider/verify-code`;
  try {
    setLoading(true);
    const response = await axios.post(url, formData2, { headers });
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
      navigate("/profile");
      setTimeout(() => { setLoading(false); }, 1000);
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