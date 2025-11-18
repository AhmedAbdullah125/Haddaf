'use client';
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { useQuery } from "@tanstack/react-query";
const fetchMatches = async (id) => {
  const token = localStorage.getItem("token");
  const headers = {};
  // const headers = { "accept-language": lang, };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await axios.get(`${API_BASE_URL}/provider/games/${id}`,{ headers });
  return response.data.data;
}

export const useGetSingleMatchData = (id) => {
  const query = useQuery({
    queryKey: ["singleMatchDetails", id],
    queryFn: () => fetchMatches(id),
    // only run when we have lang and a country id
    // enabled: Boolean(lang) && (country !== undefined && country !== null),
    staleTime: 1000 * 60 * 1, // 1 minutes
    cacheTime: 1000 * 60 * 1,
  });

  return query;
};
