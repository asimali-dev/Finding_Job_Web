import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companies : [],
    singleCompany : null
}

const CompanySlice = createSlice({
    name : "company",
    initialState,
    reducers: {
        setcompanies(state, action){
            state.companies = action.payload
        },
        setsinglecompany(state, action){
            state.singleCompany = action.payload
        }
    }

})

export const {setcompanies, setsinglecompany} = CompanySlice.actions;
export default  CompanySlice.reducer