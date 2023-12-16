import React, {useState, useEffect} from "react"
import image from '../util/img/me2.jpg'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography, CircularProgress, useMediaQuery } from "@mui/material"
import { GetIcon } from "./GetIcon";
import { Carousel } from "react-configurable-carousel";

export const RenderBio = () => {

    const mobile = useMediaQuery('(max-width:900px)')

    const [icons, setIcons] = useState([])
    const [loading, setLoading] = useState(true)
    const backend = 'https://iivarinen-lauri-back-0774fd593a23.herokuapp.com'
    const [skills, setSkills] = useState([])
    const [loadingSkills, setLoadingSkills] = useState(true)

    

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await fetch(`${backend}/api/skills`)
                const result = await res.json()
                setSkills(result)
                setLoadingSkills(false)
            } catch (error) {
                console.log(error)
            }
        }
        const fetchStackPref = async () => {
            try {
                const res = await fetch(`${backend}/api/stack`)
                const result = await res.json()
                setIcons(result)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
            
        }
        fetchSkills()
        fetchStackPref()
    }, [])

    const test = ['a', 'b', 'c', 'd']

    return(
        <Grid sx={{marginBottom: 5}} container={true} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid xs={5}>
            <Box sx={{float: mobile? '' : 'right', mr: 5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img width={mobile? '350px' : '500px'} alt='Lauri Iivarinen' src={image} />
            </Box>
        </Grid>
        <Grid xs={7}>
            <Box>
                <Typography variant='h3'> Hello</Typography>
                <Typography variant='h5'>
                    My name is Lauri and I'm an enthusiastic, up-and-coming full-stack developer looking for an internship.
                    </Typography>
                    <Typography variant='h5' sx={{ marginTop: 2 }}>Skills:</Typography>
                    {loadingSkills ? <CircularProgress></CircularProgress>: <Box><Carousel
                    arrows={false}
                    dotsNavigation={false}
                    width={'500px'}
                    height={"115px"}
                    autoScrollInterval={1800}
                    autoScrollClickDelay={2000}
                    carouselStyle={'3d'}
                    outOfFocusDarken={false}
                >
                        {skills.map((item: string, key) => <Box><Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><GetIcon size={30} iconName={item}></GetIcon></Box>{item.split(' ').map(a => <Typography sx={{ textAlign: 'center' }}>{a}</Typography>) }</Box>)}
                </Carousel></Box>}
                
                <Typography variant='h5' sx={{ mt: 3 }}>Favorite technologies:</Typography>
                {!loading ? <Grid container={true} spacing={2} sx={{display: 'flex'}}>
                    {icons.map((item, key) => <Grid key={key}><GetIcon iconName={item}></GetIcon></Grid>)}
                </Grid> : <CircularProgress></CircularProgress>}
            </Box>
        </Grid>
        </Grid>
    )
}