import { Box, Paper, Typography } from "@mui/material"
import React from "react"
import { Header } from "./Header"
import { UserData } from "./UserData"
import image from '../util/img/me1.png'
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
                            <Typography variant='h3'> Who am I?</Typography>
                            <Typography>
                                An enthusiastic student at the end of my studies, 
                                excited to venture deeper into the world of IT. 
                                With several years of experience in working with people of different ages and backgrounds
                                I have amassed a wealth of experience across software frameworks,
                                technologies, languages, and leadership. With multiple difficult and demanding tasks assigned
                                to me in years I have proven my capability to make fast and efficient
                                decisions and work in different environments.
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