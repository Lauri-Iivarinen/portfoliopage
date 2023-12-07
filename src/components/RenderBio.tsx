import React from "react"
import image from '../util/img/me2.jpg'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Paper, Typography } from "@mui/material"
import stackPref from '../util/stackPref.json'
import { GetIcon } from "./GetIcon";

export const RenderBio = () => {

    const stack: string[] = stackPref

    return(
        <Grid container={true} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid xs={5}>
            <Box sx={{float:'right', mr: 5}}>
                <img width='500px' alt='Lauri Iivarinen' src={image} />
            </Box>
        </Grid>
        <Grid xs={7}>
            <Box>
                <Typography variant='h3'> Hello</Typography>
                <Typography variant='h5'>
                    My name is Lauri and I'm an enthusiastic, up-and-coming full-stack developer looking for an internship.
                </Typography>
                <Typography variant='h5' sx={{mt: 3}}>Favorite technologies:</Typography>
                <Grid container={true} spacing={2} sx={{display: 'flex'}}>
                    {stack.map((item, key) => <Grid key={key}><GetIcon iconName={item}></GetIcon></Grid>)}
                </Grid>
            </Box>
        </Grid>
        </Grid>
    )
}