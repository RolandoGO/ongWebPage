import React, { useEffect, useState, useMemo } from 'react';
import Card from '../components/Card';
import { getNews } from '../services/newsService';

export const NewsHome = () => {

  const [ news, setNews ] = useState([]);
  const [ errorNews, seterrorNews ] = useState(null);

  // Integration API
  const getNewsNotices = async () => {
    try {
      const response = await getNews();
      const { data } = response;
      const news = data.data;
      setNews(news);
    } catch (error) {
      const errorNews = "Upsss... No se pudo cargar el contenido."
      seterrorNews(errorNews);
    }
  };

  useEffect(() => {
    getNewsNotices();
  }, []);


  const memoNews = useMemo(
    () =>
    news.map((newNotice) => {
      console.log(newNotice);
        return (
          <Card key={newNotice.id} title={newNotice.name} image={newNotice.image}/> 
        );
      }),
    [news]
  );

  const memoOrError = !errorNews 
    ? 
    <div className="row card-grid-container">
      {memoNews}
    </div> 
    : 
    <p className="alert alert-danger text-center">{errorNews}</p>;

  return (
    <div className="container">
          {memoOrError}
    </div>
  )
};
