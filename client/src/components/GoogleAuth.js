import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '522079809058-2nfek2o98na9se24c0moolvch6pgu4q2.apps.googleusercontent.com',
          scope: 'profile email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(
        gapi.auth2
          .getAuthInstance()
          .currentUser.get()
          .getId(),
        gapi.auth2
          .getAuthInstance()
          .currentUser.get()
          .getBasicProfile()
          .getEmail(),
      );
    } else {
      this.props.signOut();
    }
  };

  onSingInClick = () => {
    this.auth.signIn();
  };

  onSingOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui inverted button" onClick={this.onSingOutClick}>
          {' '}
          Wyloguj{' '}
        </button>
      );
    } else {
      return (
        <button className="ui inverted button" onClick={this.onSingInClick}>
          {' '}
          Zaloguj{' '}
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
