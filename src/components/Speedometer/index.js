// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelaration = () => {
    this.setState(prevState => {
      return {speed: prevState.speed + 10}
    })
  }

  onApplyBreak = () => {
    this.setState(prevState => {
      return {speed: prevState.speed - 10}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="div">
        <h1>SPEEDOMETER</h1>

        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedomete"
        />

        <div>
          <h1>Speed is {speed}mph</h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={this.onAccelaration}>
            Accelerate
          </button>
          <button className="btn" onClick={this.onApplyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
