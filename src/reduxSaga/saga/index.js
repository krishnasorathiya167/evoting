import { all } from "redux-saga/effects";
import { handle_delete_connection_saga, handle_delete_election_saga, handle_delete_party_saga, handle_delete_voter_saga, handle_get_connection_saga, handle_get_election_saga, handle_get_party_saga, handle_get_voter_saga, handle_post_connection_saga, handle_post_election_saga, handle_post_party_saga, handle_post_voter_saga } from "./root/votingSaga";


function* rootSaga() {
    yield all([handle_get_party_saga(),
    handle_post_party_saga(),
    handle_delete_party_saga(),

    handle_get_voter_saga(),
    handle_post_voter_saga(),
    handle_delete_voter_saga(),

    handle_get_election_saga(),
    handle_post_election_saga(),
    handle_delete_election_saga(),

    handle_get_connection_saga(),
    handle_post_connection_saga(),
    handle_delete_connection_saga()])
}

export default rootSaga;