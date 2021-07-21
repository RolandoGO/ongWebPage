import React, {useEffect, useState} from "react";
import { Slider } from "./components/Slider/Slider";
import { NewsHome } from './components/NewsHome'
import { ActivitiesHome } from './components/ActivitiesHome'
import { ListNews, ListSlides, ListActivities } from "../../services/homeService";

function Home() {
	const news = ListNews()
	const slides = ListSlides()
	const activities = ListActivities()

	const { newsList, loading,  error } = news
	const {activitiesList, status, error2} = activities
	
	return (
		<div>
			<h1>HEADER</h1>
			<Slider slides={ slides }/>
			<div className='container-fluid'>
				<div className='row'>
					<h2 className='text-center'>Texto Bienvenida</h2>
				</div>
				<div className='row'>
					<h2 className='text-center'>Últimas Novedades</h2>
					<NewsHome news={newsList} error={ error}/>
					
				</div>
				<div className='row'>
					<h2 className='text-center'>Últimas Actividades</h2>
					<ActivitiesHome activities={ activitiesList}/>
				</div>
				<div className='row'>
					<h2 className='text-center'>Testimonios</h2>
				</div>
			</div>
			<h1>FOOTER</h1>
		</div>
	);
}

export default Home;
