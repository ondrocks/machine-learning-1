/**
 * register-container.jsx: redux store for login, and logout processes.
 *
 * Note: this script implements jsx (reactjs) syntax.
 *
 * Note: importing 'named export' (multiple export statements in a module),
 *       requires the object being imported, to be surrounded by { brackets }.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../../content/register.jsx';

// transforms redux state tree to react properties
const mapStateToProps = (state) => {
    return {
        username: state
    }
}

// wraps each function of the object to be dispatch callable
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
    }
}

// pass selected properties from redux state tree to component
const RegisterState = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterForm)

// indicate which class can be exported, and instantiated via 'require'
export default RegisterState
