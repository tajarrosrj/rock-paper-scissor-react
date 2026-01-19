import { useState } from 'react';

export default function App() {
  const choices = ['Rock', 'Paper', 'Scissors'];

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function determineWinner(player, computer) {
    if (player === computer) return "It's a Tie!";

    if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      setPlayerScore(prev => prev + 1);
      return 'You Win!';
    }

    setComputerScore(prev => prev + 1);
    return 'You Lose!';
  }

  function handlePlayerChoice(choice) {
    const computerPick =
      choices[Math.floor(Math.random() * choices.length)];

    setPlayerChoice(choice);
    setComputerChoice(computerPick);
    setResult(determineWinner(choice, computerPick));
  }

  function resetGame() {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult('');
    setPlayerScore(0);
    setComputerScore(0);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Rock Paper Scissors
        </h1>

        {/* Scores */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-sm text-slate-600">Your Score</p>
            <p className="text-3xl font-bold text-blue-600">
              {playerScore}
            </p>
          </div>

          <div className="bg-red-50 rounded-lg p-4 text-center">
            <p className="text-sm text-slate-600">Computer Score</p>
            <p className="text-3xl font-bold text-red-600">
              {computerScore}
            </p>
          </div>
        </div>

        {/* Choices */}
        <p className="text-center text-slate-600 mb-3">
          Choose your move
        </p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {choices.map(choice => (
            <button
              key={choice}
              onClick={() => handlePlayerChoice(choice)}
              className="bg-slate-900 text-white py-2 rounded-lg font-semibold hover:bg-slate-700 transition"
            >
              {choice}
            </button>
          ))}
        </div>

        {/* Result */}
        {playerChoice && computerChoice && (
          <div className="bg-slate-50 rounded-lg p-4 mb-4 text-center">
            <p className="text-sm text-slate-600">
              You chose <span className="font-bold">{playerChoice}</span>
            </p>
            <p className="text-sm text-slate-600 mb-2">
              Computer chose{' '}
              <span className="font-bold">{computerChoice}</span>
            </p>

            <p
              className={`text-xl font-bold ${
                result === 'You Win!'
                  ? 'text-green-600'
                  : result === 'You Lose!'
                  ? 'text-red-600'
                  : 'text-yellow-600'
              }`}
            >
              {result}
            </p>
          </div>
        )}

        {/* Reset */}
        <button
          onClick={resetGame}
          className="w-full bg-slate-200 py-2 rounded-lg font-semibold hover:bg-slate-300 transition"
        >
          Reset Game
        </button>
      </div>
    </main>
  );
}
