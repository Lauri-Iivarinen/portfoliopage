import { Box, Paper, Typography } from "@mui/material"
import React from "react"
import { Header } from "./Header"
import { UserData } from "./UserData"
import image from '../util/img/me1.jpg'
import Grid from '@mui/material/Unstable_Grid2';
import { GitHubStats } from "./GitHubStats"

export const Homepage = () => {
    
    return (
        <Paper sx={{paddingBottom: 10}}>
            <Header></Header>
            <Box sx={{ margin: 6, marginTop: 4, padding: 6}}>
                <Grid container={true} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={3}>
                        <Box>
                            <img width='300px' alt='Lauri Iivarinen' src={image} />
                        </Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box>
                            <Typography variant='h3'> Hello</Typography>
                            <Typography variant='h5'>
                                My name is Lauri and I'm an enthusiastic, up-and-coming software developer looking for an internship.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={3}><UserData /></Grid>
                </Grid>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                    <GitHubStats></GitHubStats>
                </Box>
            </Box>
        </Paper>
    )
}