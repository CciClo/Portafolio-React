import { configureStore } from '@reduxjs/toolkit'
import animationSliderSlice  from './slices/animationSlider.slice';

export default configureStore({
    reducer: {
        animationSliderRedux: animationSliderSlice
    }
});
