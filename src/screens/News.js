import * as React from "react";

import { HeaderBackOffice } from '../components/HeaderBackOffice'
import NewsList from '../components/NewsList';
import { editNews, deleteNews, getNews, createNews} from '../services/newsService';


function News() {  
  return (
    <>
      <HeaderBackOffice createNews={createNews} />
      <NewsList editNews={editNews} deleteNews={deleteNews} getNews={getNews}/>
    </>
  );
}

export default News;
