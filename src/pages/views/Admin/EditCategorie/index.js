import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";

const EditCategorie = ({ categories, onUpdateCate }) => {
  let { id } = useParams();
  let history = useHistory();
  const categorie = categories.find((categorie) => categorie.id === id);

  const [currentCategorie, setCurrentCategorie] = useState(categorie);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onUpdateCate(currentCategorie);
    history.push("/admin/categorie");
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCategorie({
      ...currentCategorie,
      [name]: value,
    });
  };
  return (
    <div>
      <form action="" onSubmit={onHandleSubmit} className="w-50">
        <div className="form-group">
          <p>Tên danh mục</p>
          <input
            type="text"
            name="name"
            value={currentCategorie.name}
            onChange={onHandleChange}
            className="form-control"
          />
        </div>

        <div className="form-group-1">
          <p>ảnh danh mục</p>
          <div className="input-group">
            <img
              name="image"
              className="card-img-top"
              src={currentCategorie.image}
              alt=""
            />
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
          <p>Chi tiết danh mục</p>
          <input
            type="text"
            name="desc"
            value={currentCategorie.desc}
            onChange={onHandleChange}
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Cập nhật</button>
      </form>
    </div>
  );
};

EditCategorie.propTypes = {
  categories: PropTypes.array,
};

export default EditCategorie;
