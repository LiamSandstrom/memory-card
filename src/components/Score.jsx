export default function Score({ score, highScore }) {
  return (
    <div className="score-wrapper">
      <h2>score: {score}</h2>
      <h2>High Score: {highScore}</h2>
    </div>
  );
}
