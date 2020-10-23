import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CollectionItem from '../collectionItem/collectionItem';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 'auto'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Collection() {
    const classes = useStyles();

    return (
        
            <Grid className={classes.root} container justify='center' spacing={3}>
                <CollectionItem />
                <Grid item >
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item >
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>
    );
}
