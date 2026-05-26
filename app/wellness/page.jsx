'use client';
import React, { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Heart, Smile, Meh, Frown, CloudRain, Sun, Zap, Moon, Activity } from 'lucide-react';

const moodLabels = ['Struggling', 'Low', 'Okay', 'Good', 'Great'];
const moodEmojis = ['😭', '😔', '😐', '🙂', '🥰'];

const activities = [
  { id: 'exercise', label: '🏃 Exercise', icon: Activity },
  { id: 'nature', label: '🌳 Nature', icon: Sun },
  { id: 'friends', label: '👥 Friends', icon: Smile },
  { id: 'rest', label: '😴 Rest', icon: Moon },
  { id: 'mindfulness', label: '🧘 Mindfulness', icon: Heart },
];

export default function Wellness() {
  const [todaysMood, setTodaysMood] = useState(null);
  const [energy, setEnergy] = useState(3);
  const [sleep, setSleep] = useState(7);
  const [stress, setStress] = useState(3);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [notes, setNotes] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleActivity = (id) => {
    setSelectedActivities(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </span>
          Wellness Corner 💖
        </h1>
        <p className="text-gray-500 mt-2">Taking care of you, one check-in at a time</p>
      </header>

      {!isCompleted ? (
        <Card color="lavender" className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-3">How is your mood today?</label>
            <div className="flex gap-2">
              {moodEmojis.map((emoji, idx) => (
                <button
                  key={idx}
                  onClick={() => setTodaysMood(idx)}
                  className={`flex-1 py-4 rounded-xl text-2xl transition-all ${
                    todaysMood === idx ? 'bg-purple-100 ring-2 ring-purple-400' : 'bg-white/60 hover:bg-white'
                  }`}
                >
                  {emoji}
                  <p className="text-xs text-gray-500 mt-1">{moodLabels[idx]}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2"><Zap className="w-4 h-4" /> Energy Level ({energy})</label>
              <input type="range" min="1" max="5" value={energy} onChange={(e) => setEnergy(Number(e.target.value))} className="w-full accent-purple-500" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">💤 Sleep Hours ({sleep}h)</label>
              <input type="range" min="0" max="12" value={sleep} onChange={(e) => setSleep(Number(e.target.value))} className="w-full accent-blue-500" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2"><CloudRain className="w-4 h-4" /> Stress Level ({stress})</label>
              <input type="range" min="1" max="5" value={stress} onChange={(e) => setStress(Number(e.target.value))} className="w-full accent-rose-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">What have you been up to?</label>
            <div className="flex flex-wrap gap-2">
              {activities.map(act => (
                <button
                  key={act.id}
                  onClick={() => toggleActivity(act.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedActivities.includes(act.id) ? 'bg-purple-500 text-white' : 'bg-white/60 text-gray-600 hover:bg-white'
                  }`}
                >
                  {act.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Anything on your mind?</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Write freely here..." className="input-cute min-h-[100px] resize-none" />
          </div>

          <Button onClick={() => setIsCompleted(true)} disabled={todaysMood === null} className="w-full">Save Check-In 💝</Button>
        </Card>
      ) : (
        <Card color="mint" className="text-center py-8">
          <p className="text-3xl mb-2">✅</p>
          <p className="font-medium text-gray-700">Today's check-in complete!</p>
          <p className="text-sm text-gray-500 mt-1">Remember to be kind to yourself today.</p>
          <Button variant="secondary" className="mt-4" onClick={() => setIsCompleted(false)}>Check in again</Button>
        </Card>
      )}
    </div>
  );
}
