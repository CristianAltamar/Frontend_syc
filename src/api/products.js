import axios from './axiosInstance';

export const getProducts = (params) => axios.get('/products', { params });
export const createProduct = (body) => axios.post('/products', body);
export const updateProduct = (id, body) => axios.put(`/products/${id}`, body);
export const deleteProduct = (id) => axios.delete(`/products/${id}`);