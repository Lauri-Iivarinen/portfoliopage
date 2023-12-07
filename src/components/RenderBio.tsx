import React from "react"
import image from '../util/img/me1.jpg'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Paper, Typography } from "@mui/material"

export const RenderBio = () => {

    return(
        <Grid container={true} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid xs={5}>
            <Box sx={{float:'right', mr: 5}}>
                <img width='300px' alt='Lauri Iivarinen' src={image} />
            </Box>
        </Grid>
        <Grid xs={7}>
            <Box>
                <Typography variant='h3'> Hello</Typography>
                <Typography variant='h5'>
                    My name is Lauri and I'm an enthusiastic, up-and-coming software developer looking for an internship.
                </Typography>
            </Box>
        </Grid>
        </Grid>
    )
}