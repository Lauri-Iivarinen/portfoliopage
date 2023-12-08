import { Box, Typography, Slide, Paper, Card, CardContent, CircularProgress, TextField, Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import React, {useState, useEffect} from "react";
import { Header } from "./Header";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import projectData from '../util/projectData.json'
import { Project } from "../util/types/Project";
import Grid from '@mui/material/Unstable_Grid2';
import { RenderProjectMedia } from "./RenderProjectMedia";
import { GetIcon } from "./GetIcon";


export const Projects = () => {

    const [data, setData] = useState<Project[]>([])
    const [stableData, setStableData] = useState<Project[]>([])
    const [keyword, setKeyword] = useState('')
    const [filter, setFilter] = useState('Name')
    const [typeFilter, setTypeFilter] = useState('all')
    const [groupFilter, setGroupFilter] = useState('all')
    const [loading, setLoading] = useState(true)
    const backend = process.env.REACT_APP_BACKEND_URL

    const fetchProjects = async () => {
        try {
            const response = await fetch(`http://${backend}/api/projects`)
            const result = await response.json()
            setData(result)
            setStableData(result)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProjects()
        // eslint-disable-next-line
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


    useEffect(() => {
        filterData('')
        // eslint-disable-next-line
    }, [filter, stableData])

    return (
        <Box>
            <Typography variant='h3' sx={{mt: 4, mb: 4,textAlign: 'center'}}>Projects</Typography>
                <Box sx={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
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
                </Box>
            
                {loading
                    ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress></CircularProgress></Box> 
                    
                    : <Grid container spacing={2} columnSpacing={2}>{data.map((project, index) =>
                        <Box key={index}>
                            {index !== 0 && <Box sx={{ height: '1px', width: '100%', backgroundColor: 'rgb(200,200,200)' }}></Box>}
                            <Box sx={{ padding: 2, margin: 1, width: '100%', borderWidth: 1 }}>
                                <Grid container={true} spacing={1}>
                                    <Grid xs={6}>
                                        <RenderProjectMedia img={project.img}></RenderProjectMedia>
                                    </Grid>
                                    <Grid xs={6}>
                                        <Typography variant='h5'>{project.project}</Typography>
                                        <Typography
                                            sx={{ float: 'right', mr: 1, padding: 1, borderWidth: 1, borderStyle: 'solid', textDecoration: 'none', color: '#16BAC5' }}
                                            component="a"
                                            href={project.link}
                                        >GitHub</Typography>
                                        <Typography sx={{ alignItems: 'center', display: 'flex', width: 200 }}>School project: {project.school ? <CheckBoxIcon sx={{ ml: 1, color: 'green' }} /> : <IndeterminateCheckBoxIcon sx={{ color: 'red', ml: 1 }} />}</Typography>
                                        <Typography sx={{ alignItems: 'center', display: 'flex' }}>Group project: {project.group ? <CheckBoxIcon sx={{ color: 'green', ml: 1.5 }} /> : <IndeterminateCheckBoxIcon sx={{ color: 'red', ml: 1.5 }} />}</Typography>
                                        <Typography sx={{ marginTop: 2 }}>{project.description}</Typography>
                                        <Typography sx={{ color: '#16BAC5', mt: 4, textAlign: 'center' }}>Technologies used:
                                        </Typography>
                                        <Grid container={true} spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                                            {project.technologies.map((item, key) => <Grid key={key}><GetIcon iconName={item}></GetIcon></Grid>)}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    )}
                    </Grid>}
        </Box>
    )
}