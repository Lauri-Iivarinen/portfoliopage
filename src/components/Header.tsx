import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "@mui/material";

export const Header = () => {
    return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center' }}>
            <Link href='/' sx={{marginRight: 15}} color='rgb(255,255,255)'>Bio</Link>
            <Link href='/career' sx={{marginRight: 15}} color='rgb(255,255,255)'>Career</Link>
            <Link href='/projects' color='rgb(255,255,255)'>Projects</Link>
        </Toolbar>
      </AppBar>
    </Box>
    )
}