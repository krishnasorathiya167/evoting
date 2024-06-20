import { call, put } from "redux-saga/effects";
import { delete_election, delete_party, delete_voter, get_election, get_party, get_voter, post_election, post_party, post_voter } from "../../admin/api";
import { DELETE_ELECTION_ERROR, DELETE_ELECTION_SUCCESS, DELETE_PARTY_ERROR, DELETE_PARTY_SUCCESS, DELETE_VOTER_ERROR, DELETE_VOTER_SUCCESS, GET_ELECTION_ERROR, GET_ELECTION_SUCCESS, GET_PARTY_ERROR, GET_PARTY_SUCCESS, GET_VOTER_ERROR, GET_VOTER_SUCCESS, POST_ELECTION_ERROR, POST_ELECTION_SUCCESS, POST_PARTY_ERROR, POST_PARTY_SUCCESS, POST_VOTER_ERROR, POST_VOTER_SUCCESS } from "../../admin/action";

function* handle_get_party(action) {
    // console.log(action, "manage");
    try {
        let { data, status } = yield call(get_party, action);
        if (status === 200) {
            yield put({ type: GET_PARTY_SUCCESS, payload: data })
        }
    } catch (error) {
        yield put({ type: GET_PARTY_ERROR, payload: error })
    }
}

function* handle_post_party(action) {
    // console.log(action, "manage");
    try {
        let { data } = yield call(post_party, action);

        yield put({ type: POST_PARTY_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: POST_PARTY_ERROR, payload: error })
    }
}

function* handle_delete_party(action) {
    try {
        let { data } = yield call(delete_party, action);
        console.log(data);
        yield put({ type: DELETE_PARTY_SUCCESS, payload: action.payload });


    } catch (error) {
        yield put({ type: DELETE_PARTY_ERROR, payload: error })
    }
}

function* handle_get_voter(action) {
    console.log(action, "manage from voter");
    // let res = yield call(get_voter, action);
    // console.log(res);
    try {
        let { data, status } = yield call(get_voter, action);
        if (status === 200) {
            yield put({ type: GET_VOTER_SUCCESS, payload: data })
        }

    } catch (error) {
        yield put({ type: GET_VOTER_ERROR, payload: error })
    }
}

function* handle_post_voter(action) {
    // console.log(action, "man");
    try {
        let { data } = yield call(post_voter, action);
        console.log(data);
        yield put({ type: POST_VOTER_SUCCESS, payload: data })

    } catch (error) {
        yield put({ type: POST_VOTER_ERROR, payload: error })
    }
}

function* handle_delete_voter(action) {
    console.log(action, "managedelete");
    try {
        let { data } = yield call(delete_voter, action);
        yield put({ type: DELETE_VOTER_SUCCESS, payload: action.payload })

    } catch (error) {
        yield put({ type: DELETE_VOTER_ERROR, payload: error })
    }
}

function* handle_get_election(action) {
    // console.log(action, "manage ele");
    try {
        let { data, status } = yield call(get_election, action);
        if (status === 200) {
            yield put({ type: GET_ELECTION_SUCCESS, payload: data })
        }
    } catch (error) {
        yield put({ type: GET_ELECTION_ERROR, payload: error })
    }
}

function* handle_post_election(action) {
    // console.log(action,"manage");
    try {
        let { data } = yield call(post_election, action);
        yield put({ type: POST_ELECTION_SUCCESS, payload: data })

    } catch (error) {
        yield put({ type: POST_ELECTION_ERROR, payload: error })
    }
}

function* handle_delete_election(action) {
    console.log(action, "manage ele");
    try {
        let {data} = yield call(delete_election, action);
        yield put({type:DELETE_ELECTION_SUCCESS,payload:action.payload})
        
    } catch (error) {
        yield put({type:DELETE_ELECTION_ERROR,payload:error})
    }
}

export { handle_get_party, handle_post_party, handle_delete_party, handle_get_voter, handle_post_voter, handle_delete_voter, handle_get_election, handle_post_election, handle_delete_election }