import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_PARTY_PENDING, POST_PARTY_PENDING } from '../action';


const Party = () => {

  let dispatch = useDispatch();

  let party = useSelector((state) => state.adminReducer)

  let party_name = useRef();
  let party_logo = useRef();
  let short_code = useRef();

  let addData = () => {
    let data = {
      party_name: party_name.current.value,
      short_code: short_code.current.value,
      party_logo: party_logo.current.files[0]
    };

    let formdata = new FormData();

    formdata.append("party_name", data.party_name);
    formdata.append("short_code", data.short_code);
    formdata.append("party_logo", data.party_logo);
    console.log(data);
    dispatch({ type: POST_PARTY_PENDING, payload: formdata })
  }

  let deleteData = (party) => {
    console.log(party);
    dispatch({ type: DELETE_PARTY_PENDING, payload: party })
  }

  return (
    <>

      <div className="addbtn d-flex justify-content-end">
        <button type="button" className='addbtn' class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add +</button>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Party Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Party Name</label>
                <input type="text" class="form-control" ref={party_name} />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Short Code</label>
                <input type="text" className='form-control' ref={short_code} />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Party Logo</label>
                <input type="file" className='form-control' ref={party_logo} />
              </div>
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
            <th>Party Logo</th>
            <th>Party Name</th>
            <th>Short Code</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            party.party.map((val, ind) => {
              // console.log(party);
              return (
                <React.Fragment key={ind}>
                  <tr>
                    <td><img src={val.party_logo} /></td>
                    <td>{val.party_name}</td>
                    <td>{val.short_code}</td>
                    <td><button className='removebtn' onClick={() => deleteData(val._id)}><i class="fa-solid fa-trash"></i></button></td>
                  </tr>
                </React.Fragment>

              )
            })
          }


        </tbody>

      </table>
    </>
  )
}

export default Party;
