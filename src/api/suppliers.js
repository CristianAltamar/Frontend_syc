import axios from "./axiosInstance.js";

export const getSupplier = (params) => axios.get('/suppliers', { params });
export const createSupplier = (body) => axios.post('/suppliers', body);
export const updateSupplier = (id, body) => axios.put(`/suppliers/${id}`, body);
export const deleteSupplier = (id) => axios.delete(`/suppliers/${id}`);