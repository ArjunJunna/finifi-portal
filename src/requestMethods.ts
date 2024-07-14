import axios from "axios";
import { BASE_URL } from "@/lib/Constants";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
});

