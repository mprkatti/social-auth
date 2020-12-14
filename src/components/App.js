import React from 'react';
import Header from './Header';
import Content from './Content';
import GoogleAuth from './GoogleAuth';

class App extends React.Component {

  state = { isSignedIn: null };

  onAccess = (action) => {
    console.log('action:', action);
    this.setState({ isSignedIn: action });
  }

  setSignIn = (signin) => {

    this.setState({ isSignedIn: signin });
  }


  render() {

    return (
      <div className="" >
        <Header onAccess={this.onAccess} isSignedIn={this.state.isSignedIn} />
        <Content isSignedIn={this.state.isSignedIn} />
        <GoogleAuth setSignIn={this.setSignIn} isSignedIn={this.state.isSignedIn} />
      </div >
    );
  }


}

export default App;