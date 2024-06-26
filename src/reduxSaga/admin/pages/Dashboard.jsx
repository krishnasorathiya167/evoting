import React from 'react'
import { useSelector } from 'react-redux';

const Dashboard = () => {

  let voter = useSelector((state) => state.userReducer);
  let admin = useSelector((state) => state.adminReducer);

  const partyVotes = {};

  // Loop through voters to accumulate votes for each party
  voter.user?.forEach((val) => {
    const partyName = val?.party?.party_name;
    if (partyVotes[partyName]) {
      partyVotes[partyName].votes += 1;
    } else {
      partyVotes[partyName] = {
        logo: val?.party?.party_logo,
        votes: 1,
      };
    }
  });

  // Convert partyVotes object to an array for rendering
  const partyVoteList = Object.entries(partyVotes);

  const totalVotes = partyVoteList.reduce((sum, [, details]) => sum + details.votes, 0);
  const totalVoters = admin.voter?.length || 0;
  const totalparty = admin.party?.length || 0;

  return (
    <div>

      <section className="card-user">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card text-center">
                <h2>Votes</h2>
                <h3>Gujarat</h3>
                <p>Total Votes : {totalVotes}</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card text-center">
                <h2>Voters</h2>
                <h3>Gujarat</h3>
                <p>Total Voters : {totalVoters}</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card text-center">
                <h2>Party</h2>
                <h3>Gujarat</h3>
                <p>Total Party : {totalparty}</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <div className="userdata">
        <div className="container">
          <div className="user-table mt-5">
            <table className='w-100 text-center'>
              <thead>
                <tr>
                  <th scope="col">Party Name</th>
                  <th scope="col">Party Logo</th>
                  <th scope="col">Button</th>
                  {/* <th scope="col">Submit</th> */}
                </tr>
              </thead>
              <tbody>
                {
                  partyVoteList.map(([partyName, details], index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td><img src={details.logo} alt="logo image" /></td>
                        <td>{partyName}</td>
                        <td>{details.votes}</td>
                      </tr>
                    </React.Fragment>
                  ))
                }
              </tbody>
            </table>



          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard;
