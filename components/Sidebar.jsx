// components/Sidebar.jsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Calculator, ClipboardList, Calendar, Heart, Brain,
  GraduationCap, MessageCircle, Target, Home, Sparkles
} from 'lucide-react';

const navitems = [
  { href: '/', icon: Home, label: 'Home Sweet Home', color: 'bg-lavender-100' },
  { href: '/gpa-calculator', icon: Calculator, label: 'GPA Genie', color: 'bg-mint-100' },
  { href: '/assignments', icon: ClipboardList, label: 'Task Garden', color: 'bg-peach-100' },
  { href: '/study-planner', icon: Calendar, label: 'SAT/AP Planner', color: 'bg-sky-100' },
  { href: '/wellness', icon: Heart, label: 'Wellness Corner', color: 'bg-rose-100' },
  { href: '/quiz-generator', icon: Brain, label: 'Quiz Factory', color: 'bg-lavender-100' },
  { href: '/scholarships', icon: GraduationCap, label: 'Scholarship Scouts', color: 'bg-mint-100' },
  { href: '/ai-tutor', icon: MessageCircle, label: 'Study Buddy AI', color: 'bg-peach-100' },
  { href: '/grade-calculator', icon: Target, label: 'Grade Goal Finder', color: 'bg-sky-100' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 glass-card rounded-none border-r border-white/50 p-4 hidden md:block z-50">
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="font-display text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          StudyBuddy
        </span>
      </div>
      
      <nav className="space-y-1">
        {navitems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${isActive ? `${item.color} shadow-sm` : 'hover:bg-white/50'}`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-purple-600' : 'text-gray-500'}`} />
              <span className={`text-sm font-medium ${isActive ? 'text-gray-800' : 'text-gray-600'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-4 right-4 p-4 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100">
        <p className="text-xs text-purple-700 font-medium">You're doing amazing!</p>
        <p className="text-xs text-purple-500 mt-1">Keep up the great work</p>
      </div>
    </aside>
  );
}
