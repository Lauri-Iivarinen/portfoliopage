import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { useImage } from '../util/hooks/UseImage'
import { Box, CircularProgress } from '@mui/material';

interface Props {
    imgName: string;
  }

export const RenderImage : React.FC<Props> = ({imgName}) => {
    const {loading, error, img} = useImage(imgName)
    if (error) {
        console.log(error)
        return <Box></Box>
    }
    return(
        <Box>{!loading ? <img width='250px' src={img} />: <CircularProgress />}</Box>
    )
}