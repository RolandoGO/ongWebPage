import axiosInstance from "./apiService";

export const getMembers = () => axiosInstance.get("/members");
