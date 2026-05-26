'use client';
import React, { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Calendar, BookOpen, Target, Clock } from 'lucide-react';

const satTopics = [
  'Writing: Grammar & Punctuation', 'Writing: Sentence Structure', 'Math: Heart of Algebra', 'Math: Passport to Advanced Math'
];

export default function StudyPlanner() {
  const [plans, setPlans] = useState([]);
  const [selectedExam, setSelectedExam] = useState('');
  const [examDate, setExamDate] = useState('');
  const [dailyMinutes, setDailyMinutes] = useState(60);

  const createPlan = () => {
    if (!selectedExam || !examDate) return;
    const topics = satTopics.map(t => ({ name: t, completed: false }));
    setPlans([...plans, { id: Date.now().toString(), exam: selectedExam, examDate, dailyMinutes, topics }]);
  };

  const toggleTopic = (planId, topicName) => {
    setPlans(plans.map(p => {
      if (p.id === planId) {
        return {
          ...p,
          topics: p.topics.map(t => t.name === topicName ? { ...t, completed: !t.completed } : t)
        };
      }
      return p;
    }));
  };

  const getDaysUntil = (date) => {
    const diff = new Date(date).getTime() - new Date().getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </span>
          SAT & AP Study Planner 📅
        </h1>
        <p className="text-gray-500 mt-2">Conquer your exams with a personalized roadmap!</p>
      </header>

      <Card color="sky" className="mb-8">
        <h2 className="font-display text-lg font-bold text-gray-800 mb-4">Create a Study Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <select value={selectedExam} onChange={(e) => setSelectedExam(e.target.value)} className="input-cute">
            <option value="">Select Exam</option>
            <option value="SAT">SAT 📝</option>
            <option value="AP Biology">AP Biology 🧬</option>
          </select>
          <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} className="input-cute" />
          <select value={dailyMinutes} onChange={(e) => setDailyMinutes(Number(e.target.value))} className="input-cute">
            <option value={30}>30 min/day</option>
            <option value={60}>1 hour/day</option>
          </select>
        </div>
        <Button onClick={createPlan} className="w-full">Create Plan ✨</Button>
      </Card>

      <div className="space-y-6">
        {plans.map((plan) => {
          const daysLeft = getDaysUntil(plan.examDate);
          return (
            <Card key={plan.id} color="lavender">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-500" />
                  <div>
                    <h3 className="font-bold text-gray-800">{plan.exam}</h3>
                    <p className="text-xs text-gray-500">{plan.dailyMinutes} min/day</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-purple-600">{daysLeft} days left</p>
                </div>
              </div>
              <div className="space-y-2">
                {plan.topics.map((t) => (
                  <label key={t.name} className="flex items-center gap-2 text-sm text-gray-700 bg-white/50 p-2 rounded-lg cursor-pointer">
                    <input type="checkbox" checked={t.completed} onChange={() => toggleTopic(plan.id, t.name)} className="rounded text-purple-600" />
                    <span className={t.completed ? 'line-through opacity-60' : ''}>{t.name}</span>
                  </label>
                ))}
              </div>
            </Card>
          );
        })}
        {plans.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <Target className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No study plans yet. Create one above! 🎯</p>
          </div>
        )}
      </div>
    </div>
  );
}
