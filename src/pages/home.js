import React, { Fragment } from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="login">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 img-fluid">
                <img
                  src="https://www.nicepng.com/png/detail/108-1088579_vector-tree-valentine-love-tree.png"
                  className="img-fluid"
                  alt="webpage"
                />
              </div>

              <div className="col-lg-6 mt-5 img-fluid">
                <div className="info">
                  <div className="loveheading">
                    <h2 className="fst-italic">lovebirds</h2>
                    <h3 className="secondline mt-5">Welcome to Lovebirds</h3>
                  </div>

                  <div className="formcontainer">
                    <div id="error"></div>
                    <form id="form">
                      <div className="row">
                        <div className="col-25">
                          <label htmlFor="uname" className="user">
                            <b>Username</b>
                          </label>
                        </div>

                        <div className="col-75 form-grp">
                          <input
                            type="text"
                            id="uname"
                            placeholder="username"
                            name="uname"
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-25">
                          <label htmlFor="psw" className="pass">
                            <b>Password</b>
                          </label>
                        </div>
                        <div className="col-75 form-grp">
                          <input
                            type="password"
                            id="psw"
                            placeholder="*********"
                            name="psw"
                            required
                          />
                        </div>
                      </div>
                      <div className="row sign">
                        <input type="submit" id="submit" value="Sign in" />
                        <strong className="signin">or</strong>
                        <p className="signin2">
                          {" "}
                          <img
                            src="/assets/image/google-icon.jpg"
                            className="google"
                          />
                          Sign in with google
                        </p>
                        <strong className="create">
                          <b>New lovebirds?</b>
                          <a href="#">
                            <b>Create Account</b>
                          </a>
                        </strong>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
