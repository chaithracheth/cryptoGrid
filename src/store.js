import {configureStore} from "@reduxjs/toolkit";
import cryptoSlice from "./Reducer/cryptoSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/RootSaga";
const saga = createSagaMiddleware()
const store =  configureStore({
    reducer:{
        crypto:cryptoSlice
    },
    middleware:[saga]
})
saga.run(rootSaga)
export default store