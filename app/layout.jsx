// app/layout.jsx
import React from 'react';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'StudyBuddy',
  description: 'Your cute academic companion',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8 ml-0 md:ml-64">
          {children}
        </main>
      </body>
    </html>
  );
}
