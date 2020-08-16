import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright © Your Website 2020
          </p>
        </div>
        {/* /.container */}
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
