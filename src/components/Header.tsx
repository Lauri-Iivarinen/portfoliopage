import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link, Typography } from "@mui/material";

export const Header = () => {
    return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center' }}>
            <Typography variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 5,
                ml: 5,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',}}>
                BIO
              </Typography>
              <Typography variant="h6"
              component="a"
              href="/career"
              sx={{
                mr: 5,
                ml: 5,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',}}>
                CAREER
              </Typography>
              <Typography variant="h6"
              component="a"
              href="/projects"
              sx={{
                mr: 5,
                ml: 5,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',}}>
                PROJECTS
              </Typography>
            
        </Toolbar>
      </AppBar>
    </Box>
    )
}