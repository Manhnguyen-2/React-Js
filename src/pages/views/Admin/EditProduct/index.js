import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";
import parse from "html-react-parser";

import firebase from "../../../../firebase";

const EditProduct = ({ products, onUpdate, categories }) => {
  let { id } = useParams();
  let history = useHistory();
  // const { register, errors, handleSubmit } = useForm();
  const product = products.find((product) => product.id === id);

  const [currentProduct, setCurrentProduct] = useState(product);

  const onHandleSubmit = (e) => {
    // let file = currentProduct.image[0];
    // let storageRef = firebase.storage().ref(`images/${file.name}`);
    // // đẩy ảnh lên đường dẫn trên
    // storageRef.put(file).then(function () {
    //   storageRef.getDownloadURL().then((url) => {
    //     console.log(url);
    //     const newData = {
    //       id: Math.random().toString(36).substr(2, 9),
    //       ...data,
    //       image: url,
    //     };
    e.preventDefault();
    onUpdate(currentProduct);
    history.push("/admin/products");
    //   });
    // });
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    // const { image, url } = e.target;
    setCurrentProduct({
      ...currentProduct,
      [name]: value,
      // [image]: url,
    });
  };
  return (
    <div>
      <form action="" onSubmit={onHandleSubmit} className="w-50">
        <div className="form-group">
          <p>Tên sản phẩm</p>
          <input
            type="text"
            name="name"
            value={currentProduct.name}
            onChange={onHandleChange}
            // ref={register}
            className="form-control"
          />
          {/* {errors.name && errors.name.type === "required" && (
            <span>Không để trống</span>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <span>Bạn phải nhập ít nhất 5 ký tự</span>
          )} */}
        </div>
        <div className="form-group">
          <p> giá sản phẩm</p>
          <input
            type="text"
            name="price"
            value={currentProduct.price}
            // ref={register}
            onChange={onHandleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p> giảm giá sản phẩm</p>
          <input
            type="text"
            name="sale_price"
            value={currentProduct.sale_price}
            // ref={register}
            onChange={onHandleChange}
            className="form-control"
          />
        </div>
        <div className="form-group-1">
          <img
            name="image"
            className="card-img-top"
            src={currentProduct.image}
            alt=""
          />
          <p>ảnh sản phẩm</p>
          <div className="input-group">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile02"
                name="image"
                // ref={register}
              />
              <label
                className="custom-file-label"
                htmlFor="inputGroupFile02"
                aria-describedby="imageHelp"
              >
                Choose image
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <p>Chi tiết sản phẩm</p>
          <input
            type="text"
            name="desc"
            // ref={register}
            value={currentProduct.desc}
            onChange={onHandleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Danh mục sản phẩm</p>
          <select
            name="cate"
            onChange={onHandleChange}
            className="custom-select"
            id="inputGroupSelect01"
          >
            {categories.map(({ id, name }, index) => (
              <option key={index} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary">Cập nhật</button>
      </form>
    </div>
  );
};

EditProduct.propTypes = {
  products: PropTypes.array,
};

export default EditProduct;
