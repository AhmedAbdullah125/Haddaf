// lib/api/login.js
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { toast } from "sonner";

export async function addStadium({ values, setLoading,navigate }) {
  const token = localStorage.getItem("token");
  console.log(values);
  
  const formData = new FormData();
  formData.append('name[ar]', values.arabic_name);
  formData.append('name[en]', values.english_name);
  formData.append('map_desc', values.address);
  formData.append('lat', values.location.lat);
  formData.append('lng', values.location.lng);
  const headers = { "accept-language": "ar" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const url = `${API_BASE_URL}/provider/stadiums`;

  try {
    setLoading(true);
    const response = await axios.post(url, formData, { headers });
    const message = response?.data?.msg || "تم إضافة الملعب بنجاح";
    console.log(response);

    if (response.data.key === "success") {
      setLoading(false);
      toast(message, {
        style: {
          borderColor: "#28a745",
          boxShadow: "0px 0px 10px rgba(40, 167, 69, .5)",
        },
      });
      navigate("/playgrounds");
      //reload after 2secons 
      setTimeout(() => {
        window.location.reload();
      }, 500);
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
