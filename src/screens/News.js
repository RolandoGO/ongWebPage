import * as React from "react";

<<<<<<< HEAD
import { HeaderBackOffice } from '../components/HeaderBackOffice'
import NewsList from '../components/NewsList';
import newsService from '../services/newsService';


function News() {

  const { editNews, deleteNews, getNews, createNews}=newsService()

  
=======
import { HeaderBackOffice } from "../components/HeaderBackOffice";
import NewsList from "../components/NewsList";

function News() {
>>>>>>> master
  return (
    <>
      <HeaderBackOffice createNews={createNews} />
      <NewsList editNews={editNews} deleteNews={deleteNews} getNews={getNews}/>
    </>
  );
}

export default News;
