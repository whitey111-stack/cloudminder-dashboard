
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  Cloud, 
  Activity, 
  Settings, 
  Server
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { getAnimationClass } from '@/lib/motion';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  
  const navigationItems = [
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      path: '/',
      active: location.pathname === '/'
    },
    { 
      icon: Cloud, 
      label: 'Services', 
      path: '/services',
      active: location.pathname === '/services'
    },
    { 
      icon: Activity, 
      label: 'Monitoring', 
      path: '/monitoring',
      active: location.pathname === '/monitoring'
    },
    { 
      icon: Server, 
      label: 'Resources', 
      path: '/resources',
      active: location.pathname === '/resources'
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      path: '/settings',
      active: location.pathname === '/settings'
    },
  ];
  
  return (
    <aside className={cn(
      "h-screen bg-sidebar border-r flex flex-col transition-all duration-300 ease-in-out",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      <div className="h-16 border-b flex items-center justify-between px-4">
        <Link 
          to="/" 
          className={cn(
            "flex items-center space-x-2 font-medium transition-opacity", 
            collapsed ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">CM</span>
          </div>
          <span className="font-display font-semibold">CloudMinder</span>
        </Link>
        
        <button 
          onClick={toggleSidebar}
          className="h-6 w-6 rounded flex items-center justify-center hover:bg-secondary/80 transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-3">
        <nav className="space-y-1.5">
          {navigationItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center rounded-lg py-2 text-sm transition-all duration-150 ease-in-out",
                collapsed ? "justify-center px-2" : "px-3 space-x-3",
                item.active 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent/60",
                getAnimationClass('slide-up', (index + 1) * 100)
              )}
            >
              <item.icon className={cn(
                "transition-colors",
                collapsed ? "h-5 w-5" : "h-4.5 w-4.5",
                item.active ? "text-primary" : "text-muted-foreground"
              )} />
              
              {!collapsed && (
                <span>{item.label}</span>
              )}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className={cn(
        "m-3 p-4 rounded-lg border border-border/50 glass-card transition-all duration-300",
        collapsed ? "opacity-0 pointer-events-none h-0 p-0 m-0 border-0" : ""
      )}>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Server className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-medium">Resources</p>
              <p className="text-xs text-muted-foreground">70% Available</p>
            </div>
          </div>
          
          <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
            <div className="h-full w-[30%] bg-primary rounded-full" />
          </div>
        </div>
      </div>
      
    </aside>
  );
}
