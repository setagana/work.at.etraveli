import React, { Component } from 'react';
import { eitherFunctionOrNot } from '../../utils/generalUtils';
import { isAuthenticated, markSessionAsAuthenticated } from '../utils/authUtil';
import * as myTripAPI from '../services/myTripAPI';

function persistJWT(data) {
  if (data.jwt !== null) {
    markSessionAsAuthenticated(data.jwt);
  }
  return data;
}

export default function loginPageWithRPC(LoginPage) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(email, bookingNumber) {
      const onLogin = this.props.onLogin;
      myTripAPI.login(email, bookingNumber)
        .then(persistJWT)
        .then(() =>
          eitherFunctionOrNot(onLogin)
            .fold(
              () => {},
              () => onLogin(isAuthenticated())
            )
        )
        .catch(e => console.error(e));
    }

    render() {
      return <LoginPage onLogin={this.handleLogin} />;
    }
  };
}

/*import { connect } from 'react-redux'
import { eitherFunctionOrNot } from '../../utils/generalUtils';
import { isAuthenticated, markSessionAsAuthenticated } from '../utils/authUtil';
import * as myTripAPI from '../services/myTripAPI';
import LoginPage from '../components/loginPage';
import store from '../store';
import * as actions from '../actions'

function persistJWT(data) {
  if (data.jwt !== null) {
    markSessionAsAuthenticated(data.jwt);
  }
  return data;
}

const mapStateToProps = (state) => {
  return {
    emailValue: store.loginFormState.emailValue,
    bookingNumberValue: store.loginFormState.bookingNumberValue,
    errorText: store.errorState.errorText,
    errorExists: store.errorState.errorExists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => {
      const onLogin = this.props.onLogin;
      myTripAPI.login(this.props.emailValue, this.props.bookingNumberValue)
        .then(persistJWT)
        .then(() =>
          eitherFunctionOrNot(onLogin)
            .fold(
              () => {},
              () => onLogin(isAuthenticated())
            )
        )
        .catch(e => this.props.onError(e));
    },
    onError: (e) => {
      dispatch(actions.setErrorText(e.status));
      dispatch(actions.toggleError());
    }
  }
}

const LoginPageWithRPC = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default LoginPageWithRPC*/