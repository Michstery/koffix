import React from "react";
import { connect } from "react-redux";
import { actionItem } from "../../../actions";
import "./cafeList.css";

class CafeList extends React.Component {
  renderList() {
    return this.props.cafe.map((value, index) => {
      return (
        <div style={{ padding: "10px 10px 10px 10px" }} className="col-md-6">
          <div
            onClick={() => this.props.actionItem(value)}
            className="card"
            style={{
              cursor: "pointer",
              borderRadius: "10px 10px 10px 10px",
              boxShadow: "2px 0px 5px rgba(68, 67, 67, 0.5)"
            }}
          >
            <div style={{ padding: "0 0 0 0" }} className="card-body">
              <img
                className="pic"
                style={{ borderRadius: "10px 10px 0px 0px" }}
                alt=""
                width="263px"
                height="200px"
                src={value.url}
              />
            </div>
            <div
              style={{ borderRadius: "0 0 10px 10px" }}
              className="card-footer mx-auto"
            >
              <h3> {value.mood} </h3>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div style={{ paddingTop: "80px" }}>
        {/* <div className="row">
          <div className="col-md-12"> */}
        <h1 style={{ padding: "20px 0 20px 0" }}> MENU </h1>
        <div className="row">{this.renderList()}</div>
      </div>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { cafe: state.cafe };
};

export default connect(mapStateToProps, { actionItem: actionItem })(CafeList);
