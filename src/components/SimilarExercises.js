import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0'}}}>
      <Typography variant='h3' mb={5}>
        Exercises that <span style={{color: '#ff2625', textTransform: 'capitalize'}} >target</span> the same <span style={{color: '#ff2625', textTransform: 'capitalize'}} >muscle group</span>
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography variant='h3' mb={5}>
        Exercises that <span style={{color: '#ff2625', textTransform: 'capitalize'}} >target</span> the same <span style={{color: '#ff2625', textTransform: 'capitalize'}} >equipment</span>
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises