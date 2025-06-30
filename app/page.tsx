'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { StatsCards } from '@/components/StatsCards';
import { CoursesSection } from '@/components/CoursesSection';
import { SocialFeed } from '@/components/SocialFeed';
import { CalendarWidget } from '@/components/CalendarWidget';
import { InstructorsSection } from '@/components/InstructorsSection';
import { NoticesSection } from '@/components/NoticesSection';
import { SpacesSection } from '@/components/SpacesSection';
import { CoursesPage } from '@/components/CoursesPage';
import { MembersPage } from '@/components/MembersPage';
import { MessagesPage } from '@/components/MessagesPage';
import { RegistrationPage } from '@/components/RegistrationPage';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'spaces':
        return (
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
              <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-2">Community Spaces 🏠</h1>
                <p className="text-purple-100">Create dedicated spaces for your community members to connect and collaborate</p>
              </div>
            </div>
            <SpacesSection />
          </div>
        );
      case 'courses':
        return (
          <div className="max-w-7xl mx-auto">
            <CoursesPage />
          </div>
        );
      case 'members':
        return (
          <div className="max-w-7xl mx-auto">
            <MembersPage />
          </div>
        );
      case 'messages':
        return (
          <div className="max-w-7xl mx-auto">
            <MessagesPage />
          </div>
        );
      case 'registration':
        return (
          <div className="max-w-7xl mx-auto">
            <RegistrationPage />
          </div>
        );
      default:
        return (
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-purple-200 mb-2">September 4, 2023</p>
                  <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
                  <p className="text-purple-100">Continue your learning journey and connect with the community</p>
                </div>
                <div className="hidden md:block">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🎓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <StatsCards />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="xl:col-span-2 space-y-6">
                <CoursesSection />
                <SocialFeed />
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <CalendarWidget />
                <InstructorsSection />
                <NoticesSection />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}