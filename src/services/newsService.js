import axiosIntance from "./apiService";

export const getNews = () => axiosIntance.get("/news")

export const createNews = (news) => axiosIntance.post("/news", news)

export const editNews = (news) => axiosIntance.put("/news/"+news.id,news)

export const  deleteNews = (news)=> axiosIntance.delete("/news/"+news.id)






    

    