import {createSlice} from '@reduxjs/toolkit'

const cryptoSlice = createSlice({
    name:'crypto',
    initialState: {
        data:[],
        hasError:false,
        filterSymbolText:''
    },
    reducers: {
        getData:(state,action)=> {},
        getDataSuccess :(state,action) => {
            state.hasError = false
            state.data=action?.payload
        },
        getDataFailure : (state) => {
            state.hasError = true
        },
        getFilterSearch : (state,action) => {
            // console.log('action.payload',action.payload)
            state.filterSymbolText = action.payload
        },
    }
})
export const {getData,getDataFailure,getDataSuccess,getFilterSearch} = cryptoSlice.actions
export default  cryptoSlice.reducer