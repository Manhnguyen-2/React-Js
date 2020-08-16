import http from "./axiosHttp";

const getAll = () => {
  return http.get("/products");
};
const getCateAll = () => {
  return http.get(`/categories`);
};
const get = (id) => {
  return http.get(`/products/${id}`);
};

const create = (data) => {
  return http.post("/products", data);
};

const update = (id, data) => {
  return http.put(`/products/${id}`, data);
};

const remove = (id) => {
  console.log(id);
  return http.delete(`/products/${id}`);
};
// const ralationshipParent = (cateId) => {
//   return http.get(`/categories/${cateId}?_embed=product`);
// };
// const ralationshipChild = (productId) => {
//   return http.get(`/products/${productId}?_embed=category`);
// };

export default {
  getCateAll,
  // ralationshipChild,
  // ralationshipParent,
  getAll,
  get,
  create,
  update,
  remove,
};
