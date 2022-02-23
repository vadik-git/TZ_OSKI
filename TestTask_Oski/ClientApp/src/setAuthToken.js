import http from './http-common';

 const setAuthToken = (token) => {
	if (token) {
		http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}
	else {
		delete http.defaults.headers.common["Authorization"];
	}  
}

export default setAuthToken;