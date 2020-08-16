import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import firebase from "../../../../firebase";

const AddProduct = ({ onAdd, categories }) => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();

  const [desc, setDesc] = useState("");
  const onHandleSubmit = (data) => {
    console.log(data.image[0]);
    let file = data.image[0];
    // tạo reference chứa ảnh trên firesbase
    let storageRef = firebase.storage().ref(`images/${file.name}`);
    // đẩy ảnh lên đường dẫn trên
    storageRef.put(file).then(function () {
      storageRef.getDownloadURL().then((url) => {
        console.log(url);
        // Tạo object mới chứa toàn bộ thông tin từ input
        const newData = {
          id: Math.random().toString(36).substr(2, 9),
          ...data,
          desc,
          image: url,
        };
        console.log(newData);
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        onAdd(newData);
        history.push("/admin/Products");
      });
    });
  };
  const handleEditorChange = (content, editor) => {
    setDesc(content);
  };

  return (
    <div>
      <form className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="form-group">
          <p>Tên sản phẩm</p>
          <input
            type="text"
            name="name"
            className="form-control"
            id="productName"
            aria-describedby="nameHelp"
            ref={register}
          />
          {errors.name && errors.name.type === "required" && (
            <span>Không để trống</span>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <span>Bạn phải nhập ít nhất 5 ký tự</span>
          )}
        </div>
        <div className="form-group-1">
          <p>ảnh sản phẩm</p>
          <div className="input-group">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile02"
                name="image"
                ref={register}
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
          <p>giá sản phẩm</p>
          <input
            type="text"
            name="price"
            className="form-control"
            id="productPrice"
            aria-describedby="priceHelp"
            ref={register}
          />
        </div>
        <div className="form-group">
          <p>giảm giá sản phẩm</p>
          <input
            type="text"
            name="sale_price"
            className="form-control"
            id="productPrice"
            aria-describedby="priceHelp"
            ref={register}
          />
        </div>
        <div className="form-group">
          <p>mô tả chi tiết sản phẩm</p>
          <Editor
            init={{
              height: 500,
              images_upload_url: "postAcceptor.php",
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor |  image link\
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help",
            }}
            onEditorChange={handleEditorChange}
          />
        </div>
        <div className="form-group">
          <p>Danh mục sản phẩm</p>

          <select
            name="cate"
            ref={register}
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
        <button type="submit" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};

AddProduct.propTypes = {
  onAdd: PropTypes.func,
};

export default AddProduct;
