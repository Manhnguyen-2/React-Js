import React, { useState, useEffect } from "react";

import "./App.css";
import apiRequest from "./api/productApi";
import apiCateRequest from "./api/categorieApi";
import Routers from "./routers";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log("failed to request API: ", error);
      }
    };
    getProducts();
  }, []);

  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter((product) => product.id !== data.id);
      setProducts(newProducts);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([...products, data]);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };

  // Cập nhật product
  const onHandleUpdate = (updateProduct) => {
    const newProducts = products.map(
      (product) => (product.id === updateProduct.id ? updateProduct : product) // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    localStorage.setItem("products", JSON.stringify(newProducts));
    setProducts(newProducts);
  };

  //category
  //listcate
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await apiCateRequest.getAll();
        setCategories(data);
      } catch (error) {
        console.log("failed to request API: ", error);
      }
    };
    getCategories();
  }, []);

  //adcate
  const onHandleAddCate = async (categorie) => {
    try {
      const { data } = await apiCateRequest.create(categorie);
      setCategories([...categories, data]);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  // Xóa danh mục
  const onHandleRemoveCate = async (id) => {
    try {
      apiCateRequest.remove(id);
      const newCategories = categories.filter(
        (categories) => categories.id !== id
      );
      setCategories(newCategories);
    } catch (error) {
      console.log("failed to request API: ", error);
    }
  };
  //cập nhật danh mục
  const onHandleUpdateCate = (updateCategorie) => {
    const newCategories = categories.map(
      (categorie) =>
        categorie.id === updateCategorie.id ? updateCategorie : categorie // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    localStorage.setItem("categorie", JSON.stringify(newCategories));
    setCategories(newCategories);
  };

  return (
    <div className="App">
      <Routers
        onAdd={onHandleAdd}
        products={products}
        onRemove={onHandleRemove}
        onUpdate={onHandleUpdate}
        // categorie
        onAddCate={onHandleAddCate}
        categories={categories}
        onRemoveCate={onHandleRemoveCate}
        onUpdateCate={onHandleUpdateCate}
      />
    </div>
  );
}

export default App;
