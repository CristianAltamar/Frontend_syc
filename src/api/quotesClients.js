import axios from "./axiosInstance.js";

export const getQuotesClients = (params) => axios.get('/quotesClients', { params });
export const getQuotesClientById = (id) => axios.get(`/quotesClients/${id}`);
export const createQuotesClient = (body) => axios.post('/quotesClients', body);
export const updateQuotesClient = (id, body) => axios.put(`/quotesClients/${id}`, body);
export const deleteQuotesClient = (id) => axios.delete(`/quotesClients/${id}`);