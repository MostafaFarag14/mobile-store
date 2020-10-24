import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography, Container } from '@material-ui/core'
import CollectionItem from '../collectionItem/collectionItem';
import { phones } from '../../assets/phones'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

export default function Collection() {
    const classes = useStyles();

    return (


        <Container maxWidth="lg">
            <Grid className={classes.root} container justify='center' spacing={4}>
                {phones.map((phone) => (
                    <CollectionItem phone={phone}/>
                ))}
            </Grid>
        </Container>
    );
}
