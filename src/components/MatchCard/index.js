// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  console.log(matchDetails)
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
  } = matchDetails
  const winOrLose = matchStatus === 'Won'
  const matchStatusCss = winOrLose ? 'win' : 'lose'

  return (
    <li className="match-card">
      <img
        className="recent-match-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p> {competingTeam} </p>
      <p> {result} </p>
      <p className={matchStatusCss}> {matchStatus} </p>
    </li>
  )
}

export default MatchCard
