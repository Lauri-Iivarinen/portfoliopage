import { Box, Typography, CircularProgress, useMediaQuery, TextField, Select, MenuItem, FormControl, InputLabel, Button, TablePagination} from "@mui/material";
import React, {useState, useEffect} from "react";
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
    const backend = 'https://iivarinen-lauri-back-0774fd593a23.herokuapp.com'
    const mobile = useMediaQuery('(max-width:900px)')
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [page, setPage] = useState(0)
    const [paginatedData, setPaginatedData] = useState<Project[]>([])

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${backend}/api/projects`)
                const result = await response.json()
                setData(result)
                setStableData(result)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        fetchProjects()
    }, [])

    useEffect(() => {
        setPaginatedData(data.slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage))
    }, [rowsPerPage, page, data])

    const handlePageChange = (e: any, val: number) => {
        setPage(val)
    }

    const handleRowsPerPageChange = (e: any) => {
        setPage(0)
        setRowsPerPage(e.target.value)
    }

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

    const filterData = (key: string, type = typeFilter, group = groupFilter, textFilter = filter) => {
        setPage(0)
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

    const ghLinkHover = (e: any) => {
        e.target.style.cssText = "background-color: #16BAC5; color: #fff;"
    }

    const ghLinkLeave = (e: any) => {
        e.target.style.cssText = "background-color: #fff; color: #16BAC5;"
    }

    return (
        <Box>
            <Typography variant='h3' sx={{mt: 4, mb: 4,textAlign: 'center'}}>Projects</Typography>
            <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Grid container={true} sx={{alignItems: 'center', justifyContent:'center'}}>
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
                    <MenuItem value='solo'>Alone</MenuItem>
                </Select>
                </FormControl> 
                    <FormControl sx={{alignItems: 'center', m: 3}}>
                        <Button onClick={resetFilter}>Reset filters</Button>
                    </FormControl>
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
            <TablePagination
                component='div'
                count={data.length}
                page={page}
                onPageChange={handlePageChange}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleRowsPerPageChange}
                rowsPerPageOptions={[1, 5, 10, 20]}
            ></TablePagination>
            </Box>    
                {loading
                    ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress></CircularProgress></Box> 
                    
                    : <Grid container spacing={mobile? 0: 2} columnSpacing={2}>{paginatedData.map((project, index) =>
                        <Box key={index}>
                            {index !== 0 && <Box sx={{ height: '1px', width: '100%', backgroundColor: 'rgb(200,200,200)' }}></Box>}
                            <Box sx={{ padding: mobile? 0: 2, margin: 1, width: '100%', borderWidth: 1 }}>
                                <Grid container={true} spacing={1}>
                                    <Grid xs={mobile? 12: 6}>
                                        <RenderProjectMedia img={project.img}></RenderProjectMedia>
                                    </Grid>
                                    <Grid xs={mobile? 12: 6}>
                                        <Typography variant='h5'>{project.project}</Typography>
                                        <Typography
                                            sx={{ float: 'right', mr: 1, padding: 1, borderWidth: 1, borderStyle: 'solid', textDecoration: 'none', color: '#16BAC5' }}
                                            component="a"
                                            href={project.link}
                                            onMouseEnter={ghLinkHover}
                                            onMouseLeave={ghLinkLeave}
                                        >GitHub</Typography>
                                        <Typography sx={{ alignItems: 'center', display: 'flex', width: 200 }}>
                                            Project type: <GetIcon iconName={project.school ? 'School' : 'Personal'} />
                                        </Typography>
                                        <Typography sx={{ alignItems: 'center', display: 'flex' }}>
                                            Group type: <GetIcon iconName={project.school ? 'Group' : 'Alone'}/>
                                        </Typography>
                                        <Typography sx={{ marginTop: 2 }}>
                                            {project.description}
                                        </Typography>
                                        <Typography sx={{ color: '#16BAC5', mt: 4, textAlign: 'center' }}>
                                            Technologies used:
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