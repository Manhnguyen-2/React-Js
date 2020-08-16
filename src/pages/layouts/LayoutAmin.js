import React from "react";
import Navbar from "../../Components/Admin/Navbar";
import Sliderbar from "../../Components/Admin/Sliderbar";
import Footer from "../../Components/Admin/Footer";
import "../../Asset/admin/assets/css/cs-skin-elastic.css";
import "../../Asset/admin/assets/css/style.css";
export const LayoutAmin = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
        <div id="right-panel" className="right-panel">
          <Sliderbar />
          <div className="content">
            <div className="animated fadeIn">{children}</div>
          </div>
        </div>
        <div className="clearfix" />
        <Footer />
      </div>
    </div>
  );
};
