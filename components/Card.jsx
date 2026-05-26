// components/Card.jsx
import React from 'react';

const colorMap = {
  lavender: 'from-lavender-50 to-white border-lavender-200',
  mint: 'from-mint-50 to-white border-mint-200',
  peach: 'from-peach-50 to-white border-peach-200',
  sky: 'from-sky-50 to-white border-sky-200',
  rose: 'from-rose-50 to-white border-rose-200',
};

export default function Card({ children, className = "", color = 'lavender' }) {
  return (
    <div className={`bg-gradient-to-br ${colorMap[color]} border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {children}
    </div>
  );
}
