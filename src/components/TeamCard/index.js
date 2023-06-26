// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-list-item">
      <li className="list-item">
        <img alt={name} src={teamImageUrl} className="team-logo" />
        <p className="team-name"> {name} </p>
      </li>
    </Link>
  )
}

export default TeamCard
