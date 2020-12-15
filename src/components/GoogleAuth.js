
import React, { Component } from 'react'

export default class GoogleAuth extends Component {

  state = { isSignedIn: null };

  componentDidMount() {

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '708151511536-mrtn16ihas6nodbsadobqtkh75ltd4i1.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.props.setSignIn(this.state.isSignedIn);
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });


  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    this.props.setSignIn(this.state.isSignedIn);
  }

  render() {
    if (!this.props.isSignedIn && this.auth) {
      console.log('Signing out !');
      this.auth.signOut();
    }
    if (this.auth && this.auth.isSignedIn.get()) {
      return <></>
    }
    if (this.props.isSignedIn && this.auth) {
      this.auth.signIn();
    }

    return (
      <>

      </>
    )
  }
}

