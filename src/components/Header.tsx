import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from "@mui/material";

export const Header = () => {
    return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center' }}>
            <Link href='/' sx={{marginRight: 15}} color='rgb(255,255,255)'>Bio</Link>
            <Link href='/work' color='rgb(255,255,255)'>Work</Link>
        </Toolbar>
      </AppBar>
    </Box>
    )
}