import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_VOTER_PENDING, POST_VOTER_PENDING } from "../action";

const Voter = () => {

  let dispatch = useDispatch();

  let voter = useSelector((state) => state.adminReducer);

  let cardNo = useRef();
  let name = useRef();
  let fatherName = useRef();
  let sex = useRef();
  let dob = useRef();
  let address = useRef();
  let assemblyNoandName = useRef();
  let partNoandName = useRef();
  let password = useRef();

  let addData = () => {
    let data = {
      cardNo: cardNo.current.value,
      name: name.current.value,
      fatherName: fatherName.current.value,
      sex: sex.current.value,
      dob: dob.current.value,
      address: address.current.value,
      assemblyNoandName: assemblyNoandName.current.value,
      partNoandName: partNoandName.current.value,
      password: password.current.value
    }
    console.log(data);
    dispatch({ type: POST_VOTER_PENDING, payload: data })
  }

  let deleteData = (voter) => {
    dispatch({ type: DELETE_VOTER_PENDING, payload: voter })
  }

  return (

    <>

      
      <div className="addbtn d-flex justify-content-end">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">ADD +</button>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New message</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="row">
                  <div className="col-6">
                    <div>
                      <label class="col-form-label">Card No:</label>
                      <input type="text" class="form-control" name="cardNo" ref={cardNo} />
                      <label class="col-form-label">Name:</label>
                      <input type="text" class="form-control" name="name" ref={name} />
                      <label class="col-form-label">Father Name:</label>
                      <input type="text" class="form-control" name="fatherName" ref={fatherName} />
                      <label class="col-form-label">Sex:</label>
                      <input type="text" class="form-control" name="sex" ref={sex} />
                      <label class="col-form-label">dob:</label>
                      <input type="date" class="form-control" name="dob" ref={dob} />
                    </div>
                  </div>
                  <div className="col-6">
                    <label class="col-form-label">Address:</label>
                    <input type="text" class="form-control" name="address" ref={address} />
                    <label class="col-form-label">Assebmly NoandName:</label>
                    <input type="text" class="form-control" name="assemblyNoandName" ref={assemblyNoandName} />
                    <label class="col-form-label">Part NoandName:</label>
                    <input type="text" class="form-control" name="partNoandName" ref={partNoandName} />
                    <label class="col-form-label">Password</label>
                    <input type="text" class="form-control" name="password" ref={password} />

                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={addData}> Add</button>
            </div>
          </div>
        </div>
      </div>

      <table class="table" cellPadding="15px" className="w-100 text-center">
        <thead>
          <tr>
            <th scope="col">Card No.</th>
            <th scope="col">Name</th>
            <th scope="col">Father Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Address</th>
            <th scope="col">Assebmly Name</th>
            <th scope="col">Part NoandName</th>
            <th scope="col">Password</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            voter.voter.map((val, ind) => {
              return (
                <React.Fragment key={ind}>
                  <tr>
                    <td>{val.cardNo}</td>
                    <td>{val.name}</td>
                    <td>{val.fatherName}</td>
                    <td>{val.sex}</td>
                    <td>{val.dob}</td>
                    <td>{val.address}</td>
                    <td>{val.assemblyNoandName}</td>
                    <td>{val.partNoandName}</td>
                    <td>{val.password}</td>
                    <td><button className="removebtn" onClick={() => deleteData(val._id)}><i class="fa-solid fa-trash"></i></button></td>
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

export default Voter;