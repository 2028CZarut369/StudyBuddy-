// app/page.jsx
import Card from '@/components/Card';
import { TrendingUp, CheckCircle, Calendar, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
          Welcome back, Superstar!
        </h1>
        <p className="text-gray-500 mt-2">Here's your academic snapshot for today</p>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card color="mint" className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">3.85</p>
            <p className="text-sm text-gray-500">Current GPA</p>
          </div>
        </Card>

        <Card color="peach" className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">5</p>
            <p className="text-sm text-gray-500">Tasks Due This Week</p>
          </div>
        </Card>

        <Card color="sky" className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">42 days</p>
            <p className="text-sm text-gray-500">Until SAT</p>
          </div>
        </Card>

        <Card color="rose" className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
            <Heart className="w-6 h-6 text-rose-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">Great</p>
            <p className="text-sm text-gray-500">Today's Mood</p>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card color="lavender">
          <h2 className="font-display text-xl font-bold text-gray-800 mb-4">
            Upcoming Tasks
          </h2>
          <div className="space-y-3">
            {[
              { task: 'AP Bio Lab Report', due: 'Tomorrow', priority: 'high' },
              { task: 'Calc Homework Ch. 7', due: 'Wed', priority: 'medium' },
              { task: 'English Essay Draft', due: 'Friday', priority: 'low' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white/60 rounded-xl">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded-full accent-purple-500" />
                  <span className="text-gray-700">{item.task}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.priority === 'high' ? 'bg-red-100 text-red-600' :
                  item.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-600'
                }`}>
                  {item.due}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card color="mint">
          <h2 className="font-display text-xl font-bold text-gray-800 mb-4">
            Today's Study Goals
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">SAT Math Practice</span>
                <span className="text-green-600 font-medium">75%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">AP History Review</span>
                <span className="text-purple-600 font-medium">40%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-2/5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
