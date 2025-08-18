import axios from "./axiosInstance.js";

export const getClients = (params) => axios.get('/clients', { params });
export const createClient = (body) => axios.post('/clients', body);
export const updateClient = (id, body) => axios.put(`/clients/${id}`, body);
export const deleteClient = (id) => axios.delete(`/clients/${id}`);