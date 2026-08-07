import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allJobs: [],
    singleJob: null,
    adminJobs: [],
    filters: {
        search: "",
        location: "",
        salary: "",
        role: ""
    }
};

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setAllJobs(state, action) {
            state.allJobs = action.payload
        },
        setAdminJobs(state, action) {
            state.adminJobs = action.payload
        },
        setSingleJob(state, action) {
            state.singleJob = action.payload
        },
        setSearchFilter(state, action){
            state.filters.search = action.payload
        },
        setLocationFilter(state, action){
            state.filters.location = action.payload

        },
        setRoleFilter(state,action){
            state.filters.role = action.payload

        },
        setSalaryFilter(state,action){
            state.filters.salary = action.payload
        }
    }
})

export const {
    setAdminJobs,
    setAllJobs,
    setSingleJob,
    setSearchFilter,
    setSalaryFilter,
    setRoleFilter,
    setLocationFilter,
} = jobSlice.actions;


export default jobSlice.reducer