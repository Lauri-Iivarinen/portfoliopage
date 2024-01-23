import React, { useState, useEffect } from 'react';
import { SiReact, SiJavascript, SiDiscord, SiTypescript,SiCsharp,SiGithubactions, SiExpress, SiSpring, SiPython,SiMui,SiUnity, SiDocker, SiRobotframework } from 'react-icons/si'
import { FaBeer } from 'react-icons/fa'
import { DiJava, DiMysql, DiDatabase } from 'react-icons/di'
import {PiGameControllerBold} from 'react-icons/pi'
import { Tooltip, IconButton } from '@mui/material';
import { TbApi, TbArtboardFilled } from 'react-icons/tb'
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { useImage } from '../util/hooks/UseImage';

interface Props {
    iconName: string
    size?: number
}

export const GetIcon: React.FC<Props> = ({ iconName, size=30 }) => {
    
    const [icon, setIcon] = useState<any>()
    const [socketImg, setSocketImg] = useState()
    const { loading, error, img } = useImage("socket.png")
    
    useEffect(() => setIcon(iconName), [iconName])

    const fetchIcon = (name: string) => {
        switch (name) {
            case 'React':
                return <SiReact size={size} color='#16BAC5'></SiReact>
            case 'React Native':
                return <SiReact size={size} color='#16BAC5'></SiReact>
            case 'JavaScript':
                return <SiJavascript size={size} color='#16BAC5'></SiJavascript>
            case 'TypeScript':
                return <SiTypescript size={size} color='#16BAC5'></SiTypescript>
            case 'Express':
                return <SiExpress size={size} color='#16BAC5'></SiExpress>
            case 'Relational databases':
                return <DiMysql size={size} color='#16BAC5'></DiMysql>
            case 'Spring Boot':
                return <SiSpring size={size} color='#16BAC5'></SiSpring>
            case 'Python':
                return <SiPython size={size} color='#16BAC5'></SiPython>
            case 'Unity':
                return <SiUnity size={size} color='#16BAC5'></SiUnity>
            case 'C#':
                return <SiCsharp size={size} color='#16BAC5'></SiCsharp>
            case 'Docker':
                return <SiDocker size={size} color='#16BAC5'></SiDocker>
            case 'Robot Framework':
                return <SiRobotframework size={size} color='#16BAC5'></SiRobotframework>
            case 'Component Libraries':
                return <SiMui size={size} color='#16BAC5'></SiMui>
            case 'GitHub actions':
                return <SiGithubactions size={size} color='#16BAC5'></SiGithubactions>
            case 'Java':
                return <DiJava size={size} color='#16BAC5'></DiJava>
            case 'SQL':
                return <DiDatabase size={size} color='#16BAC5'></DiDatabase>
            case 'Pygame':
                return <PiGameControllerBold size={size} color='#16BAC5'></PiGameControllerBold>
            case 'DiscordJs':
                return <SiDiscord size={size} color='#16BAC5'></SiDiscord>
            case 'REST API':
                return <TbApi size={size} color='#16BAC5'></TbApi>
            case 'AI art generation':
                return <TbArtboardFilled size={size} color='#16BAC5'></TbArtboardFilled>
            case 'School':
                return <SchoolIcon></SchoolIcon>
            case 'Group':
                return <GroupsIcon></GroupsIcon>
            case 'Alone':
                return <PersonIcon></PersonIcon>
            case 'Personal':
                return <AssignmentIndIcon></AssignmentIndIcon>
            case 'Socket.io':
                if (!loading) return <img height={size} width={size} src={img}></img>
                return <img></img>
            default:
                return <FaBeer></FaBeer>
        }
    }

    return <Tooltip title={iconName}><IconButton sx={{cursor: 'default'}}>{fetchIcon(icon)}</IconButton></Tooltip>
}