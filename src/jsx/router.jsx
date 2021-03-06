/**
 * router.jsx: defines react-router tree.
 *
 * Note: this script implements jsx (reactjs) syntax.
 */

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import DataNew from './import/session-type/data-new.jsx';
import DataAppend from './import/session-type/data-append.jsx';
import ModelGenerate from './import/session-type/model-generate.jsx';
import ModelPredict from './import/session-type/model-predict.jsx';
import SupportVector from './import/content/support-vector.jsx';
import LoginState from './import/redux/container/login-container.jsx';
import RegisterState from './import/redux/container/register-container.jsx';

// constant: analysis layout
const AnalysisLayout = (props) => (
    <div className='analysis-container'>
        <SupportVector />
        {this.props.children}
    </div>
);

// constant: login layout
const LoginLayout = (props) => (
    <div className='main-full-span login-form'>
        <LoginState />
    </div>
);

// constant: register layout
const RegisterLayout = (props) => (
    <div className='main-full-span register-form'>
        <RegisterState />
    </div>
);

// application router
var AppRouter = React.createClass({
  // display result
    render: function() {
        {/* return:

            @this.props.indexRoute, defined from parent component.
            @history, is required per 'react-router's ability to handle url:

                - [GitHub-URL]/issues/2727#issuecomment-258030214

        */}

      // render routers
        return(
            <Router history={browserHistory}>
                <Route path='/' component={this.props.indexRoute}>
                    <Route path='/session' component={AnalysisLayout}>
                        <Route
                            path='/session/data-new'
                            component={DataNew}
                        />
                        <Route
                            path='/session/data-append'
                            component={DataAppend}
                        />
                        <Route
                            path='/session/model-generate'
                            component={ModelGenerate}
                        />
                        <Route
                            path='/session/model-predict'
                            component={ModelPredict}
                        />
                    </Route>
                    <Route
                        path='/login'
                        component={LoginLayout}
                    />
                    <Route
                        path='/logout'
                        component={LoginLayout}
                    />
                    <Route
                        path='/register'
                        component={RegisterLayout}
                    />
                </Route>
            </Router>
        );
    }
});

// indicate which class can be exported, and instantiated via 'require'
export default AppRouter
