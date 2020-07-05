import React from "react";
import "./landingPage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: "80px" }} className="cotainer-fluid">
        <div>
          {/* hero section */}
          <section className="hero-section">
            <div className="hero-text">
              <h1>Welcome</h1>
              <h1>To KoFFiXX</h1>
              <p>Coffee makes us severe, and grave, and philosophical.</p>
              {/* <Link to="/songs" style={{ color: "#fff" }}> */}
              <button className="get-involvedButton">Order Now</button>
              {/* </Link> */}
            </div>
          </section>
          {/* hero section ends here */}
          {/* cofee and cafe section starts here */}
          <section className="coffee-section">
            <div className="row">
              <div className="col-md-3">
                <div style={{ margin: "-50px 0 0 0" }} className="card mx-auto">
                  <div className="card-header"> EASY </div>
                  <div style={{ padding: "0 0 0 0 " }} className="card-body">
                    <img
                      width="299px"
                      height="200px"
                      alt=""
                      src="https://cdn.pixabay.com/photo/2016/08/10/15/10/green-tea-1583546__340.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div style={{ margin: "-50px 0 0 0" }} className="card mx-auto">
                  <div className="card-header"> SAFE </div>
                  <div style={{ padding: "0 0 0 0" }} className="card-body">
                    <img
                      width="299px"
                      height="200px"
                      alt=""
                      src="https://cdn.pixabay.com/photo/2017/04/13/15/19/hands-2227857__340.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div style={{ margin: "-50px 0 0 0" }} className="card mx-auto">
                  <div className="card-header"> CONVENIENT </div>
                  <div style={{ padding: "0 0 0 0" }} className="card-body">
                    <img
                      width="299px"
                      height="200px"
                      alt=""
                      src="https://cdn.pixabay.com/photo/2016/07/26/09/34/gourmet-1542365__340.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div style={{ margin: "-50px 0 0 0" }} className="card mx-auto">
                  <div className="card-header"> RELIABLE </div>
                  <div style={{ padding: "0 0 0 0" }} className="card-body">
                    <img
                      width="299px"
                      height="200px"
                      alt=""
                      src="https://cdn.pixabay.com/photo/2014/05/02/12/41/candle-335965__340.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* cafe list */}
            <div style={{ padding: "140px 0 0 0" }} className="row cafe-list">
              <h2 className="col-md-12 mx-auto pb-6"> Our Honoured Cafe's </h2>
              <div style={{ padding: "60px 15px 0" }} className="row">
                <div className="col-md-3">
                  <a href="/cafelist">
                    <div className="card mx-auto">
                      <div
                        style={{ padding: "0 0 0 0 " }}
                        className="card-body"
                      >
                        <img
                          width="299px"
                          height="200px"
                          alt=""
                          src="https://cdn.pixabay.com/photo/2016/01/19/15/05/coffee-shop-1149155__340.jpg"
                        />
                      </div>
                      <div className="card-footer"> KOFI CAFE </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/cafelist">
                    <div className="card mx-auto">
                      <div style={{ padding: "0 0 0 0" }} className="card-body">
                        <img
                          width="299px"
                          height="200px"
                          alt=""
                          src="https://cdn.pixabay.com/photo/2016/02/19/10/52/bakery-1209446__340.jpg"
                        />
                      </div>
                      <div className="card-footer"> KAZEEM ROTUNDA </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/cafelist">
                    <div className="card mx-auto">
                      <div style={{ padding: "0 0 0 0" }} className="card-body">
                        <img
                          width="299px"
                          height="200px"
                          alt=""
                          src="https://cdn.pixabay.com/photo/2017/08/07/07/06/coffeehouse-2600877__340.jpg"
                        />
                      </div>
                      <div className="card-footer"> ISREAL COFFEE STORE </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/cafelist">
                    <div className="card mx-auto">
                      <div style={{ padding: "0 0 0 0" }} className="card-body">
                        <img
                          width="299px"
                          height="200px"
                          alt=""
                          src="https://cdn.pixabay.com/photo/2015/07/05/11/56/store-832188__340.jpg"
                        />
                      </div>
                      <div className="card-footer"> DIVINE CAFE </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* cofee and cafe section ends here */}
          {/* coffee products starts here */}
          <section className="coffee-product">
            <h2 className="mx-auto"> Our Products </h2>
            <div style={{ padding: "70px 10px" }}>
              <div className="row">
                <div className="col-md-3 col-12">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(350px, 1fr))",
                      margin: "0 auto"
                    }}
                    className="container"
                  >
                    <div
                      style={{
                        width: "300px",
                        height: "300px",
                        margin: "0 19px",
                        boxShadow: "0 15px 60px rgba(0,0,0,.5)"
                      }}
                      className="card"
                    >
                      <div className="face face1">
                        <div className="content">
                          <img
                            width="298x"
                            height="298px"
                            alt=""
                            src="https://cdn.pixabay.com/photo/2015/02/05/01/33/valentines-day-624440__340.jpg"
                          />
                        </div>
                      </div>
                      <div className="face face2">
                        <h2>Espresso</h2>
                      </div>
                    </div>
                    <img src="" />
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(350px, 1fr))",
                      margin: "0 auto"
                    }}
                    className="container"
                  >
                    <div
                      style={{
                        width: "300px",
                        height: "300px",
                        margin: "0 19px",
                        boxShadow: "0 15px 60px rgba(0,0,0,.5)"
                      }}
                      className="card"
                    >
                      <div className="face face1">
                        <div className="content">
                          <img
                            width="298px"
                            height="298px"
                            alt=""
                            src="https://cdn.pixabay.com/photo/2015/11/07/11/16/coffee-1030971__340.jpg"
                          />
                        </div>
                      </div>
                      <div className="face face2">
                        <h2>Latte</h2>
                      </div>
                    </div>
                    <img src="" />
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(350px, 1fr))",
                      margin: "0 auto"
                    }}
                    className="container"
                  >
                    <div
                      style={{
                        width: "300px",
                        height: "300px",
                        margin: "0 19px",
                        boxShadow: "0 15px 60px rgba(0,0,0,.5)"
                      }}
                      className="card"
                    >
                      <div className="face face1">
                        <div className="content">
                          <img
                            width="298x"
                            height="298px"
                            alt=""
                            src="https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970__340.jpg"
                          />
                        </div>
                      </div>
                      <div className="face face2">
                        <h2>Black Coffee</h2>
                      </div>
                    </div>
                    <img src="" />
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(350px, 1fr))",
                      margin: "0 auto"
                    }}
                    className="container"
                  >
                    <div
                      style={{
                        width: "300px",
                        height: "300px",
                        margin: "0 19px",
                        boxShadow: "0 15px 60px rgba(0,0,0,.5)"
                      }}
                      className="card"
                    >
                      <div className="face face1">
                        <div className="content">
                          <img
                            width="298px"
                            height="298px"
                            alt=""
                            src="https://cdn.pixabay.com/photo/2016/11/29/12/45/beverage-1869598__340.jpg"
                          />
                        </div>
                      </div>
                      <div className="face face2">
                        <h2>Cuppuccino</h2>
                      </div>
                    </div>
                    <img src="" />
                  </div>
                </div>
                <div className="col-md-3 col-12 pt-5">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(350px, 1fr))",
                      margin: "0 auto"
                    }}
                    className="container"
                  >
                    <div
                      style={{
                        width: "300px",
                        height: "300px",
                        margin: "0 19px",
                        boxShadow: "0 15px 60px rgba(0,0,0,.5)"
                      }}
                      className="card"
                    >
                      <div className="face face1">
                        <div className="content">
                          <img
                            width="298px"
                            height="298px"
                            alt=""
                            src="https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527__340.jpg"
                          />
                        </div>
                      </div>
                      <div className="face face2">
                        <h2>Lime Tea</h2>
                      </div>
                    </div>
                    <img src="" />
                  </div>
                </div>
                <div className="col-md-3 col-12 pt-5">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(350px, 1fr))",
                      margin: "0 auto"
                    }}
                    className="container"
                  >
                    <div
                      style={{
                        width: "300px",
                        height: "300px",
                        margin: "0 19px",
                        boxShadow: "0 15px 60px rgba(0,0,0,.5)"
                      }}
                      className="card"
                    >
                      <div className="face face1">
                        <div className="content">
                          <img
                            width="298px"
                            height="298px"
                            alt=""
                            src="https://cdn.pixabay.com/photo/2016/03/27/21/37/tea-1284366__340.jpg"
                          />
                        </div>
                      </div>
                      <div className="face face2">
                        <h2>Ice Tea</h2>
                      </div>
                    </div>
                    <img src="" />
                  </div>
                </div>
                <div className="col-md-3 col-12 pt-5">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(350px, 1fr))",
                      margin: "0 auto"
                    }}
                    className="container"
                  >
                    <div
                      style={{
                        width: "300px",
                        height: "300px",
                        margin: "0 19px",
                        boxShadow: "0 15px 60px rgba(0,0,0,.5)"
                      }}
                      className="card"
                    >
                      <div className="face face1">
                        <div className="content">
                          <img
                            width="298px"
                            height="298px"
                            alt=""
                            src="https://cdn.pixabay.com/photo/2016/01/19/18/03/tea-1150046__340.jpg"
                          />
                        </div>
                      </div>
                      <div className="face face2">
                        <h2>Kudi Tea</h2>
                      </div>
                    </div>
                    <img src="" />
                  </div>
                </div>
                <div className="col-md-3 col-12 pt-5">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(350px, 1fr))",
                      margin: "0 auto"
                    }}
                    className="container"
                  >
                    <div
                      style={{
                        width: "300px",
                        height: "300px",
                        margin: "0 19px",
                        boxShadow: "0 15px 60px rgba(0,0,0,.5)"
                      }}
                      className="card"
                    >
                      <div className="face face1">
                        <div className="content">
                          <img
                            width="298px"
                            height="298px"
                            alt=""
                            src="https://cdn.pixabay.com/photo/2018/07/12/21/59/drink-3534434__340.jpg"
                          />
                        </div>
                      </div>
                      <div className="face face2">
                        <h2>Lemonade</h2>
                      </div>
                    </div>
                    <img src="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* coffee products ends here */}
          {/* contact us starts here */}
          <section style={{ background: "#e9eaee" }} className="contact us">
            <div style={{ padding: "20px 0 " }} className="container">
              <h2 style={{ padding: "25px 0 " }} className="mx-auto">
                CONTACT US
              </h2>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputName"> Name </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                    height="900px"
                    width="900px"
                    type="text"
                    class="form-control text-area"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress2"> Message </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder=""
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">Phone Number</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>
                </div>
                {/* <div class="form-group">
                  <div class="form-check">
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                  </div>
                </div> */}
                <button type="submit" class="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </section>
          {/* contact us ends here */}
          {/* About us Page */}
          <section
            style={{ background: "", padding: "40px 0" }}
            className="About Us"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    style={{
                      borderRadius: "5px",
                      boxShadow: "2px 0px 5px rgba(68, 67, 67, 0.5)"
                    }}
                    height="490px"
                    width="560px"
                    alt=""
                    src="https://cdn.pixabay.com/photo/2013/07/12/18/21/tea-153336__340.png"
                    src="https://cdn.pixabay.com/photo/2014/09/24/17/13/coffee-mugs-459324__340.jpg"
                    src="https://cdn.pixabay.com/photo/2017/03/27/13/59/adult-2178904__340.jpg"
                    src="https://cdn.pixabay.com/photo/2019/11/11/15/32/coffee-4618705__340.jpg"
                  />
                </div>
                <div className="col-md-6">
                  <div className="container">
                    <h2 className="mx-auto"> ABOUT US </h2>
                    <hr />
                    <p
                      style={{
                        fontSize: "18px",
                        fontFamily: " 'Ubuntu', sans-serif",
                        lineHeight: "1.9"
                      }}
                    >
                      KoFFiXX' Mugs was founded by TechSavvy-Groups-Nigeria,
                      three coffee lovers.
                      <br /> Through this, they share their love of fine coffee
                      and of giving back to the community.
                      <br /> All net profits from sales at this outlet are
                      donated to charity. Each year, KoFFiXX' Mugs plan to
                      select an organization that is making a difference in the
                      community.
                      <br />
                      For 2019, the New Horizons Program at The City Mission
                      will serve as beneficiary.
                      <br /> The Attainu family are active volunteers with this
                      organization who provide skill oriented training to youth
                      and help making a better career.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About us Page */}
        </div>
      </div>
    );
  }
}

export default LandingPage;
