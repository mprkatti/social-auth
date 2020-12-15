import React from 'react';
import Header from './Header';
import Content from './Content';
import GoogleAuth from './GoogleAuth';

class App extends React.Component {

  state = { isSignedIn: null, isAuthenticated: false };

  onAccess = action => {
    this.setState({ isSignedIn: action });
  }

  setSignIn = signin => {
    this.setState({ isAuthenticated: signin, isSignedIn: signin === false ? null : signin });
  }


  render() {

    return (
      <div className="" >
        <Header onAccess={this.onAccess} isAuthenticated={this.state.isAuthenticated} />
        <Content isAuthenticated={this.state.isAuthenticated} />
        <GoogleAuth setSignIn={this.setSignIn} isSignedIn={this.state.isSignedIn} />
      </div >
    );
  }


}

export default App;