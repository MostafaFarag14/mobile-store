import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from '@material-ui/core'
import CollectionItem from '../collectionItem/collectionItem';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    img: {
        height: 140,
        width: 100,
    },
    collectionItem: {
        border: '1px solid rgba(0,0,0,0.125)',
        borderRadius: '2px',
        padding: 16
    }
}));

export default function Collection() {
    const classes = useStyles();

    return (

        <Grid className={classes.root} container justify='center' spacing={4}>
            {[0, 1, 2,3,4,5].map((value) => (
                <Grid key={value} item >
                    <div className={classes.collectionItem}>
                        <Grid item style={{textAlign: 'center'}}>
                            <img className={classes.img} src='https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg?v1' />
                        </Grid>
                        <Grid item>
                            <Typography variant='body1'>
                                Apple iPhone 7 Plus 32 GB (Apple Türkiye Garantili)
                </Typography>
                        </Grid>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}
