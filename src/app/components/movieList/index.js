import React from 'react'
import MovieCard from '../movieCard';
import { Grid, makeStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(styles, { classNamePrefix: 'MovieList' });

function MovieList({ movieData, goTo,navigate }) {
    const classes =  useStyles();
    
    const movieColumns = movieData ? movieData.map((movie,index) => {
        return (
            <Grid key={`${movie.id}${index}`} item xs={12} md={3} sm={6} lg={2} className={classes.item} >
                <MovieCard movieData={movie} goTo={goTo} navigate={navigate}/>
            </Grid>
        )
    }) : null;
    
    //TODO:: Add Skeleton instead of null

    return (
        <Grid container spacing={1}>
            {movieColumns}
        </Grid>
    )
}

MovieList.propTypes = {
    movieData: PropTypes.array.isRequired,
    goTo: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired
}

export default MovieList;
