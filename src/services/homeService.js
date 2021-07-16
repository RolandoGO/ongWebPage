import { getTestimonials } from "./testimonials";
import { getNews } from "./newsService";

export const listNews = () => getNews().data;

export const listTestimonials= () => getTestimonials().data;
		
	

