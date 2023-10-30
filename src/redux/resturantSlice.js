import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//api call- createAsync Thunk
export const fetchResturants = createAsyncThunk('restuarantList/fetchResturants',() => {
   return axios.get('/restaurants.json').then(response => response.data.restaurants)
    //apicall

})
const resturantSlice = createSlice({
    name: 'restuarantList',
    initialState: {
        loading: false,
        allRestaurants: [],
        allResturantContainer:[],
        error: ''
    },
    reducers:{
        searchRestuarant:(state,action)=>{
            state.allRestaurants=state.allResturantContainer.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))

        }
    },

    
    extraReducers: (builder) => {
        builder.addCase(fetchResturants.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchResturants.fulfilled, (state, action) => {
            state.loading = false;
            state.allRestaurants = action.payload
            state.allResturantContainer=action.payload
            state.error = ""
        })
        builder.addCase(fetchResturants.rejected, (state, action) => {
            state.loading = false;
            state.allRestaurants=[]
            state.error = action.error.message
            })
    }
})
export const {searchRestuarant}=resturantSlice.actions
export default resturantSlice.reducer