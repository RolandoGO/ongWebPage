import axiosIntance from "./apiService";

export default function newsService(){


    async function getNews(){

        try{
            const call =  await axiosIntance.get("/news")
            const response= await call.data
            return response

        }
        catch(err){
            if(err.request)alert("check the url or the conextion")
            else alert("error in the resourse")
        }



    }

    async function createNews(news){

        try{
            const call =  await axiosIntance.post("/news", news)
            const response= await call.data
            return response

        }
        catch(err){
            if(err.request)alert("check the url or the conextion")
            else alert("error in the resourse")
        }

    }

    async function editNews(news){
        try{
            const call =  await axiosIntance.put("/news/"+news.id,news)
            const response= await call.data
            return response

        }
        catch(err){
            if(err.request)alert("check the url or the conextion")
            else alert("error in the resourse")
        }

    }

    async function deleteNews(news){
        try{
            const call =  await axiosIntance.delete("/news/"+news.id)
            const response= await call.success
            return response

        }
        catch(err){
            if(err.request)alert("check the url or the conextion")
            else alert("error in the resourse")
        }


    }

    return{
        getNews,
        createNews,
        editNews,
        deleteNews
    }
}


