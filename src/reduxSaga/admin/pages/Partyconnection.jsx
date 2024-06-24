import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_CONNECTION_PENDING, DELETE_CONNECTION_SUCCESS, POST_CONNECTION_PENDING } from '../action';

const Partyconnection = () => {

  const party = useRef();
  const election = useRef();
  let dispatch = useDispatch();

  //add collection
  const addcolletion = () => {
    const data = {
      election: election.current.value,
      party: party.current.value,
    };
    console.log(data);
    dispatch({ type: POST_CONNECTION_PENDING, payload: data });
  };

  let connection = useSelector((state) => state.adminReducer)
  console.log(connection);

  // delete

  let removeData = (connection) => {
    console.log(connection);
    dispatch({ type: DELETE_CONNECTION_PENDING, payload: connection })
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-8 pe-5">
          <table className="w-100 text-center" cellPadding="15px">
            <thead>
              <tr>
                <th scope="col">Party Logo</th>
                <th scope="col">Party Name</th>
                <th scope="col">Election Name</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                connection.connection?.map((val, ind) => {
                  return (
                    <React.Fragment key={ind}>
                      <tr>
                        <td><img src={val?.party.party_logo} alt="logo image" /></td>
                        <td>{val?.party.party_name}</td>
                        <td>{val?.election.election_name}</td>
                        <td><button className='removebtn' onClick={() => removeData(val._id)}><i class="fa-solid fa-trash"></i></button></td>
                      </tr>
                    </React.Fragment>
                  )
                })
              }

            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <div className="collection-card">
            <div className="form-card">
              <div className="form-data">
                <h2>Details</h2>
                <div className="form-body mt-3">
                  <label className='d-block'>Select Election Name:
                    <select className="form-select mt-2 mb-3" ref={election} >
                      {connection.election?.map((val, index) => (
                        <option key={index} value={val._id}>{val.election_name}</option>
                      ))}
                    </select>
                  </label>
                  <label className='d-block'>Select Party Name:
                    <select className="form-select mt-2 mb-3" ref={party} >
                      {connection.party?.map((val, index) => (
                        <option key={index} value={val._id}>{val.party_name}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="collection_btn text-center">
                  <button className='btn mb-0' onClick={addcolletion}>Add Party</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Partyconnection;
