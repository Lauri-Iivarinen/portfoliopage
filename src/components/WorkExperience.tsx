import React, { useState } from "react";
import { Box, Paper, Typography, Button, Dialog } from "@mui/material";
import { Header } from "./Header";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ChurchIcon from '@mui/icons-material/Church';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import workData from '../util/workData.json'
import { Work } from "../util/types/Work";
import { useEffect } from "react";

export const WorkExperience = () => {
    const [data, setData] = useState<Work[]>()
    const [toggleModal, setToggleModal] = useState<boolean>(false)
    const [activeWork, setActiveWork] = useState<Work>()

    useEffect(() => { setData(workData) }, [])

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
    
    const timelineElement = (work: Work) =>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={work.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
            icon={iconPicker(work.icon)}
        >
            <Typography variant='h4' className="vertical-timeline-element-title">{work.workTitle}</Typography>
            <Typography variant='h5' className="vertical-timeline-element-title">{work.location}</Typography>
            <Typography>{work.smallDescription}</Typography>
            <Button onClick={() => handleOpen(work)}>More details</Button>
        </VerticalTimelineElement>

    return (
        <Box>
            <Header></Header>
            <Paper sx={{padding: 4, backgroundColor: 'rgb(200,200,200)'}}>
                <VerticalTimeline>
                    {data?.map(row => {
                        return timelineElement(row)
                    })}
                </VerticalTimeline>
                <Dialog open={toggleModal} onClose={handleClose}>
                    <Box sx={{padding: 5, borderWidth: 2, borderColor: 'black', borderStyle: 'solid'}}>
                        <Typography variant='h6' sx={{marginBottom: 2}}>{ activeWork?.workTitle }</Typography>
                        <Typography>
                            {activeWork?.description}
                        </Typography>
                    </Box>
                </Dialog>
            </Paper>
        </Box>
    )
}