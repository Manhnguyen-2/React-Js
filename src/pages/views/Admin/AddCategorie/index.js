import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import firebase from "../../../../firebase";

const AddCategorie = ({ onAddCate }) => {
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
        onAddCate(newData);
        history.push("/admin/categorie");
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
          <p>Tên danh mục</p>
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
          <p>ảnh danh mục</p>
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
          <p>mô tả chi tiết</p>
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
        <button type="submit" className="btn btn-primary">
          Thêm danh mục
        </button>
      </form>
    </div>
  );
};

AddCategorie.propTypes = {
  onAddCate: PropTypes.func,
};

export default AddCategorie;
