import React from 'react'

const Header = props => {

  const handleAccess = () => {
    props.onAccess(!props.isSignedIn);
  }

  const getLabel = () => {
    if (props.isSignedIn) {
      return 'Sign Out';
    } else {
      return 'Sign In with Google';
    }
  }

  return (
    <div>

      <div className="ui  inverted segment">
        <div style={{ width: '100%', padding: '20px', top: '10px' }}>
          <h1 style={{ textAlign: 'center' }}>This is your oyster</h1>
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