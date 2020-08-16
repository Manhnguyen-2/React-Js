import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
          <div id="main-menu" className="main-menu collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/admin">
                  <i className="menu-icon fa fa-tachometer" />
                  Dashboard{" "}
                </Link>
              </li>
              <li className="menu-title">UI elements</li>
              {/* /.menu-title */}
              <li className="menu-item-has-children dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  <i className="menu-icon fa fa-list-alt" />
                  CATEGORY
                </a>
                <ul className="sub-menu children dropdown-menu">
                  {" "}
                  <li>
                    <i className="fa fa-th" />
                    <Link className="nav-link" to="/admin/Categorie">
                      List
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-sign-in" />
                    <Link className="nav-link" to="/admin/AddCategorie">
                      Add
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  <i className="menu-icon fa fa-product-hunt" />
                  PRODUCTS
                </a>
                <ul className="sub-menu children dropdown-menu">
                  <li>
                    <i className="fa fa-table" />
                    <Link className="nav-link" to="/admin/Products">
                      list
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-sign-in" />
                    <Link to="/admin/AddProducts">Add</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </nav>
      </aside>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
