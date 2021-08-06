import React, { useContext } from 'react';
import {navigate} from '@reach/router';
import { AppBar, makeStyles, Grid, Toolbar, Typography } from '@material-ui/core';
import DropDownSelect from '../dropDown';
import DropdownData from '../../config/common';
import { Context } from '../../config/context';
import * as types from '../../config/reducers/actionTypes';
import PropTypes from 'prop-types';

import styles from './styles';
const useStyles = makeStyles(styles, { classNamePrefix: 'Header' });
const { sortArea } = DropdownData;

function Header({ title }) {
    const [state,dispatch] = useContext(Context);
    const classes = useStyles();
    
    const handleChange = (event) => {
        dispatch({type: types.RESET_HOME});
        dispatch({type: types.SET_HOMEDATE_SUCCESS, sort_query:event.target.value, movies:[]})
    }
    const handleClick = () =>{
        navigate('/home')
    }
    return (
        <AppBar position="sticky" elevation={0} className={classes.wrapper}>

            <Toolbar>

                <Grid container
                    className={classes.grid}>

                    <Grid item >
                        <Typography variant="h4" className={classes.title} edge="start" onClick={handleClick}>
                            <div className={classes.line}>{title}</div>
                        </Typography>
                    </Grid>

                    <Grid item>
                        <DropDownSelect handleChange={handleChange} items={sortArea} />
                    </Grid>
                </Grid>

            </Toolbar>

        </AppBar>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;
