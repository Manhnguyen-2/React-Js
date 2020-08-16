import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import apiRequest from "./../../../../api/productApi";
import parse from "html-react-parser";
const Products = ({ products, onRemove }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCate = async () => {
      try {
        const response = await apiRequest.getCateAll();
        setCategories(response.data);
      } catch (error) {}
    };
    getCate();
  }, []);
  const onHandleRemove = (id) => {
    onRemove(id);
  };

  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <button className="btn-m">
            <Link to="/admin/AddProducts">Thêm sản phẩm</Link>
          </button>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Sale </th>
                  <th>Detail</th>
                  <th>Categorie</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map(
                  (
                    { id, name, image, price, sale_price, desc, cate },
                    index
                  ) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>
                        <img src={image} width="50" alt="" />
                      </td>
                      <td>{price}</td>
                      <td>{sale_price}</td>
                      <td>{parse(desc)}</td>
                      <td>
                        {categories.map((categories) =>
                          categories.id === cate ? categories.name : ""
                        )}
                      </td>
                      <td>
                        <Link
                          className="btn btn-primary"
                          to={`/admin/Products/${id}`}
                        >
                          Sửa
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={(e) => {
                            if (
                              window.confirm(
                                "Are you sure you wish to delete this item?"
                              )
                            )
                              onHandleRemove(id);
                          }}
                        >
                          Xoa
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
Products.propTypes = {
  products: PropTypes.array,
  onRemove: PropTypes.func,
};

export default Products;
