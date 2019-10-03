import React, { useState } from "react";
import Veiw from "./components/Veiw.js";
import "./App.css";

function App() {
  const [homeTeam] = useState("redsox");
  const [awayTeam] = useState("yankees");
  const [homeStrike, setHomeStrike] = useState(0);
  const [homeBall, setHomeBall] = useState(0);
  const [homeOut, setHomeOut] = useState(0);
  const [homeHits, setHomeHits] = useState(0);
  const [homeRuns, setHomeRuns] = useState(0);
  const [awayStrike, setAwayStrike] = useState(0);
  const [awayBall, setAwayBall] = useState(0);
  const [awayOut, setAwayOut] = useState(0);
  const [awayHits, setAwayHits] = useState(0);

  const [awayRuns, setAwayRuns] = useState(0);

  // strike functions fro both teams
  const hStrike = () => {
    if (homeStrike < 2) {
      setHomeStrike(homeStrike + 1);
    } else if (homeStrike === 2 && homeOut < 2) {
      setHomeStrike(0);
      setHomeBall(0);
      setHomeOut(homeOut + 1);
    } else if (homeStrike === 2 && homeOut === 2) {
      setHomeStrike(0);
      setHomeBall(0);
      setHomeOut(0);
      setHomeHits(0);
    }
  };

  const aStrike = () => {
    if (awayStrike < 2) {
      setAwayStrike(awayStrike + 1);
    } else if (awayStrike === 2 && awayOut < 2) {
      setAwayStrike(0);
      setAwayBall(0);

      setAwayOut(awayOut + 1);
    } else if (awayStrike === 2 && awayOut === 2) {
      setAwayStrike(0);
      setAwayBall(0);
      setAwayOut(0);
      setAwayHits(0);
    }
  };
  //  ball functions completed for both teams

  const hBall = () => {
    if (homeBall < 3) {
      setHomeBall(homeBall + 1);
    } else if (homeBall > 2 && homeHits > 2) {
      setHomeHits(homeHits + 1);
      setHomeStrike(0);
      setHomeBall(0);
      setHomeRuns(homeRuns + 1);
    } else if (homeBall > 2 && homeHits < 3) {
      setHomeHits(homeHits + 1);
      setHomeStrike(0);
      setHomeBall(0);
    } else {
      alert("failed");
    }
  };

  const aBall = () => {
    if (awayBall < 3) {
      setAwayBall(awayBall + 1);
    } else if (awayBall > 2 && awayHits > 2) {
      setAwayHits(awayHits + 1);
      setAwayStrike(0);
      setAwayBall(0);
      setAwayRuns(awayRuns + 1);
    } else if (awayBall > 2 && awayHits < 3) {
      setAwayHits(awayHits + 1);
      setAwayStrike(0);
      setAwayBall(0);
    } else {
      alert("failed");
    }
  };

  return (
    <div className="App">
      <Veiw
        strike={hStrike}
        ball={hBall}
        stateStrike={homeStrike}
        stateHits={homeHits}
        stateOut={homeOut}
        stateBall={homeBall}
        stateRuns={homeRuns}
        team={homeTeam}
      />
      <Veiw
        strike={aStrike}
        ball={aBall}
        stateStrike={awayStrike}
        stateHits={awayHits}
        stateOut={awayOut}
        stateBall={awayBall}
        stateRuns={awayRuns}
        team={awayTeam}
      />
    </div>
  );
}

export default App;
