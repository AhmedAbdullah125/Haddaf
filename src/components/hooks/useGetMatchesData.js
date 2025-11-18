'use client';
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { useQuery } from "@tanstack/react-query";
const fetchMatches = async (stadium, page) => {
  const token = localStorage.getItem("token");
  const headers = {};
  // const headers = { "accept-language": lang, };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await axios.get(
    `${API_BASE_URL}/provider/stadiums/${stadium}/games?page=${page}`,
    { headers }
  );
  return response.data.data;
}

export const useGetMatchesData = (stadium, page) => {
  const query = useQuery({
    queryKey: ["matches", stadium, page],
    queryFn: () => fetchMatches(stadium, page),
    // only run when we have lang and a country id
    // enabled: Boolean(lang) && (country !== undefined && country !== null),
    staleTime: 1000 * 60 * 1, // 1 minutes
    cacheTime: 1000 * 60 * 1,
  });

  return query;
};
