import {put,call,takeEvery} from 'redux-saga/effects'
import {getDataFailure,getDataSuccess} from "../Reducer/cryptoSlice";

function* getCryptoInfo(action) {
    const {cb} = action.payload
    try {
        const resp =  yield call(fetch,' https://api.wazirx.com/sapi/v1/tickers/24hr')
        const res = yield resp.json()
        if(resp.status === 200) {
            yield  put(getDataSuccess(res))
            if(cb) cb(res)
        }
        else {
            console.log('else')
            yield put(getDataFailure())
        }
    } catch (e) {
        yield put(getDataFailure())
    }
}

function* cryptoSaga() {
    yield takeEvery('crypto/getData', getCryptoInfo)
}

export default cryptoSaga