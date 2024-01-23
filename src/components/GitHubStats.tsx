import { Box, CircularProgress, Link, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";

export const GitHubStats = () => {

    const ghUsername = 'Lauri-Iivarinen'
    const mobile = useMediaQuery('(max-width:900px)')
    const [load, setLoad] = useState(false)
    
    useEffect(() => {
        setLoad(false)
        setTimeout(() => setLoad(true), 1000)
    }, [])

    const linkHover = (e: any) => {
        e.target.style.cssText = "background-color: #16BAC5; color: #fff;"
    }

    const linkLeave = (e: any) => {
        e.target.style.cssText = "background-color: #fff; color: #16BAC5;"
    }

    if (load) {
        return(

            <Grid container spacing={2} sx={{ marginTop: 5, marginBottom: 2}}>
                <Grid xs={12} sx={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
                    <Typography
                        sx={{justifyContent: 'center', textAlign: 'center', width: mobile? '80%': '50%', mr: 1, padding: 1, borderWidth: 1, borderStyle: 'solid', textDecoration: 'none', color: '#16BAC5' }}
                        component="a"
                        href={"https://github.com/Lauri-Iivarinen"}
                        onMouseEnter={linkHover}
                        onMouseLeave={linkLeave}
                    >GitHub</Typography>
                </Grid>
                <Grid xs={12} sx={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
                    <Typography
                        sx={{justifyContent: 'center', textAlign: 'center', width: mobile? '80%': '50%', mr: 1, padding: 1, borderWidth: 1, borderStyle: 'solid', textDecoration: 'none', color: '#16BAC5' }}
                        component="a"
                        href={"https://www.linkedin.com/in/lauri-iivarinen/"}
                        onMouseEnter={linkHover}
                        onMouseLeave={linkLeave}
                    >LinkedIn</Typography>
                </Grid>
            </Grid>

        )
        return (
            <Box sx={{display:'flex', justifyContent: 'center', marginTop: 5, marginBottom: 2}}>
                <Grid container={true}>
                    <Grid>
                        <a href={"https://github.com/"+ghUsername}>
                            <img alt="Lauri-Iivarinen Github Stats"
                                loading='lazy'
                                height={mobile ? '120px' : '200px'}
                                src={`https://github-readme-stats.vercel.app/api?username=${ghUsername}&show_icons=true&count_private=true&theme=catppuccin_latte&hide_border=true`}
                            />
                        </a>
                    </Grid>
                    <Grid>
                        <a href={"https://github.com/"+ghUsername}>
                            <img alt="Lauri Iivarinen's Top Languages"
                                loading='lazy'
                                height='200px'
                                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${ghUsername}&langs_count=8&count_private=true&layout=donut&theme=catppuccin_latte&hide_border=true`}
                            />
                        </a>
                    </Grid>
                    <Grid>
                        <a href={"https://github.com/"+ghUsername}>
                            <img alt="Lauris's Streak"
                                height={mobile ? '120px' : '200px'}
                                loading='lazy'
                                src={`https://github-readme-streak-stats.herokuapp.com/?user=${ghUsername}&show_icons=true&count_private=true&theme=catppuccin_latte&hide_border=true&bg_color=0D1117`}
                            />
                        </a>
                    </Grid>
                </Grid>
            </Box>
        )
    } else {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        )}
    
}