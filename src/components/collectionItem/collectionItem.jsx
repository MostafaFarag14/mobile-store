import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
    img: {
        width: 180,
        height: 'auto'
    },
    collectionItem: {
        border: '1px solid rgba(0,0,0,0.125)',
        borderRadius: '2px',
        padding: 16
    }
}))

export default function CollectionItem({phone}) {
    const classes = useStyles();
    return (
        <Grid key={phone.id} item xs={12} md={6} lg={4}>
            <div className={classes.collectionItem}>
                <Grid item style={{ textAlign: 'center' }}>
                    <img className={classes.img} src={phone.images[0]} />
                </Grid>
                <Grid item style={{ textAlign: 'center' }}>
                    <Typography variant='body1'>
                        {phone.title}
                </Typography>
                </Grid>
            </div>
        </Grid>
    )
}