import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
const Categorie = ({ categories, onRemoveCate }) => {
  const onHandleRemoveCate = (id) => {
    onRemoveCate(id);
  };
  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <button className="btn-m">
            <Link to="/admin/AddCategorie">Thêm danh mục</Link>
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
                  <th>Detail</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {categories.map(({ id, name, image, desc }, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>
                      <img src={image} width="50" alt="" />
                    </td>
                    <td>{parse(desc)}</td>
                    <td>
                      <Link
                        className="btn btn-primary"
                        to={`/admin/categorie/${id}`}
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
                            onHandleRemoveCate(id);
                        }}
                      >
                        Xoa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
Categorie.propTypes = {
  categories: PropTypes.array,
  onRemoveCate: PropTypes.func,
};

export default Categorie;
