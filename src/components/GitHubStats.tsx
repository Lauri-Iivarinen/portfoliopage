import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";

export const GitHubStats = () => {

    const ghUsername = 'Lauri-Iivarinen'
    const mobile = useMediaQuery('(max-width:535px)')
    const [load, setLoad] = useState(false)
    
    useEffect(() => {
        setLoad(false)
        setTimeout(() => setLoad(true), 1000)
    }, [])

    if (load) {
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