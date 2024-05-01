import { configureStore } from "@reduxjs/toolkit";
import authservice from "./authslice";

 const store = configureStore({

    reducer: {
        authservice
    }
 })


    export default store