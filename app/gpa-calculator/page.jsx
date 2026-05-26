// app/gpa-calculator/page.jsx
'use client';
import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Plus, Trash2, Calculator } from 'lucide-react';

const gradePoints = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'D-': 0.7,
  'F': 0.0,
};

export default function GPACalculator() {
  const [courses, setCourses] = useState([
    { id: '1', name: '', grade: 'A', credits: 1, isAP: false, isHonors: false }
  ]);

  const addCourse = () => {
    setCourses([
      ...courses,
      { id: Date.now().toString(), name: '', grade: 'A', credits: 1, isAP: false, isHonors: false },
    ]);
  };

  const removeCourse = (id) => {
    if (courses.length > 1) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  const updateCourse = (id, field, value) => {
    setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const calculateGPA = (weighted) => {
    let totalPoints = 0;
    let totalCredits = 0;
    courses.forEach(course => {
      if (course.grade && course.credits > 0) {
        let points = gradePoints[course.grade] || 0;
        if (weighted) {
          if (course.isAP) points += 1.0;
          else if (course.isHonors) points += 0.5;
        }
        totalPoints += points * course.credits;
        totalCredits += course.credits;
      }
    });
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(3) : '0.000';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-gray-800 flex items-center gap-3">
          <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
            <Calculator className="w-6 h-6 text-white" />
          </span>
          GPA Genie
        </h1>
        <p className="text-gray-500 mt-2">Let's crunch those numbers magic style </p>
      </header>

      <Card color="mint" className="mb-6">
        <div className="space-y-4">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-medium text-gray-500 px-2">
            <div className="col-span-4">Course Name</div>
            <div className="col-span-2">Grade</div>
            <div className="col-span-2">Credits</div>
            <div className="col-span-1 text-center">AP</div>
            <div className="col-span-2 text-center">Honors</div>
            <div className="col-span-1"></div>
          </div>

          {/* Course Rows */}
          {courses.map((course, index) => (
            <div key={course.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-3 bg-white/60 rounded-xl items-center">
              <input
                type="text"
                placeholder={`Course ${index + 1}`}
                value={course.name}
                onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                className="input-cute col-span-1 md:col-span-4"
              />
              
              {/* Optional grade/credit picking controls could hook up here */}

              <label className="flex items-center justify-center col-span-1 md:col-span-1">
                <input
                  type="checkbox"
                  checked={course.isAP}
                  onChange={(e) => updateCourse(course.id, 'isAP', e.target.checked)}
                  className="w-5 h-5 rounded accent-purple-500"
                />
              </label>

              <label className="flex items-center justify-center col-span-1 md:col-span-2">
                <input
                  type="checkbox"
                  checked={course.isHonors}
                  onChange={(e) => updateCourse(course.id, 'isHonors', e.target.checked)}
                  className="w-5 h-5 rounded accent-blue-500"
                />
              </label>

              <button
                onClick={() => removeCourse(course.id)}
                className="col-span-1 md:col-span-1 p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5 mx-auto" />
              </button>
            </div>
          ))}
        </div>
      </Card>

      <Card color="sky" className="text-center">
        <p className="text-sm text-gray-500 mb-2">Weighted GPA</p>
        <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          {calculateGPA(true)}
        </p>
        <p className="text-xs text-gray-400 mt-2">AP +1.0 · Honors +0.5</p>
      </Card>
    </div>
  );
}
