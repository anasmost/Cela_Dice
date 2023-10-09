import React from "react";
import { Scores } from "components/Dice";

import "./Summary.styles.css";

interface SummaryProps {
  scores: Scores;
  className?: string;
  hidden?: boolean;
}

export default function Summary({ scores, className = "", hidden, ...otherProps }: SummaryProps) {
  const sum = (scoreResults: number[] = []): number =>
    scoreResults.reduce((_sum, num) => _sum + num, 0);

  const winner = Object.entries(scores).find(
    ([, results]) => sum(results) === Math.max(...Object.values(scores).map(sum))
  )![0];

  return (
    <div hidden={hidden}>
      <h3>Fin de la partie</h3>
      <section className={"summary " + className} {...otherProps}>
        {Object.entries(scores).map(([player, results]) => (
          <article key={player} className={winner === player ? "highlight" : ""}>
            <h3>Joueur {player}</h3>
            <p>{sum(results)}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
