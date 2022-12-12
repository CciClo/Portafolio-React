import { createSlice } from '@reduxjs/toolkit';

export const animationSliderSlice = createSlice({
    name: 'animationSliderSlice',
    initialState: {},
    reducers: {
        changeAnimation: (data,action) => {
            return action.payload
        }
    }
});

export const { changeAnimation } = animationSliderSlice.actions;

export default animationSliderSlice.reducer;
