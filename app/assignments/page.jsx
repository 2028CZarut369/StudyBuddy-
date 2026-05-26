// app/assignments/page.jsx
'use client';
import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Plus, Calendar, Flag, CheckCircle2, Circle, Leaf } from 'lucide-react';

const priorityColors = {
  low: 'bg-green-100 text-green-700 border-green-200',
  medium: 'bg-yellow-100 text-yellow-700 border-yellow-200'
};

const typeEmojis = {
  homework: '📝',
  quiz: '⏱️',
  test: '📚',
  project: '🎨',
  essay: '✍️'
};

export default function Assignments() {
  const [assignments, setAssignments] = useState([
    { id: '1', title: 'Chapter 5 Problems', course: 'AP Calculus', dueDate: '2025-01-20', priority: 'high', completed: false, type: 'homework' },
    { id: '2', title: 'Lab Report: Mitosis', course: 'AP Biology', dueDate: '2025-01-21', priority: 'medium', completed: false, type: 'project' },
    { id: '3', title: 'Vocabulary Quiz', course: 'Spanish III', dueDate: '2025-01-22', priority: 'low', completed: true, type: 'quiz' },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newAssignment, setNewAssignment] = useState({
    priority: 'medium',
    type: 'homework',
    completed: false,
  });

  const toggleComplete = (id) => {
    setAssignments(assignments.map(a =>
      a.id === id ? { ...a, completed: !a.completed } : a
    ));
  };

  const completedCount = assignments.filter(a => a.completed).length;

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </span>
          Task Garden 🌱
        </h1>
        <p className="text-gray-500 mt-2">Watch your productivity bloom!</p>
      </header>

      {/* Progress Card */}
      <Card color="peach" className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium text-gray-700">This Week's Harvest</span>
          <span className="text-sm text-gray-500">{completedCount}/{assignments.length} tasks</span>
        </div>
        <div className="h-4 bg-white/60 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500" 
            style={{ width: `${assignments.length ? (completedCount / assignments.length) * 100 : 0}%` }}
          />
        </div>
      </Card>

      {/* Task List */}
      <div className="space-y-3">
        {assignments.map((assignment) => (
          <div 
            key={assignment.id} 
            className={`glass-card p-4 flex items-center gap-4 transition-all duration-300 ${assignment.completed ? 'opacity-60' : ''}`}
          >
            <button onClick={() => toggleComplete(assignment.id)} className="flex-shrink-0">
              {assignment.completed ? (
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              ) : (
                <Circle className="w-6 h-6 text-gray-300 hover:text-purple-400 transition-colors" />
              )}
            </button>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{typeEmojis[assignment.type]}</span>
                <span className="font-medium text-gray-800">{assignment.title}</span>
                <span className="text-xs text-gray-400">({assignment.course})</span>
              </div>
              <div className="text-xs text-gray-500">
                Due: {new Date(assignment.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
