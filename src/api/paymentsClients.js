import axios from "./axiosInstance.js";

export const getPaymentsClients = (params) => axios.get('/paymentsClients', { params });
export const createPaymentsClient = (body) => axios.post('/paymentsClients', body);
export const deletePaymentsClient = (id) => axios.delete(`/paymentsClients/${id}`);