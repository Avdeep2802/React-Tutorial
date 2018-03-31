
import React from 'react';
import {connect} from 'react-redux';
import User from '../components/User';
import Main from '../components/Main';

import {add_number, sub_number} from '../actions/mathActions';
import {setUserName, setAge} from '../actions/userActions';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Main  />
        <User username = {this.props.user.name} />
      </div>
      );
    }
  }

const mapStateToProps= (state) => {
  return{
    user: state.user,
    math: state.math,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNamee : (name) => {
      dispatch(setUserName(name));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
