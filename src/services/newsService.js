import axiosIntance from "./apiService";

export default function newsService(){


    async function getNews(){

       
            const call =  await axiosIntance.get("/news")
            const response= await call.data
            return response
    }
       

    async function createNews(news){

      
            const call =  await axiosIntance.post("/news", news)
            const response= await call.data
            return response
    } 
      
   


    async function editNews(news){
     
            const call =  await axiosIntance.put("/news/"+news.id,news)
            const response= await call.data
            return response

    }

    async function deleteNews(news){
     
            const call =  await axiosIntance.delete("/news/"+news.id)
            const response= await call.success
            return response

    }

    return{
        getNews,
        createNews,
        editNews,
        deleteNews
    }
}




    

    