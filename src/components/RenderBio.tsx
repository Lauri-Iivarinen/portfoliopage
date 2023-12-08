import React, {useState, useEffect} from "react"
import image from '../util/img/me2.jpg'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Paper, Typography, CircularProgress } from "@mui/material"
import stackPref from '../util/stackPref.json'
import { GetIcon } from "./GetIcon";

export const RenderBio = () => {

    const stack: string[] = stackPref

    const [icons, setIcons] = useState([])
    const [loading, setLoading] = useState(true)
    const backend = process.env.REACT_APP_BACKEND_URL

    const fetchStackPref = async () => {
        try {
            const res = await fetch(`https://iivarinen-lauri-back-0774fd593a23.herokuapp.com/api/stack`)
            const result = await res.json()
            setIcons(result)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {fetchStackPref()}, [])

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
                    <Typography variant='h5' sx={{ mt: 3 }}>Favorite technologies:</Typography>
                {!loading ? <Grid container={true} spacing={2} sx={{display: 'flex'}}>
                    {icons.map((item, key) => <Grid key={key}><GetIcon iconName={item}></GetIcon></Grid>)}
                </Grid> : <CircularProgress></CircularProgress>}
            </Box>
        </Grid>
        </Grid>
    )
}