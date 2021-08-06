import React, { useEffect, useState, useContext } from 'react';
import { navigate } from '@reach/router';
import { makeStyles } from '@material-ui/core';
import styles from './styles';
import { Context } from '../../config/context';
import { HttpService, getListingUrl } from '../../config/services';
import * as types from '../../config/reducers/actionTypes';
import { removeDuplicates } from '../../config/utils';
import ReactPullToRefresh from 'react-pull-to-refresh';
import Loading from '../../components/loading';
import MovieList from '../../components/movieList';

const useStyles = makeStyles(styles, { classNamePrefix: 'HomePage' });


function Home() {
    const classes = useStyles();

    const [state, dispatch] = useContext(Context);
    const [isBottom, setIsBottom] = useState(false);
    const [isLoading,setLoading] = useState(false);
    const { page, movies, error, sort_query } = state;
    const goTo = "/detail";

    function handleRefresh(){
        doReset();
        fetchData();
    };

    function handleScroll() {
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;
        const scrollHeight = (document.documentElement
            && document.documentElement.scrollHeight)
            || document.body.scrollHeight;
        if (scrollTop + window.innerHeight + 20 >= scrollHeight) {
            setIsBottom(true);
        };
    };

    const onSuccess = (res) => {
        setLoading(false);
        dispatch({ type: types.SET_HOMEDATE_SUCCESS, movies: res.results })
    };

    const onError = (err) => {
        setLoading(false);
        dispatch({ type: types.ERROR_HOMEDATA, error: { errorCode: err.status, errorMsg: err.msg } })
    };

    const doReset = () => {
        dispatch({ type: types.RESET_HOME })
    };

    const fetchData = () => {
        setLoading(true);
        var apiUrl = getListingUrl(sort_query, page);
        HttpService.open(apiUrl).then((res) => onSuccess(res)).catch((err) => onError(err));
    };

    //Component Did Mount
    //Component Did update when sort query changes

    useEffect(() => {
        fetchData();
        return (() => {
            doReset();
        })
    }, [sort_query])

    //Component Did update When bottom of the page
    useEffect(() => {
        if (isBottom) {
            fetchData();
        }
        setIsBottom(false);
        window.addEventListener('scroll', handleScroll);
        return () => {

            window.removeEventListener('scroll', handleScroll);
        }
    }, [isBottom])

    return (
        <div className={classes.root}>
            <ReactPullToRefresh
                onRefresh={handleRefresh}
                loading={<Loading show={isLoading}/>}
                style={{ textAlign: 'center' }}>
                <div>
                    <MovieList movieData={removeDuplicates(movies)} goTo={goTo} navigate={navigate} />
                </div>
            </ReactPullToRefresh>
        </div>

    )
}

export default Home;
