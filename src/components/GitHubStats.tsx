import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

export const GitHubStats = () => {

    const ghUsername = 'Lauri-Iivarinen'

    return (
        <Box sx={{display:'flex', marginTop: 2, marginBottom: 2, borderWidth: 1, borderStyle:'solid', padding: 2, borderRadius: 2}}>
                <Grid container={true} spacing={2}>
                    <Grid>
                        <a href={"https://github.com/"+ghUsername}>
                            <img alt="Lauri-Iivarinen Github Stats" height='200px' src={`https://github-readme-stats.vercel.app/api?username=${ghUsername}&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117`} />
                        </a>
                    </Grid>
                    <Grid>
                        <a href={"https://github.com/"+ghUsername}>
                            <img alt="Lauri Iivarinen's Top Languages" height='200px' src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${ghUsername}&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117`} />
                        </a>
                    </Grid>
                    <Grid>
                        <a href={"https://github.com/"+ghUsername}>
                            <img alt="Lauris's Streak" height='200px' src={`https://github-readme-streak-stats.herokuapp.com/?user=${ghUsername}&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117`}/>
                        </a>
                    </Grid>
                </Grid>
        </Box>
    )
}