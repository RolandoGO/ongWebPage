import axios from "axios";

const userToken = '';

useEffect(() => {
	if (localStorage.getItem("token")) {
		userToken=localStorage.getItem("token")
	}
}, [localStorage.getItem("token")])

  
	
export const  instance = axios.create({
	baseURL: "http://url.dummy.org/",
	headers: { Authorization: "Bearer " + { userToken } },
});
