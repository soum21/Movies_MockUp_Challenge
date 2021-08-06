import React from 'react';
import {
    makeStyles,
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardContent
} from '@material-ui/core';
import { getImagePath } from '../../config/services';
import images from '../../assests';
import styles from './styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PropTypes from 'prop-types';

const useStyles = makeStyles(styles, { classNamePrefix: 'MovieCard' });

function MovieCard({ movieData: { id, title, poster_path, vote_average }, goTo, navigate }) {
    const classes = useStyles();
    const imageSize = 'w200';
    return (
        <Card
            className={classes.card}
        >
            <CardActionArea className={classes.cardActionarea} onClick={() => navigate(goTo, { state: { id: id } })}>
                {poster_path ?
                    <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        alt=""
                        image={getImagePath(imageSize, poster_path)}
                        title={title}
                    /> :
                    <CardMedia
                        className={classes.cardMediaUnavailable}
                        component="img"
                        alt=""
                        image={images.no_poster_path.default}
                        title={title}
                    />
                }
                <CardContent className={classes.cardContent} title={title}>
                    <Typography variant="h6" display="block" className={classes.title}>{title}</Typography>
                    <Typography variant="subtitle2" display="block"> <ThumbUpIcon className={classes.iconRating} /> Rating: {vote_average}/10 </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
};

MovieCard.propTypes = {
    movieData: PropTypes.object.isRequired,
    goTo: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
};
export default MovieCard;
