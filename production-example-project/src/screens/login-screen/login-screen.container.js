import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginScreenView from './login-screen.view';
import { setUsernameAction, setPasswordAction, loginAsyncAction } from './login-screen.reducer';

export function mapStateToProps({ loginScreenReducer }) {
    return { ...loginScreenReducer };
}

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setUsernameAction, setPasswordAction, loginAsyncAction }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreenView);
