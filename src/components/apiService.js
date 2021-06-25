import axios from "axios";

const userToken = localStorage.getItem('token') ? localStorage.getItem('token') : ''

const instance = axios.create({
    baseURL: 'http://url.dummy.org/',
    headers: {'Authorization': 'Bearer ' + {userToken}}
});
  
