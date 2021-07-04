import axiosInstance from "./apiService";

export const getTestimonials = () => axiosInstance.get("/testimonials");

export const postTestimonials = (testimonialsData) =>
  axiosInstance.post("/testimonials", {
    id: 0,
    name: testimonialsData.name,
    image: testimonialsData.image,
    description: testimonialsData.description,
  });
