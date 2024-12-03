import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  if (props.counter == 0) {
    return (
      <div>
      No feedback given
      </div>
    )
  }
  else {
  return (
    <div>
      <table>
      <StatisticLine text="good" value={props.Good} />
      <StatisticLine text="neutral" value={props.Neutral} />
      <StatisticLine text="bad" value={props.Bad} />
      <StatisticLine text="all" value={props.counter} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.positive} />
      </table>
    </div>
  )
  }
}

const App = () => {
  const [ Good, setGood ] = useState(0)
  const [ Neutral, setNeutral ] = useState(0)
  const [ Bad, setBad ] = useState(0)
  const good = () => {
    setGood(Good + 1);
  }
  const neutral = () => {
    setNeutral(Neutral + 1);
  }
  const bad = () => {
    setBad(Bad + 1);
  }
  return (
  <>
  <h1>give feedback</h1>
  <Button onClick={good} text="good" />
  <Button onClick={neutral} text="neutral"/>
  <Button onClick={bad} text="bad"/>
  <h1>statistics</h1>
  <Statistics Good={Good} Neutral={Neutral} 
  Bad={Bad} counter={Good + Bad + Neutral}
  average={((Good - Bad) / (Good + Bad + Neutral)).toPrecision(1)} positive={(Good / (Good + Bad + Neutral) * 100).toPrecision(4)} /> 
  </>
  )
 }
 

export default App