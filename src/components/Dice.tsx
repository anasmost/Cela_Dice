import React, { useEffect, useRef, useState } from "react";
import ReactDice, { ReactDiceRef } from "react-dice-complete";
import "./Dice.styles.css";
import Summary from "components/Summary";

export type Player = 1 | 2;
export type Scores = {
  [key in Player]: number[];
};
interface DiceProps {
  turnCount?: number;
  resultTimeout?: number;
}

export default function Dice({ turnCount = 1, resultTimeout = 1500 }: DiceProps) {
  const getInitialScores = (): Scores => ({ 1: [], 2: [] });
  const getRandomPlayer = (): Player => Math.ceil(2 * Math.random()) as Player;
  const getOtherPlayer = (currentPlayer: Player): Player => {
    switch (currentPlayer) {
      case 1:
        return 2;
      case 2:
        return 1;
    }
  };

  const [scores, setScores] = useState<Scores>(getInitialScores);
  const [player, setPlayer] = useState<Player>(getRandomPlayer);
  const [isPending, setIsPending] = useState<undefined | boolean>();
  const reactDice = useRef<ReactDiceRef>(null);
  const firstPlayerRef = useRef<Player>(player);
  const playCount = useRef<number>(turnCount * 2).current;

  const currentPlayCount: number = Object.values(scores).reduce(
    (sum, results) => sum + results.length,
    0
  );
  const gameOver = currentPlayCount === playCount;
  const displayScore =
    player === firstPlayerRef.current
      ? scores[player][Math.floor(currentPlayCount / 2)]
      : scores[player][Math.floor((currentPlayCount - 1) / 2)];

  // Change Player After [resultTimeout]ms effect
  useEffect(() => {
    if (!gameOver && isPending) {
      const effect = setTimeout(() => {
        setPlayer(getOtherPlayer);
        setIsPending(false);
      }, resultTimeout);
      return () => clearTimeout(effect);
    }
  }, [gameOver, isPending, resultTimeout, scores]);

  // Start Rolling Dices
  const rollAll = () => {
    setIsPending(true);
    reactDice.current?.rollAll();
  };

  // On Rolling Done
  const rollDone = (totalValue: number, values: number[]) => {
    if (isPending) {
      setScores((prevScores) => ({
        ...prevScores,
        [player]: [...prevScores[player], totalValue],
      }));
    }
  };

  // Reset the game
  const reset = () => {
    const firstPlayer = getRandomPlayer();

    setScores(getInitialScores);
    setPlayer(firstPlayer);
    setIsPending(undefined);
    reactDice.current?.rollAll([1, 1]);
    firstPlayerRef.current = firstPlayer;
  };

  // const displayScore = scores[player][displayScoreIndex.current[player](currentPlayCount)];
  return (
    <main className="dice__container">
      <header className="dice__header">Joueur {player}</header>
      <ReactDice
        defaultRoll={1}
        rollTime={isPending === undefined ? 0 : 0.5}
        numDice={2}
        dotColor="#222"
        faceColor="#ccc"
        disableIndividual={true}
        ref={reactDice}
        rollDone={rollDone}
      />
      <p className={"dice__result"} hidden={currentPlayCount === 0}>
        {displayScore}
      </p>
      <Summary scores={scores} hidden={!gameOver} />
      <button
        role="status"
        className={"dice__button"}
        hidden={gameOver}
        onClick={rollAll}
        disabled={isPending}
      >
        Lancer le dès
      </button>
      <button type="reset" className={"dice__button"} hidden={!gameOver} onClick={reset}>
        Rejouer
      </button>
    </main>
  );
}
