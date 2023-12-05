import { Box, Typography, Paper, Link, Card, CardActions, CardContent,CardMedia, TextField, Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import React, {useState, useEffect} from "react";
import { Header } from "./Header";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import projectData from '../util/projectData.json'
import { Project } from "../util/types/Project";
import Grid from '@mui/material/Unstable_Grid2';
import { GitHubStats } from "./GitHubStats";
import { RenderProjectMedia } from "./RenderProjectMedia";


export const Projects = () => {

    const [data, setData] = useState<Project[]>([])
    const [stableData, setStableData] = useState<Project[]>([])
    const [keyword, setKeyword] = useState('')
    const [filter, setFilter] = useState('Name')
    const [typeFilter, setTypeFilter] = useState('all')
    const [groupFilter, setGroupFilter] = useState('all')

    useEffect(() => {
        setStableData(projectData)
        setData(projectData)
    }, [])

    const handleFilterChange = (event: any) => {
        setFilter(event.target.value);
    };

    const handleTypeFilterChange = (event: any) => {
        setTypeFilter(event.target.value);
        filterData(keyword, event.target.value)
    };

    const handleGroupFilterChange = (event: any) => {
        setGroupFilter(event.target.value);
        filterData(keyword, typeFilter, event.target.value)
    };

    const resetFilter = () => {
        setFilter('Name')
        setKeyword('')
        setTypeFilter('all')
        setGroupFilter('all')
        filterData('', 'all', 'all', 'Name')
    }

    const filterData = (key: string, type=typeFilter, group=groupFilter, textFilter=filter) => {
        setKeyword(key)
        let filteredData: Project[] = []
        switch (textFilter) {
            case 'Name':
                filteredData = stableData.filter(item => item.project.toLowerCase().includes(key.toLowerCase()))
                break;
            case 'Description':
                filteredData = stableData.filter(item => item.description.toLowerCase().includes(key.toLowerCase()))
                break
            case 'Technology':
                const list = stableData.filter(item => {
                    if (item.technologies.find(technology => technology.toLowerCase().includes(key.toLowerCase()))) return true
                    return false
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

        switch (group) {
            case 'group':
                filteredData = filteredData.filter(item => item.group === true)
                break
            case 'solo':
                filteredData = filteredData.filter(item => item.group === false)
                break
            default:
                break
        }

        setData(filteredData)
    }


    useEffect(() => { filterData('') }, [filter, stableData])

    return (
        <Paper>
            <Header></Header>
            <Paper sx={{margin: 2, padding: 2}}>
                <Typography sx={{marginLeft: 5, margin: 2}}>These are projects I've been working on in and outside of tasks given by Haaga-Helia</Typography>
                <TextField value={keyword} name='SearchField' onChange={(e) => filterData(e.target.value)} label='Search'></TextField>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Search by</InputLabel>
                    <Select
                        value={filter}
                        label="Search"
                        onChange={handleFilterChange}
                        name="SearchBy"
                    >
                        <MenuItem value='Name'>Name</MenuItem>
                        <MenuItem value='Description'>Description</MenuItem>
                        <MenuItem value='Technology'>Technology</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginLeft: 5 }}>
                <InputLabel>Project type</InputLabel>
                <Select
                    value={typeFilter}
                    label="Project type"
                    onChange={handleTypeFilterChange}
                    name="FilterByType"
                >
                    <MenuItem value='all'>All</MenuItem>
                    <MenuItem value='personal'>Personal</MenuItem>
                    <MenuItem value='school'>School</MenuItem>
                </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>Group type</InputLabel>
                <Select
                    value={groupFilter}
                    label="Group"
                    onChange={handleGroupFilterChange}
                    name="FilterByGroup"
                >
                    <MenuItem value='all'>All</MenuItem>
                    <MenuItem value='group'>Group</MenuItem>
                    <MenuItem value='solo'>Solo</MenuItem>
                </Select>
                </FormControl>
                <FormControl sx={{justifyContent: 'center', alignItems: 'center', m: 3}}>
                    <Button onClick={resetFilter}>Reset filters</Button>
                </FormControl>
                <Grid container spacing={2} columnSpacing={2}>
                {data.map((project, index) =>
                    <Card elevation={3} key={index} sx={{ margin: 1, width: 500, height: 700, borderWidth: 1, borderColor: 'rgb(100,100,100)', borderStyle: 'solid' }}>
                        <RenderProjectMedia img={project.img}></RenderProjectMedia>
                        <CardContent>
                            <Typography variant='h5'>{project.project}</Typography>
                            <Typography sx={{alignItems: 'center', display: 'flex'}}>School project: {project.school ? <CheckBoxIcon sx={{ color: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center' }} /> : <IndeterminateCheckBoxIcon sx={{ color: 'red' }} />}</Typography>
                            <Typography sx={{alignItems: 'center', display: 'flex'}}>Group project: {project.group ? <CheckBoxIcon sx={{ color: 'green' }} /> : <IndeterminateCheckBoxIcon sx={{ color: 'red' }} />}</Typography>
                            <CardActions sx={{justifyContent: 'center', alignItems: 'end'}}>
                                <Link href={project.link}>GitHub</Link>
                            </CardActions>
                            <Typography sx={{ marginTop: 1 }}>{project.description}</Typography>
                            <Box sx={{marginTop: 1, marginBottom: 3}}>
                                <Typography>Technologies used:</Typography>
                                {project.technologies.map((item, key) => <Typography key={key} sx={{marginLeft: 2}}> - {item}</Typography>)}
                            </Box>
                        </CardContent>
                        
                        
                    </Card>
                )}
                </Grid>
            </Paper>
        </Paper>
    )
}


/*
    Unused snippet that may come in handy later

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
    
*/