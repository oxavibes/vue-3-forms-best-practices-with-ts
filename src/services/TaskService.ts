import axios from "axios";
import type Payload from "@/types/Payload";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export const postTask = (payload: Payload) => {
  return request.post("/posts", payload);
};
