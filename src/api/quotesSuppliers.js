import axiosInstance from "./axiosInstance.js";

export const getQuotesSuppliers = (params) => axiosInstance.get('/quotesSuppliers', { params });
export const getQuotesSupplierById = (id) => axiosInstance.get(`/quotesSuppliers/${id}`);
export const createQuotesSupplier = (body) => axiosInstance.post('/quotesSuppliers', body);
export const updateQuotesSupplier = (id, body) => axiosInstance.put(`/quotesSuppliers/${id}`, body);
export const deleteQuotesSupplier = (id) => axiosInstance.delete(`/quotesSuppliers/${id}`);