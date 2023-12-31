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

interface Props {
    iconName: string
    size?: number
}

export const GetIcon: React.FC<Props> = ({ iconName, size=30 }) => {
    
    const [icon, setIcon] = useState<any>()

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
                return <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill='#16BAC5'>
                <path d="M15.917 0.021c-1.339 0.005-2.672 0.172-3.969 0.505-6.24 1.552-11.193 7.203-11.828 13.613-0.787 6.063 2.281 12.381 7.525 15.511 5.152 3.224 12.125 3.095 17.167-0.296 4.532-2.943 7.349-8.size3 7.183-13.715-0.077-5.353-3.083-10.557-7.683-13.size7-2.505-1.547-5.452-2.323-8.395-2.312zM15.828 2.281c6.593-0.011 13.052 5.088 13.713 11.901 1.261 7.547-5.005 15.219-12.651 15.443-7.271 0.724-14.size3-5.443-14.511-12.745-0.541-5.911 3.36-11.781 8.932-13.735 1.437-0.572 2.969-0.864 4.516-0.859zM22.62 6.584c-3.584 2.78-7.016 5.744-10.521 8.609 1.604 0.020 3.219 0.020 4.828 0.009 1.88-2.885 3.813-5.733 5.693-8.619zM15.068 16.787c-1.88 2.891-3.817 5.744-5.699 8.635 3.595-2.776 7.011-5.76 10.537-8.609-1.615-0.020-3.229-0.025-4.839-0.025z"/>
              </svg>
            default:
                return <FaBeer></FaBeer>
        }
    }

    return <Tooltip title={iconName}><IconButton sx={{cursor: 'default'}}>{fetchIcon(icon)}</IconButton></Tooltip>
}