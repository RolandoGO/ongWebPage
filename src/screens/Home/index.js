import React from "react";
import { Slider } from "./components/Slider/Slider";

function home() {
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
				<div className='row'>
					<h2 className='text-center'>Testimonios</h2>
				</div>
			</div>
			
		</div>
	);
}

export default home;
