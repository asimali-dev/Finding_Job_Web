import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import jobReducer from "./JobSlice"
import companyReducer from "./CompanySlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    job: jobReducer,
    company : companyReducer

  },
});

export default store;