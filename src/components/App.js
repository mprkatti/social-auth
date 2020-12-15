import React from 'react';
import Header from './Header';
import Content from './Content';
import GoogleAuth from './GoogleAuth';

class App extends React.Component {

  state = { intentToSign: null, isAuthenticated: false };

  onAccess = action => {
    this.setState({ intentToSign: action });
  }

  setSignIn = signin => {
    this.setState({ isAuthenticated: signin, intentToSign: signin === false ? null : signin });
  }


  render() {

    return (
      <div className="" >
        <Header onAccess={this.onAccess} isAuthenticated={this.state.isAuthenticated} />
        <Content isAuthenticated={this.state.isAuthenticated} />
        <GoogleAuth setSignIn={this.setSignIn} intentToSign={this.state.intentToSign} />
      </div >
    );
  }


}

export default App;