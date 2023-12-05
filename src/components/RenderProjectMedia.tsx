import { CardMedia, Box, MobileStepper, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

interface Props {
    img: string[]
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const RenderProjectMedia: React.FC<Props> = ({ img }) => {
    const [step, setStep] = useState(0)
    const [images, setImages] = useState<string[]>([])
    const maxSteps = img.length;
    useEffect(() => {
        setImages(img)
    }, [])

    const next = () => {
        setStep((prevStep => prevStep + 1))
    }

    const prev = () => {
        setStep((prevStep => prevStep - 1))
    }

    const handleStepChange = (step: number) => {
        setStep(step);
      };

    return (
        <Box sx={{mt: 1}}>
            <SwipeableViews
                
            index={step}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            >
                {images.map((img, index) => {
                    return (
                        <Box
                            component="img"
                            sx={{
                                objectFit: 'contain',
                                display: 'block',
                                maxWidth: '100%',
                                height: '200px',
                                margin: 'auto',
                            }}
                            src={img}
                        ></Box>
                    )
                })}
            </SwipeableViews>
            <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={step}
            nextButton={
            <Button
                size="small"
                onClick={next}
                disabled={step === maxSteps - 1}
            >
                Next
            </Button>
            }
            backButton={
            <Button size="small" onClick={prev} disabled={step === 0}>
                Back
            </Button>
            }
      />
        </Box>
    )
}