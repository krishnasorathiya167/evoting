import { takeLatest } from "redux-saga/effects";
import { DELETE_ELECTION_PENDING, DELETE_PARTY_PENDING, DELETE_VOTER_PENDING, GET_ELECTION_PENDING, GET_PARTY_PENDING, GET_VOTER_PENDING, POST_ELECTION_PENDING, POST_PARTY_PENDING, POST_VOTER_PENDING } from "../../admin/action";
import { handle_delete_election, handle_delete_party, handle_delete_voter, handle_get_election, handle_get_party, handle_get_voter, handle_post_election, handle_post_party, handle_post_voter } from "../admin/manageVoting";


function* handle_get_party_saga() {
    yield takeLatest(GET_PARTY_PENDING, handle_get_party)
}

function* handle_post_party_saga() {
    yield takeLatest(POST_PARTY_PENDING, handle_post_party)
}

function* handle_delete_party_saga() {
    yield takeLatest(DELETE_PARTY_PENDING, handle_delete_party)
}

function* handle_get_voter_saga() {
    yield takeLatest(GET_VOTER_PENDING, handle_get_voter)
}

function* handle_post_voter_saga() {
    yield takeLatest(POST_VOTER_PENDING, handle_post_voter)
}
function* handle_delete_voter_saga() {
    yield takeLatest(DELETE_VOTER_PENDING, handle_delete_voter)
}

function* handle_get_election_saga() {
    yield takeLatest(GET_ELECTION_PENDING, handle_get_election)
}

function* handle_post_election_saga() {
    yield takeLatest(POST_ELECTION_PENDING, handle_post_election)
}

function* handle_delete_election_saga() {
    yield takeLatest(DELETE_ELECTION_PENDING, handle_delete_election)
}

export { handle_get_party_saga, handle_post_party_saga, handle_delete_party_saga, handle_get_voter_saga, handle_post_voter_saga, handle_delete_voter_saga, handle_get_election_saga, handle_post_election_saga, handle_delete_election_saga };