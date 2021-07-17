import React from "react";
import { Slider } from "./components/Slider/Slider";

function home() {
	return (
		<div>
			<h1>HEADER</h1>
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
			<h1>FOOTER</h1>
		</div>
	);
}

export default home;
