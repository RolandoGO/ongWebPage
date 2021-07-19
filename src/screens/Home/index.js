import React from "react";
import { Slider } from "./components/Slider/Slider";
import FooterWeb from "../../components/FooterWeb"
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
			<FooterWeb/>
		</div>
	);
}

export default home;
