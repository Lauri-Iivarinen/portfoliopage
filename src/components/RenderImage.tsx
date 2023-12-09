import React from 'react'
import { useImage } from '../util/hooks/UseImage'
import { Box, CircularProgress, useMediaQuery } from '@mui/material';

interface Props {
    imgName: string;
  }

export const RenderImage : React.FC<Props> = ({imgName}) => {
    const { loading, error, img } = useImage(imgName)
    const mobile = useMediaQuery('(max-width:660px)')
    const mobile2 = useMediaQuery('(max-width:500px)')
    if (error) {
        console.log(error)
        return <Box></Box>
    }
    return(
        <Box>{!loading ? <img width={mobile? mobile2? '150px': '200' :'250px'} alt={imgName} src={img} />: <CircularProgress />}</Box>
    )
}