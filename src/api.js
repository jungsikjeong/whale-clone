import config from './config.js';

const { API_ENDPOINT } = config;

const api = {
  fetchGetKeywords: async (query) => {
    const response = await fetch(`${API_ENDPOINT}?query=${query}`);
    let data = await response.json();

    console.log(data);
    // return data;
  },
};

export default api;
