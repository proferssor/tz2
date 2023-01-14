import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   points: null,
   loading: false,
   error: null
};


export const pointsSlice = createSlice({
   name: 'coorSlice',
   initialState,
   reducers: {
      getPoints: (state) => {
         state.loading = true;
      },
      getPointsSuccess: (state, action) => {
         state.loading = false;
         state.points = action.payload;
         console.log(state.points);
      },
      getPointsFailure: (state, action) => {
         state.loading = false;
         state.error = action.payload;
      }
   }
});

export const { getPoints, getPointsSuccess, getPointsFailure } = pointsSlice.actions;

export default pointsSlice.reducer;