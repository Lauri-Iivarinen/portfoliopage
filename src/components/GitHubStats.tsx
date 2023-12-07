import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { UserData } from "./UserData";

export const GitHubStats = () => {

    const ghUsername = 'Lauri-Iivarinen'

    return (
        <Box sx={{display:'flex', justifyContent: 'center', marginTop: 5, marginBottom: 2}}>
            <Grid container={true}>
                <Grid>
                    <a href={"https://github.com/"+ghUsername}>
                        <img alt="Lauri-Iivarinen Github Stats" height='200px' src={`https://github-readme-stats.vercel.app/api?username=${ghUsername}&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=#fff`} />
                    </a>
                </Grid>
                <Grid>
                    <a href={"https://github.com/"+ghUsername}>
                        <img alt="Lauri Iivarinen's Top Languages" height='200px' src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${ghUsername}&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=#fff`} />
                    </a>
                </Grid>
                <Grid>
                    <a href={"https://github.com/"+ghUsername}>
                        <img alt="Lauris's Streak" height='200px' src={`https://github-readme-streak-stats.herokuapp.com/?user=${ghUsername}&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=#fff`}/>
                    </a>
                </Grid>
            </Grid>
        </Box>
    )
}