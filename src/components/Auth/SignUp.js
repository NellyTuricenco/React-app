import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      this.props.signUp(this.state);
    }
    console.log("The password does not match");
    this.setState({ error: "The password does not match" });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="form__group" onSubmit={this.handleSubmit}>
          <h5 className="form__title">Sign Up</h5>
          <div className="form__inner">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstname"
              placeholder="First name"
              onChange={this.handleChange}
              required="true"
            />
          </div>
          <div className="form__inner">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastname"
              placeholder="Last name"
              onChange={this.handleChange}
              required="true"
            />
          </div>
          <div className="form__inner">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form__inner">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form__inner">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form__error">
            {authError ? <p>{authError}</p> : null}
          </div>
          <button className="form__btn form__inner"> Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
