import http from "./axiosHttp";

const getAll = () => {
  return http.get("/categories");
};
const getProductAll = () => {
  return http.get("/products");
};

const get = (id) => {
  return http.get(`/categories/${id}`);
};

const create = (data) => {
  return http.post("/categories", data);
};

const update = (id, data) => {
  return http.put(`/categories/${id}`, data);
};

const remove = (id) => {
  console.log(id);
  return http.delete(`/categories/${id}`);
};
const ralationshipParent = (cateId) => {
  return http.get(`/categories/${cateId}?_embed=product`);
};
const ralationshipChild = (productId) => {
  return http.get(`/products/${productId}?_embed=category`);
};

export default {
  ralationshipChild,
  ralationshipParent,
  getAll,
  get,
  getProductAll,
  create,
  update,
  remove,
};
