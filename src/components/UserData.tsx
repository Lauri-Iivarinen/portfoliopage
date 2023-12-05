import { Box, IconButton, Typography, Tooltip, Snackbar, Collapse } from "@mui/material"
import React, {useState, useRef} from "react"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import JavascriptIcon from '@mui/icons-material/Javascript';
import AbcIcon from '@mui/icons-material/Abc';

export const UserData = () => {
    const bracketR = '}'
    const bracketL = '{'
    const [data] = useState({ name: 'Lauri Iivarinen', contact: { email: 'lauri.iivarinen@gmail.com', telephone: '+358505605943' } })
    const [snackbar, setSnackbar] = useState<boolean>(false)
    const [value, setValue] = useState(0);
    const [slide, setSlide] = useState(true)
    const containerRef = useRef<HTMLElement>(null);

    const toggleSnackbar = () => {
        setSnackbar(true)
        setTimeout(() => setSnackbar(false), 1500)
    }
    const toggleSlide = () => {
        setSlide(false)
        setTimeout(() => setSlide(true), 300)
    }
    const copyText = (text: string) =>
        <Tooltip title='Copy to clipboard'>
            <IconButton onClick={() => {
                navigator.clipboard.writeText(text)
                toggleSnackbar()
            }}>
                <ContentCopyIcon color='primary'></ContentCopyIcon>
            </IconButton>
        </Tooltip>
    
    const dataJson = () =>
        <Box>
            <Collapse in={slide}>
                <Box>
                    <Typography>data = {bracketL}</Typography>
                    <Box sx={{marginLeft: 2}}>
                        <Typography>name: { data.name} {copyText(data.name)}</Typography>
                        <Typography>contact: {bracketL}</Typography>
                        <Box sx={{marginLeft: 2}}>
                            <Typography>email: {data.contact.email }{copyText(data.contact.email)}</Typography>
                            <Typography>telephone: { data.contact.telephone }{copyText(data.contact.telephone)}  </Typography>
                        </Box>
                        <Typography>{bracketR}</Typography>
                    </Box>
                    <Typography>{bracketR}</Typography>
                </Box>
            </Collapse>
            </Box>
        

    const dataClassic = () =>
        <Box>
            <Collapse in={slide}>
            <Box>
                <Typography>Name: {copyText(data.name)}</Typography>
                <Typography sx={{ paddingLeft: 1}}>{data.name}</Typography>
                <Typography>Email: {copyText(data.contact.email)}</Typography>
                <Typography sx={{ paddingLeft: 1}}>{data.contact.email}</Typography>
                <Typography>Telephone: {copyText(data.contact.telephone)} </Typography>
                <Typography sx={{ paddingLeft: 1}}>{ data.contact.telephone }</Typography>
            </Box>
            </Collapse>
        </Box>

    return (
        <Box>
            <Box sx={{ borderWidth: 1, borderStyle: 'solid', padding: 2, width: 320, height: 290 }}>
                <Box ref={containerRef} sx={{height: 230}}>
                    {value === 1 && dataJson()}
                    {value === 0 && dataClassic()}
                </Box>
                <BottomNavigation
                    sx={{alignItems: 'flex-end', backgroundColor: 'inherit'}}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        toggleSlide()
                    }}
                >
                    <BottomNavigationAction sx={{borderWidth: 1, borderColor: 'secondary', borderStyle: 'solid', paddingTop: 1, paddingBottom: 1, marginRight: 1}} label="CLASSIC" icon={<AbcIcon/>} />
                    <BottomNavigationAction sx={{borderWidth: 1, borderColor: 'secondary', borderStyle: 'solid', paddingTop: 1, paddingBottom: 1, marginLeft: 1}} label="JSON" icon={<JavascriptIcon />} />
                </BottomNavigation>
            </Box>
            <Snackbar
              open={snackbar}
              message='Copied to clipboard.'
            />
        </Box>
    )
}