import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import BarChart from "./BarChart";
import Animation from "./Animation";

class Home extends Component {
  render() {
    const { auth, firstName } = this.props;

    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="main__container">
        <h1 className="main__title">Welcome</h1>
        <BarChart />
        <Animation />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Home);
