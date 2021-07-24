import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Slider } from "./components/Slider/Slider";
import { getTestimonials } from "../../services/testimonials";
import InnerHtml from "../../components/innerHtml"
import "../../styles/HomeTestimonialStyles.css"
// import { NewsHome } from "./components/NewsHome";
import { ActivitiesHome } from "./components/ActivitiesHome";
import {
  ListNews,
  ListSlides,
  ListActivities,
} from "../../services/homeService";

function Home() {
	const [testimonials, setTestimonialData]=useState([])
  const news = ListNews();
  const slides = ListSlides();
  const activities = ListActivities();

  const { newsList, loading, error } = news;
  const { activitiesList, status, error2 } = activities;

	useEffect(()=>{
		const handlerTestimonials = async ()=>{
			try{
				const {data: { data }} = await getTestimonials()
				setTestimonialData(data)

			}catch(e){
				console.log(e)
			}
		}
		handlerTestimonials()
	}, [])

	const renderTestimonials = useMemo(()=>{
		if(!testimonials.length) {
			return (
							<div className="col-md-3 bg-light m-1 d-fle flex-column shadow-lg p-3 mb-5 bg-white rounded">
								<h2>No se pudieron cargar los testimonios</h2>
							</div>
							)
		}

		return (
			<>
				{testimonials.slice(0,4).map(testimonials=>{
					return(

						<div key={testimonials.id} className="col-md-3 bg-light d-fle flex-column shadow-lg p-3 mb-5 bg-white rounded ">
							<div><strong>Nombre: </strong><p> {testimonials.name}</p></div>
							<div className="homeTestimonials" style={{backgroundImage:`url(${testimonials.image})`}}></div>
							<InnerHtml html={testimonials.description}/>
						</div>
					)
				})}
			</>
		)
			
	}, [testimonials])

  return (
    <div>
      <h1>HEADER</h1>
      <Slider slides={slides} />
      <div className="container-fluid">
        <div className="row">
          <h2 className="text-center">Texto Bienvenida</h2>
        </div>
        <div className="row">
          <h2 className="text-center">Últimas Novedades</h2>
          {/* <NewsHome news={newsList} error={error} /> */}
        </div>
        <div className="row">
          <h2 className="text-center">Últimas Actividades</h2>
          <ActivitiesHome activities={activitiesList} />
        </div>
        <div className="row">
          <h2 className="text-center">Testimonios</h2>
					<div>
						<Link to="/testimonios">Ver todos</Link>
					</div>
					<div className='row p-5'>
						{renderTestimonials}
					</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
