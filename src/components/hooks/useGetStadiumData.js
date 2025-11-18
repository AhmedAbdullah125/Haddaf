'use client';
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { useQuery } from "@tanstack/react-query";
const fetchStadium = async (id) => {
  const token = localStorage.getItem("token");
  const headers = {};
  // const headers = { "accept-language": lang, };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await axios.get(
    `${API_BASE_URL}/provider/stadiums/${id}`,
    { headers }
  );
  return response.data.data;
}
export const useGetStadiumData = ({id}) => {
  const query = useQuery({
    queryKey: ["stadium", id],
    queryFn: () => fetchStadium(id),
    // only run when we have lang and a country id
    // enabled: Boolean(lang) && (country !== undefined && country !== null),
    staleTime: 1000 * 60 * 1, // 1 minutes
    cacheTime: 1000 * 60 * 1,
  });

  return query;
};
