import React, { Component } from 'react';
import { connect } from 'react-redux';
import Routes from './routes';
// import fetchPermission from './api/fetch-permission';
import getCookies from './get-cookie';
import { setCookies } from './actions';

class App extends Component {
  state = {
    loading: false
  }
  async componentWillMount() {
    const cookies = await getCookies()
    await this.props.setCookies(cookies);
  }

  componentWillReceiveProps(nextProps) {
    // const { cookies } = nextProps;
    // fetchPermission((cookies && cookies.epasso) ? cookies.epasso : null);
  }
  render() {
    const { loading } = this.state
    return (
      <div>
        <Routes loading={loading} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cookies: state.cookies 
})

const mapDispatchToProps = dispatch => ({
  setCookies: cookies => dispatch(setCookies(cookies))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
