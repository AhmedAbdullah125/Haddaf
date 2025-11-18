// lib/api/login.js
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { toast } from "sonner";

export async function addMatch(id, values, setLoading,navigate ) {
  const token = localStorage.getItem("token");
  console.log(values);
  
  const formData = new FormData();
  formData.append('stadium_id', id);
  formData.append('start_time', values.dateTime);
  formData.append('duration', values.duration);
  formData.append('price', values.slotCost);
  formData.append('players_count', values.players);
  const headers = { "accept-language": "ar" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const url = `${API_BASE_URL}/provider/games`;

  try {
    setLoading(true);
    const response = await axios.post(url, formData, { headers });
    const message = response?.data?.msg || "تم إضافة المباراة بنجاح";
    console.log(response);

    if (response.data.key === "success") {
      setLoading(false);
      toast(message, {
        style: {
          borderColor: "#28a745",
          boxShadow: "0px 0px 10px rgba(40, 167, 69, .5)",
        },
      });
      navigate(`/playground/matches/${id}`);
      //reload after half second 
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
