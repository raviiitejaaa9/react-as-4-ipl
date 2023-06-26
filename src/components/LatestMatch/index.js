// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails

  return (
    <div className="latest-match-details">
      <div className="name-details">
        <p> {competingTeam} </p>
        <p> {date} </p>
        <p> {venue} </p>
        <p> {result} </p>
      </div>
      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="">
        <h1 className="card-head"> First Innings </h1>
        <p> {firstInnings} </p>
        <h1 className="card-head"> Second Innings </h1>
        <p> {secondInnings} </p>
        <h1 className="card-head"> Man of the Match </h1>
        <p> {manOfTheMatch} </p>
        <h1 className="card-head"> Umpires </h1>
        <p> {umpires} </p>
      </div>
    </div>
  )
}

export default LatestMatch
