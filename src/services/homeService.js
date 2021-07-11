import { getTestimonials } from "./testimonials";
import { getNews } from "./newsService";
import AlertMessage from "../components/AlertMessage";

export const listNews = () => {
	try {
        const listOfNews = getNews().data;
        return listOfNews
	} catch (error) {
		AlertMessage(
			"info",
			"Error",
			`${error.error.message ? error.error.message : error.error}`
		);
	}
};

export const listTestimonials = () => {
    try {
        const listOfTestimonials = getTestimonials().data;
        return listOfTestimonials
	} catch (error) {
		AlertMessage(
			"info",
			"Error",
			`${error.error.message ? error.error.message : error.error}`
		);
	}
}
