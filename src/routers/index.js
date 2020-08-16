import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/views/Admin/Dashboard";
import AddProduct from "../pages/views/Admin/AddProduct";
import Products from "../pages/views/Admin/Products";
import Home from "../pages/views/Main/Home";
import About from "../pages/views/Main/About";
import { LayoutAmin } from "../pages/layouts/LayoutAmin";
import { LayoutMain } from "../pages/layouts/LayoutMain";
import EditProduct from "../pages/views/Admin/EditProduct";
import AddCategorie from "../pages/views/Admin/AddCategorie";
import Categorie from "../pages/views/Admin/Categorie";
import EditCategorie from "../pages/views/Admin/EditCategorie";
import DetailProduct from "../pages/views/Main/DetailProduct";
import CateProduct from "../pages/views/Main/CateProduct";

const Routers = ({
  categories,
  products,
  onRemove,
  onAdd,
  onUpdate,
  //category
  onAddCate,
  onRemoveCate,
  onUpdateCate,
}) => {
  const onHandleRemove = (id) => {
    onRemove(id);
  };
  const onHandleAdd = (product) => {
    onAdd(product);
  };
  const onHandleUpdate = (id, product) => {
    onUpdate(id, product);
  };
  // categorie
  const onHandleAddCate = (categorie) => {
    onAddCate(categorie);
  };
  const onHandleRemoveCate = (id) => {
    onRemoveCate(id);
  };
  const onHandleUpdateCate = (id, categorie) => {
    onUpdateCate(id, categorie);
  };
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/admin/:path?">
            <LayoutAmin>
              <Switch>
                <Route exact path="/admin">
                  <Dashboard />
                </Route>
                {/* product */}
                <Route path="/admin/AddProducts">
                  <AddProduct categories={categories} onAdd={onHandleAdd} />
                </Route>
                <Route
                  path="/admin/Products/:id"
                  render={(props) => (
                    <EditProduct
                      {...props}
                      categories={categories}
                      products={products}
                      onUpdate={onHandleUpdate}
                    />
                  )}
                ></Route>
                <Route path="/admin/Products">
                  <Products products={products} onRemove={onHandleRemove} />
                </Route>
                {/* product */}
                {/* categorie */}
                <Route path="/admin/AddCategorie">
                  <AddCategorie onAddCate={onHandleAddCate} />
                </Route>
                <Route
                  path="/admin/categorie/:id"
                  render={(props) => (
                    <EditCategorie
                      {...props}
                      categories={categories}
                      onUpdateCate={onHandleUpdateCate}
                    />
                  )}
                ></Route>
                <Route path="/admin/Categorie">
                  <Categorie
                    categories={categories}
                    onRemoveCate={onHandleRemoveCate}
                  />
                </Route>

                {/* categorie */}
              </Switch>
            </LayoutAmin>
          </Route>

          <Route>
            <LayoutMain>
              <Switch>
                <Route path="/" exact>
                  <Home products={products} categories={categories} />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/detail_products/:id">
                  <DetailProduct products={products} categories={categories} />
                </Route>
                <Router path="/CateProduct/:id">
                  <CateProduct products={products} categories={categories} />
                </Router>
              </Switch>
            </LayoutMain>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
Routers.propTypes = {};

export default Routers;
