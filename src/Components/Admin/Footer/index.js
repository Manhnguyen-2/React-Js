import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div>
      {" "}
      <footer className="site-footer">
        <div className="footer-inner bg-white">
          <div className="row">
            <div className="col-sm-6">Copyright © 2018 Ela Admin</div>
            <div className="col-sm-6 text-right">
              Designed by <a href="https://colorlib.com">Colorlib</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
