import axiosIntance from "./apiService";

const getNews = () => axiosIntance.get("/news")

const createNews = (news) => axiosIntance.post("/news", news)

const editNews = (news) => axiosIntance.put("/news/"+news.id,news)

const deleteNews = (news)=> axiosIntance.delete("/news/"+news.id)

export {
    getNews,
    createNews,
    editNews,
    deleteNews
}




    

    