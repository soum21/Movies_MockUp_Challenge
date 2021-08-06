import React, { useMemo } from 'react'
import {Router} from '@reach/router';
import Loading from '../../../components/loading';
import PropTypes from 'prop-types';

function RouterCreator({ path, dynamicModuleResolver }) {
    return (
        <Router primary={false}>
            <LazyRoute path={path} dynamicModuleResolver={dynamicModuleResolver} />
        </Router>
    );
};

function LazyRoute({ module, dynamicModuleResolver, path, ...props }) {
    // module - Module name, this is supplied from reach router 
    //useMemo chacing modules
    const memorizedModuleResolver = useMemo(() => dynamicModuleResolver(module || ''), [dynamicModuleResolver, module]);
    return (
        <Route component={memorizedModuleResolver} {...props} />
    );
};

function Route({ component, ...props }) {
    //Component are coming as promise and we are resolving them as react component.
    const Component = React.lazy(() => component);
    return (
        <React.Suspense fallback={<Loading />}>
            <Component {...props} />
        </React.Suspense>
    );
};

RouterCreator.propTypes = {
    path: PropTypes.string.isRequired,
    dynamicModuleResolver: PropTypes.func.isRequired
};
export default RouterCreator;
