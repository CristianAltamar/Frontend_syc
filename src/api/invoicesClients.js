import axiosInstance from "./axiosInstance";

export const getInvoicesClients = (params) => axiosInstance.get('/invoicesClients', { params });
export const getInvoicesClientById = (id) => axiosInstance.get(`/invoicesClients/${id}`);
export const createInvoicesClient = (body) => axiosInstance.post('/invoicesClients', body);
export const updateInvoicesClient = (id, body) => axiosInstance.put(`/invoicesClients/${id}`, body);
export const deleteInvoicesClient = (id) => axiosInstance.delete(`/invoicesClients/${id}`);