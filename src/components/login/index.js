import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Login extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if (!loginStatus) {
			return(<div>没登录{this.props.loginStatus}</div>
			)
		}else {
			return <div>登陆了</div>
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
});

//const mapDispatch = (dispatch) => ({
//	login(accountElem, passwordElem){
//		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
//	}
//})

export default connect(mapState, null)(Login);