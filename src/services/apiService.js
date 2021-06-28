import axios from "axios";

const STORAGE_USER_TOKEN = 'token'
const  instance = axios.create({
	baseURL: "http://ongapi.alkemy.org/api",
});

instance.interceptors.request.use(function (config) {
	const token = localStorage.getItem(STORAGE_USER_TOKEN)

	if(token) config.headers.common['Authorization'] = token;

	return config;
});

export default instance;

