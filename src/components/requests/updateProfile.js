// lib/api/login.js
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { toast } from "sonner";

export async function updateProfile({ data }) {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  console.log(data);

  formData.append('name', data.fullName);
  if (data.avatar) {
    formData.append('image', data.avatar);
  }
  formData.append('identity_number', data.nationalId);
  const headers = { "accept-language": "ar" };

  if (token) headers.Authorization = `Bearer ${token}`;

  const url = `${API_BASE_URL}/provider/profile/update?_method=PATCH`;

  try {
    const response = await axios.post(url, formData, { headers });
    const message = response?.data?.msg || "تم تحديث الملف الشخصي بنجاح";
    console.log(response);

    if (response.data.key === "success") {
      toast(message, {
        style: {
          borderColor: "#28a745",
          boxShadow: "0px 0px 10px rgba(40, 167, 69, .5)",
        },
      });
      window.location.reload();
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
