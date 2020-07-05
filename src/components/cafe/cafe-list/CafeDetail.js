import React from "react";
import { connect } from "react-redux";
import "./cafeList.css";

const CafeDetail = ({ selectedCafe }) => {
  if (!selectedCafe) {
    return (
      <div className="mx-auto">
        <h5 style={{ textAlign: "center" }}> Select A Menu </h5>
      </div>
    );
  }
  return (
    <div
      style={{
        cursor: "pointer",
        // borderRadius: "10px 10px 10px 10px",
        boxShadow: "2px 0px 5px rgba(68, 67, 67, 0.5)"
      }}
      className="card"
    >
      <div className="card-header mx-auto">
        <h5 className="pt-2 pb-1"> {selectedCafe.mood} ORDER - PAGE </h5>
      </div>
      <div className="card-body">
        <form>
          <div class="form-group">
            <label for="inputName">Name</label>
            <input
              height="900px"
              width="900px"
              type="text"
              class="form-control text-area"
              id="inputAddress"
              placeholder="ENTER NAME"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <textarea
              name="field9"
              className="field-style"
              placeholder="1234 Main St"
            ></textarea>
            {/* <input
              height="900px"
              width="900px"
              type="text"
              class="form-control text-area"
              id="inputAddress"
              placeholder="1234 Main St"
            /> */}
          </div>
          <div class="form-row">
            <div class="form-group col-md-8">
              <label for="inputCity"> Email </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-7">
              <label for="inputCity">Phone Number</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputState"> Cup Size </label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option> BIG </option>
                <option> MEDIUM </option>
                <option> SMALL </option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState"> Sweetener </label>
              <select id="inputState" class="form-control">
                <option selected>None...</option>
                <option> SUGAR </option>
                <option> SACCARINE </option>
                <option> HONEY </option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState"> Cream </label>
              <select id="inputState" class="form-control">
                <option selected>None...</option>
                <option> Milk </option>
                <option> Goat Milk </option>
                <option> Skim Milk </option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary mx-auto">
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedCafe: state.selectedCafe };
};
export default connect(mapStateToProps)(CafeDetail);
