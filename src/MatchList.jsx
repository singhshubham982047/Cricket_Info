import React, { useEffect, useState } from "react";

const MatchList = () => {
  const [match, setMatch] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=bef4b6e4-0fbb-4e11-9410-6e16e2ca5ab1&offset=0"
    )
      .then((res) => res.json())
      .then((res) => {
        setMatch(res.data);
      });
  }, []);
  return (
    <>
      {match.map((matchs) => (
        <div className="list_Container">
          <ul>
            <li key={matchs.name} className="list">
              {matchs.name} <br /> Date:-&nbsp;{matchs.date} -{matchs.status}{" "}
              <br />
              {matchs.score.map((scr) => (
                <p>
                  Inning:- {scr.inning} <br /> Overs:- {scr.o} <br />
                  Runs:- {scr.r} <br /> Wickets:- {scr.w}
                </p>
              ))}
              {matchs.venue} - {matchs.matchType}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default MatchList;
