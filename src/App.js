import { useState } from "react";

function Statistic({ title, stat }) {
  return (<h4>{title}: {stat.toFixed(2)}</h4>);
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total / 3;
  const positive = (good / total) * 100;
  const negative = (bad / total) * 100;

  const statisticsElements = (<>
        <h3>Good: {good}</h3>
      <h3>Neutral: {neutral}</h3>
      <h3>Bad: {bad}</h3>
      <Statistic title={"Average"} stat={average} />
      <Statistic title={"Positive"} stat={positive} />
      <Statistic title={"Negative"} stat={negative} />
  </>);

  const statistics = total > 0 ? statisticsElements : <h3>No Feedback given</h3>

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
