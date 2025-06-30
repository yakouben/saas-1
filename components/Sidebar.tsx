'use client';

import { cn } from '@/lib/utils';
import { 
  LayoutDashboard,
  CreditCard,
  UserPlus,
  BookOpen,
  Calendar,
  Trophy,
  Bell,
  Clock,
  Home,
  Users,
  MessageSquare,
  Bookmark,
  Settings,
  LogOut,
  GraduationCap,
  Hash
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'spaces', label: 'Spaces', icon: Hash },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'members', label: 'Members', icon: Users },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
];

const learningItems = [
  { id: 'payment', label: 'Payment Info', icon: CreditCard },
  { id: 'registration', label: 'Registration', icon: UserPlus },
  { id: 'results', label: 'Results', icon: Trophy },
  { id: 'schedule', label: 'Schedule', icon: Clock },
  { id: 'notices', label: 'Notices', icon: Bell },
];

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  return (
    <div className="w-64 bg-gradient-to-b from-purple-600 to-purple-800 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-purple-500/30">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">EduConnect</h2>
            <p className="text-purple-200 text-sm">Learning Platform</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-8">
        {/* Main Navigation */}
        <div>
          <h3 className="text-purple-200 text-sm font-medium mb-4 uppercase tracking-wider">Main</h3>
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      "w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200",
                      activeSection === item.id
                        ? "bg-white text-purple-700 shadow-lg"
                        : "hover:bg-white/10 text-purple-100 hover:text-white"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Learning Section */}
        <div>
          <h3 className="text-purple-200 text-sm font-medium mb-4 uppercase tracking-wider">Learning</h3>
          <ul className="space-y-2">
            {learningItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      "w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200",
                      activeSection === item.id
                        ? "bg-white text-purple-700 shadow-lg"
                        : "hover:bg-white/10 text-purple-100 hover:text-white"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Bottom Actions */}
      <div className="p-6 border-t border-purple-500/30 space-y-2">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 text-purple-100 hover:text-white transition-all duration-200">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 text-purple-100 hover:text-white transition-all duration-200">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}