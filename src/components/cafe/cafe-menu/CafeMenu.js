import React from "react";
import "./cafeMenu.css";

class CafeMenu extends React.Component {
  render() {
    return (
      <div style={{ padding: "80px 0 0 0 " }}>
        <div>
          {/* cofee and cafe section starts here */}
          <section style={{ position: "relative" }} className="coffee-sectione">
            {/* cafe list */}
            <div className="overlay"></div>
            <div style={{ padding: "100px 0 0 0" }} className="row cafe-liste">
              <h2 className="col-md-12 mx-auto pb-6">Our Honoured Cafe's</h2>
              <div style={{ padding: "60px 15px 0" }} className="row">
                <div className="col-md-3">
                  <a href="/cafelist">
                    <div
                      style={{
                        borderRadius: "5px",
                        boxShadow: "2px 0px 5px rgba(68, 67, 67, 0.5)",
                        zIndex: "10"
                      }}
                      className="card mx-auto"
                    >
                      <div
                        style={{ padding: "0 0 0 0 " }}
                        className="card-body"
                      >
                        <img
                          width="299px"
                          height="200px"
                          src="https://cdn.pixabay.com/photo/2016/01/19/15/05/coffee-shop-1149155__340.jpg"
                        />
                      </div>
                      <div
                        style={{ color: "#111111", fontWeight: "700" }}
                        className="card-footer mx-auto"
                      >
                        KOFI CAFE
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/cafelist">
                    <div
                      style={{
                        borderRadius: "5px",
                        boxShadow: "2px 0px 5px rgba(68, 67, 67, 0.5)",
                        zIndex: "10"
                      }}
                      className="card mx-auto"
                    >
                      <div style={{ padding: "0 0 0 0" }} className="card-body">
                        <img
                          width="299px"
                          height="200px"
                          src="https://cdn.pixabay.com/photo/2016/02/19/10/52/bakery-1209446__340.jpg"
                        />
                      </div>
                      <div
                        style={{ color: "#111111", fontWeight: "700" }}
                        className="card-footer mx-auto"
                      >
                        {" "}
                        KAZEEM ROTUNDA{" "}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/cafelist">
                    <div
                      style={{
                        borderRadius: "5px",
                        boxShadow: "2px 0px 5px rgba(68, 67, 67, 0.5)",
                        zIndex: "10"
                      }}
                      className="card mx-auto"
                    >
                      <div style={{ padding: "0 0 0 0" }} className="card-body">
                        <img
                          width="299px"
                          height="200px"
                          src="https://cdn.pixabay.com/photo/2017/08/07/07/06/coffeehouse-2600877__340.jpg"
                        />
                      </div>
                      <div
                        style={{ color: "#111111", fontWeight: "700" }}
                        className="card-footer mx-auto"
                      >
                        ISREAL COFFEE STORE
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/cafelist">
                    <div
                      style={{
                        borderRadius: "5px",
                        boxShadow: "2px 0px 5px rgba(68, 67, 67, 0.5)",
                        zIndex: "10"
                      }}
                      className="card mx-auto"
                    >
                      <div style={{ padding: "0 0 0 0" }} className="card-body">
                        <img
                          width="299px"
                          height="200px"
                          src="https://cdn.pixabay.com/photo/2015/07/05/11/56/store-832188__340.jpg"
                        />
                      </div>
                      <div
                        style={{ color: "#111111", fontWeight: "700" }}
                        className="card-footer mx-auto"
                      >
                        {" "}
                        DIVINE CAFE{" "}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* cofee and cafe section ends here */}
        </div>
      </div>
    );
  }
}

export default CafeMenu;
