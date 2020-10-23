import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
    img: {
        margin: 'auto',
        width: 300,
        height: 300
    }
}))

export default function CollectionItem() {
    const classes = useStyles();
    return (
        < Grid item xs container direction='column' spacing={2} >
            <Grid item>
                <img className={classes.img} src='https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg?v1' />
            </Grid>
            <Grid item>
                <Typography variant='body1'>
                    Apple iPhone 7 Plus 32 GB (Apple Türkiye Garantili)
                </Typography>
            </Grid>
        </Grid>
    )
}