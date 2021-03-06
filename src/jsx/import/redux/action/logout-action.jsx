/**
 * logout-action.jsx: send logout status from the application to the store.
 *
 * Note: this script implements jsx (reactjs) syntax.
 *
 */

function setLogoutState() {
    return {
        type: 'LOGGED-OUT'
    };
}

// indicate which class can be exported, and instantiated via 'require'
export default setLogoutState
