import { Box, Typography, Paper, Tabs, Tab, Link } from "@mui/material";
import React, {useState, useEffect} from "react";
import { Header } from "./Header";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import projectData from '../util/projectData.json'
import { Project } from "../util/types/Project";


export const Projects = () => {

    const [value, setValue] = useState(0);
    const [data, setData] = useState<Project[]>([])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => setData(projectData), [])

    const renderProject = (project: Project, index: number) =>
        <Box sx={{ margin: 5 }}>
            {value === index &&
                <Box>
                    <Typography variant='h3'>{project.project}</Typography>
                    <Typography>School project: {project.school ? <CheckBoxIcon sx={{ color: 'green' }} /> : <IndeterminateCheckBoxIcon sx={{ color: 'red' }} />}</Typography>
                    <Typography>Group project: {project.group ? <CheckBoxIcon sx={{ color: 'green' }} /> : <IndeterminateCheckBoxIcon sx={{ color: 'red' }} />}</Typography>
                    <Typography sx={{ marginTop: 3 }}>{project.description}</Typography>
                    <Box sx={{marginTop: 3, marginBottom: 3}}>
                        <Typography>Technologies used:</Typography>
                        {project.technologies.map(item => <Typography sx={{marginLeft: 2}}> - {item}</Typography>)}
                    </Box>
                    <Link href={project.link}>GitHub</Link>
                </Box>
            }
        </Box>
    
    return (
        <Box>
            <Header></Header>
            <Paper sx={{margin: 2, padding: 2}}>
                <Typography sx={{marginLeft: 5, margin: 2}}>These are projects I've been working on in and outside of tasks given by Haaga-Helia</Typography>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {data.map(project => <Tab label={project.project}></Tab>)}
                </Tabs>
                    {data.map((project, index) => renderProject(project, index))}
            </Paper>
        </Box>
    )
}