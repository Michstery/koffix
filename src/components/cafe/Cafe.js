import React from "react";
import CafeList from "./cafe-list/CafeList";
import CafeDetail from "./cafe-list/CafeDetail";

const Cafe = () => {
  return (
    <div className="container">
      <div style={{ padding: "0px 0 20px 0" }} className="row">
        <div className="col-md-6">
          <CafeList />
        </div>
        <div style={{ padding: "186px 0px 0 0" }} className="col-md-6">
          <CafeDetail />
        </div>
      </div>
    </div>
  );
};

export default Cafe;
