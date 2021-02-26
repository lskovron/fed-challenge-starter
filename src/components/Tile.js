import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import timeIcon from '../assets/icn_timer_line.svg';
import distanceIcon from '../assets/icn_distance_line.svg';
import playlistIcon from '../assets/icn_playlist.svg';

const useStyles = makeStyles(()=>({
    contentWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 24
    },
    thumbImage: {
        maxWidth: '100%',
        width: '100%'
    },
    tile: {
        boxShadow: '0 1px 1px rgba(0,0,0,0.5)',
        borderRadius: 5
    },
    selected: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
    },
    tileBottom: {
        minHeight: 130,
        position: 'relative'
    },
    detailWrap: {
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        '& > img': {
            width: 35,
            height: 35,
            borderRadius: 5,
            marginLeft: 10
        }
    },
    details: {
        '& h3': {
            margin: 0,
        },
    },
    metric: {
        display: 'inline-block',
        '& span': {
            fontSize: 12,
            marginRight: 10
        },
        '& img': {
            height: 12,
            paddingRight: 5,
            marginBottom: -1
        }
    },
    button: {
        color: '#0069D2',
        appearance: 'none',
        '-webkit-appearance': 'none',
        background: 'none',
        border: 'none',
        fontSize: 14,
        fontWeight: 'bold',
        position: 'absolute',
        left: 20,
        bottom: 20
    },
    workoutCount: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 5,
        left: '63%',
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        '& span': {
            marginBottom: 12,
            fontSize: 12
        },
        '& span:first-child': {
            fontSize: 23,
            lineHeight: '23px'
        },
        '& img': {}
    },
}))

const Metric = ({icon,metric}) => {
    const classes = useStyles();

    return (
        <div className={classes.metric}>
            <img src={icon} alt="" />
            <span>{metric}</span>
        </div>
    )
}


const Tile = ({data, selected, setSelected}) => {
    const classes = useStyles();

    const { image, trainer, title, time, distance, alt, workoutId, seriesId, workouts } = data;
    const hours = time ? Math.floor(time) : null;
    const minutes = time ? Math.ceil( (time - Math.floor(time))*60 ) : null;
    const formattedTime = time ? `${hours}:${minutes}` : null;
    const formattedDistance = distance ? distance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")+' M' : null;

    const isActiveTile = workoutId === selected || seriesId === selected;

    return (
        <Grid item xs={12} sm={6} md={6} lg={3}>
            <div
                onClick={()=>setSelected(workoutId || seriesId)}
                className={`${classes.tile} ${isActiveTile ? classes.selected : ''}`}
                
            >
                
                <div style={{position: 'relative'}}>
                    <img src={image} className={classes.thumbImage} alt={alt} />
                    {seriesId && workouts.length && (
                        <div className={classes.workoutCount}>
                            <span>{workouts.length}</span>
                            <span>WORKOUTS</span>
                            <img src={playlistIcon} alt="" />
                        </div>
                    )}
                </div>
                <div className={classes.tileBottom}>
                    <div className={classes.detailWrap}>
                        <div className={classes.details}>
                            <h3>{title}</h3>
                            {time && <Metric icon={timeIcon} metric={formattedTime} />}
                            {distance && <Metric icon={distanceIcon} metric={formattedDistance} />}
                        </div>
                        <img src={trainer} alt="trainer" />
                    </div>
                    {isActiveTile && <button className={classes.button}>VIEW DETAILS</button>}
                </div>
            </div>
        </Grid>
    )
}

export default Tile;