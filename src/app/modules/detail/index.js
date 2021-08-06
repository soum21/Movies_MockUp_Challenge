import React, { useEffect, useReducer, useState } from 'react';
import { Container, Typography, Button, makeStyles } from '@material-ui/core';
import detailReducer from '../../config/reducers/detailReducer';
import localStates from '../../config/reducers/localStates';
import * as types from '../../config/reducers/actionTypes';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { spR } from '../../config/utils';
import images from '../../assests';
import { HttpService, getDetailUrl, getImagePath } from '../../config/services';
import Loading from '../../components/loading';
import ErrorMsg from '../../components/errorMsg';
import PropTypes from 'prop-types';
import styles from './styles';

const useStyles = makeStyles(styles, { classNamePrefix: 'DetailPage' });

function DetailPage({ location: { state: { id } } }) {
    const classes = useStyles();
    const [isloading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const imageSize = 'original';
    const [detailState, dispatch] = useReducer(detailReducer, localStates);
    const { title, runtime, spoken_languages, overview, genres, backdrop_path, error } = detailState;



    function gotoCathay(title) {
        const replacer = '-';
        //The spR function or spacesAndCharecterReplacer to get "word-word" format for cathay link  
        const searchProp = spR(title, replacer);
        const url = `https://www.cathaycineplexes.com.sg/movies/${searchProp}/`
        window.open(url, '_blank');
    };

    function onSuccess(res) {
        setLoading(false);
        dispatch({ type: types.SET_DETAIL_DATA, detail: res })
    }

    function onError(err) {
        setError(true)
        dispatch({ type: types.ERROR_DETAIL_DATA, error: { errorCode: err.status, errorMsg: err.msg } });
    }

    function fetchDetail() {
        setLoading(true);
        let apiUrl = getDetailUrl(id);
        HttpService.open(apiUrl).then((res) => onSuccess(res)).catch((err) => onError(err))
    };

    function doReset() {
        dispatch({ type: types.RESET_DETAIL });
    };

    useEffect(() => {
        fetchDetail();
        return () => {
            doReset();
        }
    }, [])


    return (
        <Container maxWidth="lg">
            <ErrorMsg errCode={error.errorCode} errMsg={error.errorMsg} />
            {detailState ?
                <div className={classes.root}>
                    {/*<==BackGround Image ===>*/}
                    <div className={classes.bgImageContainer}>
                        {backdrop_path ?
                            <div
                                className={classes.bgImage}
                                style={{ backgroundImage: `url(${getImagePath(imageSize, backdrop_path)})` }}
                            /> :
                            <div
                                className={classes.bgImage}
                                style={{ backgroundImage: `url(${images.no_poster_path.default})` }}
                            />
                        }
                    </div>

                    {/*<==Info Area Start===>*/}
                    <div className={classes.info}>
                        <Typography variant={"h4"} component={"h2"} className={classes.detail}>Movie Details </Typography>

                        <div>
                            <Typography variant={"h2"} component={"h1"} className={classes.title}>{title}</Typography>
                            {runtime ? <div> <Typography variant={"overline"} component={"small"}>Duration: {runtime}</Typography>'minutes</div> : null}
                            <div className={classes.tagContainer}>
                                {spoken_languages && spoken_languages.map(language =>
                                    <Typography variant={"caption"} key={language.iso_639_1} className={classes.tagData}>{language.english_name}</Typography>
                                )}
                            </div>
                        </div>

                        {overview ?
                            <div>
                                <Typography variant={"h5"} component={"h4"} className={classes.synopsis}>Synopsis</Typography>
                                <Typography variant={"subtitle2"} component={"small"} className={classes.subtitle}>{overview}</Typography>
                            </div> : null
                        }

                        <div className={classes.tagContainer}>
                            {genres && genres.map(genre =>
                                <Typography variant={"caption"} key={genre.id} className={classes.tagData}>{genre.name}</Typography>
                            )}
                        </div>

                        <div className={classes.linkButton}>
                            <Button variant="contained" color="secondary" startIcon={<MenuBookIcon />} disabled={isError} onClick={() => { gotoCathay(title) }}>
                                {"Book Now"}
                            </Button>
                        </div>
                        {/*<==Info Area End===>*/}
                    </div>
                </div>
                :
                <Loading show={isloading} />
            }
        </Container>
    )
}

DetailPage.propTypes = {
    location: PropTypes.object.isRequired
}

export default DetailPage;
