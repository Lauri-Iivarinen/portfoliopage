import { Box, Typography, Paper, Tabs, Tab, Link, Card, CardActions, CardContent, CardMedia, TextField, Select, MenuItem, Switch } from "@mui/material";
import React, {useState, useEffect} from "react";
import { Header } from "./Header";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import projectData from '../util/projectData.json'
import { Project } from "../util/types/Project";
import Grid from '@mui/material/Unstable_Grid2';


export const Projects = () => {

    const [value, setValue] = useState(0);
    const [data, setData] = useState<Project[]>([])
    const [stableData, setStableData] = useState<Project[]>([])
    const [keyword, setKeyword] = useState('')
    const [filter, setFilter] = useState('Name')
    const [typeFilter, setTypeFilter] = useState('all')


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        setStableData(projectData)
        setData(projectData)
    }, [])

    useEffect(() => filterData(''), [filter])


    const handleFilterChange = (event: any) => {
        setFilter(event.target.value);
    };

    const handleTypeFilterChange = (event: any) => {
        setTypeFilter(event.target.value);
        filterData(keyword, event.target.value)
    };

    const filterData = (key: string, type=typeFilter) => {
        setKeyword(key)
        let filteredData: Project[] = []
        switch (filter) {
            case 'Name':
                filteredData = stableData.filter(item => item.project.toLowerCase().includes(key.toLowerCase()))
                break;
            case 'Description':
                filteredData = stableData.filter(item => item.description.toLowerCase().includes(key.toLowerCase()))
                break
            case 'Technology':
                const list = stableData.filter(item => {
                    if (item.technologies.find(technology => technology.toLowerCase().includes(key.toLowerCase()))) return true
                })
                filteredData = list
                break
        }
        switch (type) {
            case 'school':
                filteredData = filteredData.filter(item => item.school === true)
                break
            case 'personal':
                filteredData = filteredData.filter(item => item.school === false)
                break
            default:
                break
        }

        setData(filteredData)
    }


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
                        {project.technologies.map((item, index) => <Typography key={index} sx={{marginLeft: 2}}> - {item}</Typography>)}
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
                
                <TextField value={keyword} onChange={(e) => filterData(e.target.value)} label='Search'></TextField>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="Search"
                    onChange={handleFilterChange}
                >
                    <MenuItem value='Name'>Name</MenuItem>
                    <MenuItem value='Description'>Description</MenuItem>
                    <MenuItem value='Technology'>Technology</MenuItem>
                </Select>

                <Select
                    sx={{marginLeft: 5}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeFilter}
                    label="Project type"
                    onChange={handleTypeFilterChange}
                >
                    <MenuItem value='all'>All</MenuItem>
                    <MenuItem value='personal'>Personal</MenuItem>
                    <MenuItem value='school'>School</MenuItem>
                </Select>

                {/*<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {data.map(project => <Tab label={project.project}></Tab>)}
                </Tabs>
                {data.map((project, index) => renderProject(project, index))}
                */}
                <Grid container spacing={2} columnSpacing={2}>
                {data.map((project, index) =>
                    <Card key={index} sx={{margin: 1, width: 500, height: 600}}>
                        <CardContent>
                            <Typography variant='h5'>{project.project}</Typography>
                            <Typography>School project: {project.school ? <CheckBoxIcon sx={{ color: 'green' }} /> : <IndeterminateCheckBoxIcon sx={{ color: 'red' }} />}</Typography>
                            <Typography>Group project: {project.group ? <CheckBoxIcon sx={{ color: 'green' }} /> : <IndeterminateCheckBoxIcon sx={{ color: 'red' }} />}</Typography>
                            <Typography sx={{ marginTop: 3 }}>{project.description}</Typography>
                            <Box sx={{marginTop: 3, marginBottom: 3}}>
                                <Typography>Technologies used:</Typography>
                                {project.technologies.map(item => <Typography sx={{marginLeft: 2}}> - {item}</Typography>)}
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Link href={project.link}>GitHub</Link>
                        </CardActions>
                    </Card>
                )}
                </Grid>
            </Paper>
        </Box>
    )
}