import React from 'react'
import { makeStyles } from '@material-ui/core';
import styles from './styles';
import { Router, Redirect } from '@reach/router';
import RouterCreator from './dynamicRoutes'
import ErrorMsg from '../../components/errorMsg';
import Header from '../../components/header';

const useStyles = makeStyles(styles, { classNamePrefix: 'AppRouter' });

function dynamicModuleResolver(modulePath) {
    const modulePromise = import(/* webpackChunkName: "module" */ `../../modules/${modulePath}/index`).then((it) => { return it }).catch((e) => {
        //if use input someroute we dont have then route to home 
        //TO:DO /modules/404page instead of module/home
        return import(/* webpackChunkName: "module" */ `../../modules/home/index`)
    });
    return modulePromise;
}

export default function AppRouter() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Header title="Movies" />
            <ErrorMsg />
            <div className={classes.content}>
                    <Router primary={true}>
                        <Redirect from={'/'} to={'/home'} noThrow />
                        {/* Also we can add background task here in a Route Component but we need to add some functionality inthe the Route component  */}
                    </Router>
                {/* we will create dynamic imports of all module so we dont have to write "import <module> from 'src' */}
                <RouterCreator dynamicModuleResolver={dynamicModuleResolver} path={'/:module/*'} />
            </div>
        </div>
    )
};
