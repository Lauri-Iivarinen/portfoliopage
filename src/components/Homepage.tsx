import { Box, Paper, Typography } from "@mui/material"
import React from "react"
import { Header } from "./Header"

export const Homepage = () => {

    return (
        <Box>
            <Header></Header>
            <Paper sx={{margin: 2, padding: 2}}>
                <Typography>Hello:D</Typography>
            </Paper>
        </Box>
    )
}