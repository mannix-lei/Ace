import Axios from 'axios';

const instance = Axios.create({
	baseURL: 'http://localhost:3000',
	timeout: 10000,
	headers: {
		'X-Custom-Header': 'foobar',
		'cache-control': 'no-cache',
	},
});

instance.interceptors.request.use(
	(config) => {
		return config;
	},
	(err) => {
		return Promise.reject(err);
	},
);

instance.interceptors.response.use(
	(res) => {
		if (res.status > 400) {
			throw Error;
		}
		return res.data;
	},
	(err) => {
		return Promise.reject(err);
	},
);

export default instance;
