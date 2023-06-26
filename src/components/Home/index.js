// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamCardsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCardsList()
  }

  getCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data)
    const {teams} = data
    const modifiedData = teams.map(eachItem => ({
      teamImageUrl: eachItem.team_image_url,
      name: eachItem.name,
      id: eachItem.id,
    }))

    console.log(modifiedData)
    this.setState({
      teamCardsList: modifiedData,
      isLoading: false,
    })
  }

  render() {
    const {teamCardsList, isLoading} = this.state
    console.log(teamCardsList)
    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1 className="ipl-head"> IPL Dashboard </h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="team-cards-container">
            {teamCardsList.map(eachItem => (
              <TeamCard key={eachItem.id} teamDetails={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
