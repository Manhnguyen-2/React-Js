import React, { useState } from "react";
import PropTypes from "prop-types";
import Nav from "../../../../Components/Main/Nav";
import Footer from "../../../../Components/Main/Footer";
import { useParams, Link } from "react-router-dom";
import Slidebar from "../../../../Components/Main/Slidebar";
import parse from "html-react-parser";
const CateProduct = ({ products, categories }) => {
  let { id } = useParams();
  const newProducts = products.filter((product) => product.cate == id);
  return (
    <div>
      {" "}
      <Nav />
      {/* Page Content */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">Shop Name</h1>
            {categories.map(({ name }, index) => (
              <div key={index} className="list-group">
                <a href="#" className="list-group-item">
                  {name}
                </a>
              </div>
            ))}
          </div>
          {/* /.col-lg-3 */}
          <div className="col-lg-9">
            <div
              id="carouselExampleIndicators"
              className="carousel slide my-4"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={1}
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={2}
                />
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid"
                    src="http://placehold.it/900x350"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="http://placehold.it/900x350"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="http://placehold.it/900x350"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="row">
              {newProducts.map(
                ({ id, name, image, price, desc, sale_price }, index) => (
                  <div key={index} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                      <a href="#">
                        <img className="card-img-top" src={image} alt="" />
                      </a>

                      <div className="card-body">
                        <h4 className="card-title">
                          <Link to={"/detail_products/" + id}>{name}</Link>
                        </h4>
                        <h5>{price}</h5>
                        <h5>{sale_price}</h5>
                        <p className="card-text">{parse(desc)}</p>
                      </div>

                      <div className="card-footer">
                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            {/* /.row */}
          </div>
          {/* /.col-lg-9 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      {/* Footer */}
      <Footer />
    </div>
  );
};

CateProduct.propTypes = {};

export default CateProduct;
