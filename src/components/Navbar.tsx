
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, Settings, User } from 'lucide-react';

import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={cn(
      "w-full px-6 h-16 flex items-center justify-between border-b backdrop-blur-md bg-background/80 sticky top-0 z-10",
      className
    )}>
      <div className="flex items-center">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-9 pl-9 pr-4 rounded-full bg-secondary/80 border-0 focus:ring-1 focus:ring-primary/20 focus-visible:outline-none text-sm placeholder:text-muted-foreground"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-5">
        <button className="relative h-9 w-9 rounded-full flex items-center justify-center bg-secondary/80 hover:bg-secondary transition-colors duration-200">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
        </button>
        
        <Link to="/settings" className="h-9 w-9 rounded-full flex items-center justify-center bg-secondary/80 hover:bg-secondary transition-colors duration-200">
          <Settings className="h-4 w-4 text-muted-foreground" />
        </Link>
        
        <button className="flex items-center space-x-2 h-9 px-1.5 rounded-full bg-secondary/80 hover:bg-secondary transition-colors duration-200">
          <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
            <User className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
        </button>
      </div>
    </nav>
  );
}
