import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { getSeries } from '../api/getSeries';
import { getWorkouts } from '../api/getWorkouts';

import Tile from './Tile';

const useStyles = makeStyles(()=>({
    contentWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50
    },
    thumbImage: {
        maxWidth: '100%'
    }
}))

const TileWrapper = () => {
    const classes = useStyles();
    
    const [ selected, setSelected ] = useState(null);

    const workouts = getWorkouts();
    const series = getSeries();

    const combined = [workouts, series]
        .reduce((r, a) => (a.forEach((a, i) => (r[i] = r[i] || []).push(a)), r), [])
        .reduce((a, b) => a.concat(b));


    return (
        <section className={classes.contentWrap}>
            <Grid container spacing={3}>
                {combined.map((data)=>(
                    <Tile 
                        data={data} 
                        key={data.workoutId || data.seriesId} 
                        selected={selected} 
                        setSelected={setSelected} 
                    />
                ))}
            </Grid>
        </section>
    )
}

export default TileWrapper;