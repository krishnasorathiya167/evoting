import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_ELECTION_PENDING, POST_ELECTION_PENDING } from '../action';

const Election = () => {

  let election = useSelector((state) => state.adminReducer);

  let dispatch = useDispatch();

  let election_name = useRef();
  let date = useRef();

  let addData = () => {
    let data = {
      election_name: election_name.current.value,
      date: date.current.value
    }
    console.log(data);
    dispatch({ type: POST_ELECTION_PENDING, payload: data })
  }

  // let addData = () => {
  //   let data = {
  //     election_name: election_name.current.value,
  //     date: date.current.value,
  //   }
  //   console.log(data);
  //   dispatch({ type: POST_ELECTION_PENDING, payload: data })
  // }

  let removeData = (election) => {
    console.log(election);
    dispatch({ type: DELETE_ELECTION_PENDING, payload: election })
  }

  return (
    <div>

      <div className="addbtn d-flex justify-content-end">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add +</button>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Election Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Election Name</label>
                  <input type="text" class="form-control" name='election_name' ref={election_name} />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Election Date</label>
                  <input type="Date" class="form-control" name='date' ref={date} />
                </div>

              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={addData}>Add</button>
            </div>
          </div>
        </div>
      </div>



      <table class="table" cellPadding="15px" className="w-100 text-center">
        <thead>
          <tr>
            <th scope="col">Election Name</th>
            <th scope="col">Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            election.election?.map((val, ind) => {
              return (
                <React.Fragment>
                  <tr>

                    <td>{val.election_name}</td>
                    <td>{val.date}</td>
                    <td><button className='removebtn' onClick={() => removeData(val._id)}><i class="fa-solid fa-trash"></i></button></td>
                  </tr>
                </React.Fragment>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default Election;
