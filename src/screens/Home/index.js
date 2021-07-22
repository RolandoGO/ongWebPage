import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Slider } from "./components/Slider/Slider";
import "../../styles/HomeTestimonialStyles.css"
import { getTestimonials } from "../../services/testimonials";
import handleHtmlText from "../../utils/textToHtmlFunction"


function Home() {
	
	
	const [testimonialData, setTestimonialData]=useState()

	useEffect(()=>{
		
		handleHomeTestimonials(setTestimonialData)
	
	},[])


	return (
		<div>
			
			<Slider />
			<div className='container-fluid'>
				<div className='row'>
					<h2 className='text-center'>Texto Bienvenida</h2>
				</div>
				<div className='row'>
                    <h2 className='text-center'>Últimas Novedades</h2>
				</div>
				<h2>Testimonios</h2>
				<div><Link to="/testimonios">Ver todos</Link></div>
				<div className='row p-5'>
					{testimonialData}
					
				</div>
			</div>
			
		</div>
	);
}

export default Home;


//This function takes the first four testimonials and pass it to the setTestimonialData to set the state. In case of error set the state whit a error message

async function handleHomeTestimonials(setTestimonialData){
	
	let data;
	
	try{
		const call = await getTestimonials()
		const response = call.data.data
		
		data = response.slice(0,4).map(testimonials=>{
			return(

				<div key={testimonials.id} className="col-md-3 bg-light d-fle flex-column shadow-lg p-3 mb-5 bg-white rounded ">
					<div><strong>Nombre: </strong><p> {testimonials.name}</p></div>
					<div className="homeTestimonials" style={{backgroundImage:`url(${testimonials.image})`}}></div>
					<div style={{wordWrap:"break-word"}} dangerouslySetInnerHTML={handleHtmlText(testimonials.description)}></div>
				</div>
			)
		})
	}
	catch{
		data=
		(<div className="col-md-3 bg-light m-1 d-fle flex-column shadow-lg p-3 mb-5 bg-white rounded">
			<h2>No se pudieron cargar los testimonios</h2>
		</div>)
	}

	
	setTestimonialData(data)

}


