import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Button, Dialog, CircularProgress } from "@mui/material";
import { Header } from "./Header";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ChurchIcon from '@mui/icons-material/Church';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import workData from '../util/workData.json'
import { Work } from "../util/types/Work";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { RenderImage } from "./RenderImage";

export const WorkExperience = () => {
    const [data, setData] = useState<Work[]>()
    const [toggleModal, setToggleModal] = useState<boolean>(false)
    const [activeWork, setActiveWork] = useState<Work>()
    const [work, setWork] = useState<Work[]>([])
    const [loading, setLoading] = useState(true)
    const backend = process.env.REACT_APP_BACKEND_URL

    const fetchWorkData = async () => {
        try {
            const response = await fetch(`http://${backend}/api/career`)
            const result = await response.json()
            setWork(result)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { fetchWorkData() }, [])

    const handleOpen = (work: Work) => {
        setActiveWork(work)
        setToggleModal(true)
    }

    const handleClose = () => {
        setToggleModal(false)
    }

    const iconPicker = (name: string) => {
        switch (name) {
            case 'SportsGymnasticsIcon':
                return <SportsGymnasticsIcon />
            case 'MilitaryTechIcon':
                return <MilitaryTechIcon />
            case 'ChurchIcon':
                return <ChurchIcon />
            case 'MenuBookIcon':
                return <MenuBookIcon />
            default:
                return <SportsGymnasticsIcon />
        }
    }
    
    const timelineElement = (work: Work, index: number) =>
        <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#16BAC5', color: '#fff', borderWidth: 1, borderStyle:'solid' }}
            contentArrowStyle={{ borderRight: '7px solid  #16BAC5' }}
            date={work.date}
            iconStyle={{ background: '#16BAC5', color: 'black' }}
            icon={iconPicker(work.icon)}
        >
            <Typography variant='h4' className="vertical-timeline-element-title">{work.workTitle}</Typography>
            <Typography variant='h5' className="vertical-timeline-element-title">{work.location}</Typography>
            <Typography>{work.smallDescription}</Typography>
            <Button variant='outlined' color='inherit' sx={{marginTop: 2}} onClick={() => handleOpen(work)}>More details</Button>
        </VerticalTimelineElement>

    return (
        <Box>
            <Typography sx={{textAlign: 'center'}} variant='h3'>Career</Typography>

                {!loading ? <VerticalTimeline
                    lineColor='#16BAC5'
                >{work.map((row, index) => {
                    return timelineElement(row, index)
                })}</VerticalTimeline>: <Box  sx={{ display:'flex', justifyContent: 'center', alignItems: 'center'}}><CircularProgress></CircularProgress></Box>}

                <Dialog open={toggleModal} onClose={handleClose}>
                    <Box sx={{padding: 5, borderWidth: 2, borderColor: 'black', borderStyle: 'solid'}}>
                        <Typography variant='h6' sx={{marginBottom: 2}}>{ activeWork?.workTitle }</Typography>
                        <Typography>
                            {activeWork?.description}
                        </Typography>
                        <Grid container={true} spacing={1} sx={{mt: 3}}>
                            {activeWork?.img.map((i, index) => 
                                <Grid key={index} xs={6}>
                                    <RenderImage imgName={i}></RenderImage>
                                </Grid>)}
                        </Grid>
                    </Box>
                </Dialog>
        </Box>
    )
}