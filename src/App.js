import { useState } from "react";

function StatisticLine({ title, stat }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{stat}</td>
    </tr>
  );
}

function Statistics({ good, neutral, bad, total }) {
  
  const average = total / 3;
  const positive = (good / total) * 100;
  const negative = (bad / total) * 100;


  return(
    <table> 
      <tr>
        <th>title</th>
        <th>stat</th>
      </tr>
      <StatisticLine title={"Good"} stat={good} />
      <StatisticLine title={"Neutral"} stat={neutral} />
      <StatisticLine title={"Bad"} stat={bad} />
      <StatisticLine title={"Average"} stat={average} />
      <StatisticLine title={"Positive"} stat={positive} />
      <StatisticLine title={"Negative"} stat={negative} />
    </table>
  );
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const statistics = total > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} /> : <h3>No Feedback given</h3>

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(prev => prev + 1)}>good</button>
      <button onClick={() => setNeutral(prev => prev + 1)}>neutral</button>
      <button onClick={() => setBad(prev => prev + 1)}>bad</button>
      <h2>statistics</h2>
      {statistics}
    </div>
  );
}

export default App;
