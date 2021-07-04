import axiosInstance from "./apiService";

export const getTestimonials = () => axiosInstance.get("/testimonials");
