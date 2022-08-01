import {all,fork} from 'redux-saga/effects'
import CryptoSaga from "./crypto.saga";

export default function* rootSaga() {
    yield all([
        fork(CryptoSaga)
    ])
}