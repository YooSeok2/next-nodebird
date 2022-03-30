import axios from "axios";
import { all, takeLatest, fork, put, call } from "redux-saga/effects";

//call, fork : api요청 시 결과값을 반환 받는데 차이는 blocking, nonblocking, sync, async의 차이
//put : 실제 redux에서의 dispatch와 동일
//take, takeEvery, takeLatest, takeLeading
//순서대로 take는 saga에서의 액션을 듣고 실행하는 리스너 일회성 한번 듣고 실행하면 끝.
//takeEvery는 무한 리스너 실행하고 종료가 아닌 영구성 리스너 단점, 잘못 눌러서 2번 클릭 시 두 번 요청 다 보내고 다 받음
//takeLatest는 takeEvery의 단점을 보완 실수로 2번 클릭 시 요청은 2번 다 보내나 응답을 마지막 것만 받고 실행
//takeLeading은 takeLatest의 정확히 반대.
//all에는 대체로 배열로 전달 배열에 있는 effets들을 모조리 실행.
const loginAPI = (data) => axios.post('/user/login', data);

function* login (action) {
    try {
        const result = call(loginAPI, action.data);
        yield put({
            type: 'LOGIN_SUCCESS',
            data: result.data
        });
    } catch (error) {
        yield put({
            type: 'LOGIN_FAILURE',
            error: error.response.data
        });
    }
}

function* watchLogin () {
    yield takeLatest('LOGIN_REQUEST', login);
}

const logOutAPI = () => axios.post('/user/logout');

function* logout () {
    try {
        yield call(logOutAPI);
        yield put({
            type: 'LOGOUT_SUCCESS'
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: 'LOGOUT_FAILURE',
            error: err.response.data
        });
    }
}

function* watchLogout () {
    yield takeLatest('LOGOUT_REQUEST', logout);
}

export default function* userSaga () {
    yield all([
        fork(watchLogin),
        fork(watchLogout)
    ]);
}