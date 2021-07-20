import React, { useEffect, useState, useMemo } from 'react';
import { getNews } from "../services/newsService";

export const NewsHome = () => {

  const [ news, setNews ] = useState([]);
  const [ errorNews, seterrorNews ] = useState(null);

  // Integration API
  const getNewsNotices = async () => {
    try {
      const resultado = await getNews();
      const { data } = resultado;
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
        return (
          // <NewsHomeCard key={newNotice.id} newNotice={newNotice} /> Place Card component, Ticket 98 in progress
        );
      }),
    [news]
  );

  const memoOrError = !errorNews ? memoNews : <p className="alert alert-danger text-center">{errorNews}</p>;

  return (
    <div className="container">
      <div className="row mt-5">
          {memoOrError}
      </div>
    </div>
  )
};
