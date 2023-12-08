import React from 'react'
import { useImage } from '../util/hooks/UseImage'
import { Box, CircularProgress, useMediaQuery } from '@mui/material';

interface Props {
    imgName: string;
  }

export const RenderImage : React.FC<Props> = ({imgName}) => {
    const { loading, error, img } = useImage(imgName)
    const mobile = useMediaQuery('(max-width:700px)')
    if (error) {
        console.log(error)
        return <Box></Box>
    }
    return(
        <Box>{!loading ? <img width={mobile? '200px':'250px'} alt={imgName} src={img} />: <CircularProgress />}</Box>
    )
}