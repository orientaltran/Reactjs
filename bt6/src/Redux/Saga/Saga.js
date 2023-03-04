// import { call,delay, takeEvery, takeLatest } from 'redux-saga/effects'
import { put, call, takeLatest, delay } from 'redux-saga/effects'
import ActionType from '../ActionType';

async function ApiCiy(key) {
    let res = await fetch(`https://vietcpq.name.vn/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/weather/Search/${key}`);
    let dt = res.json();
    return dt;
}

function* GetCityData({ type, payload }) {
    yield delay(800)
    let dt = yield call(ApiCiy, payload);
    console.log(dt);
    yield put({
        type: ActionType.city.SET_DATA,
        payload: dt
    })
    // yield delay(1000)
    // console.log("data")
}
// Generators function* khi có dấu * : Bắt buộc phải có con trỏ yield hoặc return
function* Saga() {
    // Mỗi lần đều call 
    // yield takeEvery(ActionType.city.GET_DATA, GetCityData)

    // Call lần cuối khi bấm nút
    yield takeLatest(ActionType.city.GET_DATA, GetCityData)

    // Pedding APi
}

export default Saga;