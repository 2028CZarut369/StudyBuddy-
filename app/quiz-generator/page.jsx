'use client';
import React, { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Brain } from 'lucide-react';

const sampleQuestions = {
  'SAT Math': [
    { id: '1', question: 'If 3x + 7 = 22, what is the value of x?', options: ['3', '5', '7', '15'], correct: 1, explanation: 'Subtract 7 from both sides: 3x = 15. Divide by 3: x = 5.' }
  ],
  'AP Biology': [
    { id: '1', question: 'Which organelle is responsible for producing ATP?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi'], correct: 1, explanation: 'Mitochondria convert nutrients into energy via cellular respiration.' }
  ]
};

export default function QuizGenerator() {
  const [topic, setTopic] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = (selectedTopic) => {
    setTopic(selectedTopic);
    setQuestions(sampleQuestions[selectedTopic] || []);
    setQuizStarted(true);
    setCurrentQ(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  const handleAnswer = (idx) => {
    if (showResult) return;
    setSelectedAnswer(idx);
    setShowResult(true);
    if (idx === questions[currentQ].correct) setScore(score + 1);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </span>
          Quiz Factory 🎯
        </h1>
        <p className="text-gray-500 mt-2">Test your knowledge and level up!</p>
      </header>

      {!quizStarted ? (
        <Card color="lavender" className="space-y-4">
          <h2 className="font-display text-lg font-bold text-gray-800">Choose a Topic</h2>
          <div className="flex gap-4">
            <Button onClick={() => startQuiz('SAT Math')}>SAT Math</Button>
            <Button onClick={() => startQuiz('AP Biology')}>AP Biology</Button>
          </div>
        </Card>
      ) : (
        <div className="space-y-4">
          {questions.length > 0 && currentQ < questions.length ? (
            <Card color={showResult ? (selectedAnswer === questions[currentQ].correct ? 'mint' : 'rose') : 'lavender'}>
              <h3 className="text-lg font-medium mb-4">{questions[currentQ].question}</h3>
              <div className="space-y-2">
                {questions[currentQ].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full p-3 rounded-xl text-left border text-sm transition-all ${
                      selectedAnswer === idx ? 'bg-purple-100 border-purple-400' : 'bg-white/60 hover:bg-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {showResult && (
                <div className="mt-4 p-3 bg-white/80 rounded-xl text-xs text-gray-600">
                  <p className="font-bold mb-1">Explanation:</p>
                  <p>{questions[currentQ].explanation}</p>
                  <Button size="sm" className="mt-3" onClick={() => setQuizStarted(false)}>Finish Quiz</Button>
                </div>
              )}
            </Card>
          ) : (
            <Card color="mint" className="text-center">
              <p>No questions found for this topic.</p>
              <Button onClick={() => setQuizStarted(false)} className="mt-4">Back</Button>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
