import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link, Typography } from "@mui/material";

export const Header = () => {

  const mouseOver = (e: any) => {
    e.target.style.color = '#26f500'
    //purple: #9442c1
    //green: #26f500
  }

  const mouseOff = (e: any) => {
    e.target.style.color = 'inherit'
  }

    return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center' }}>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 5,
                ml: 5,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
              onMouseOver={mouseOver}
              onMouseOut={mouseOff}
            >
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
                textDecoration: 'none',
              }}
              onMouseOver={mouseOver}
              onMouseOut={mouseOff}
            >
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
                textDecoration: 'none',
              }}
              onMouseOver={mouseOver}
              onMouseOut={mouseOff}
            >
                PROJECTS
              </Typography>
            
        </Toolbar>
      </AppBar>
    </Box>
    )
}