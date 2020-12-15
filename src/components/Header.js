import React from 'react'

const Header = props => {

  const handleAccess = () => {
    const intentToSignIn = !props.isAuthenticated;
    props.onAccess(intentToSignIn);
  }

  const getLabel = () => {
    if (props.isAuthenticated) {
      return 'Sign Out';
    } else {
      return 'Sign In with Google';
    }
  }

  return (
    <div>

      <div className="ui  inverted segment">
        <div style={{ width: '100%', padding: '20px', top: '10px' }}>
          <h1 style={{ textAlign: 'center' }}>Welcome to the Oyster</h1>
        </div>
        <div className="ui large  pointing menu transition ">
          <div className="ui container">
            <a className="active blue item">Home </a>
            <a className="blue item">About</a>
            <a className="blue item">Company</a>
            <a className="blue item">Careers</a>
          </div>
          <a className=" ui blue large  right floated  button" onClick={() => handleAccess()}>
            <i className="medium google plus icon"></i>
            {getLabel()}
          </a>

        </div>
      </div >
    </div>
  )
}

export default Header;