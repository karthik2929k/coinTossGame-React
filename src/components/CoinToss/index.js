// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    isheads: true,
  }

  onTossClick = () => {
    // const {total, heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({total: prevState.total + 1}))

    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState(prevState => ({isheads: !prevState.isheads}))
    }
  }

  render() {
    const {isheads, total, heads, tails} = this.state

    return (
      <div>
        <h1>Coin Toss Game</h1>
        <p>Heads (or) Tails</p>
        <div>
          {isheads ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
        </div>
        <button type="button" onClick={this.onTossClick}>
          Toss Coin
        </button>
        <div>
          <p>Total: {total}</p>
          <p>Heads: {heads}</p>
          <p>Tails: {tails}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
