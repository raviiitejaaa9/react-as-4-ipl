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
      <div className="innings-details">
        <p className="card-head"> First Innings </p>
        <p> {firstInnings} </p>
        <p className="card-head"> Second Innings </p>
        <p> {secondInnings} </p>
        <p className="card-head"> Man of the Match </p>
        <p> {manOfTheMatch} </p>
        <p className="card-head"> Umpires </p>
        <p> {umpires} </p>
      </div>
    </div>
  )
}

export default LatestMatch
