
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Check, Search, Settings, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [notificationCount, setNotificationCount] = useState(3);
  const { toast } = useToast();

  const clearNotifications = () => {
    setNotificationCount(0);
    toast({
      title: "Notifications cleared",
      description: "All notifications have been marked as read.",
    });
  };

  const handleNotificationClick = (id: number) => {
    setNotificationCount(prev => Math.max(0, prev - 1));
    toast({
      title: "Notification read",
      description: `You viewed notification #${id}.`,
    });
  };

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative h-9 w-9 rounded-full flex items-center justify-center bg-secondary/80 hover:bg-secondary transition-colors duration-200">
              <Bell className="h-4 w-4 text-muted-foreground" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center font-medium">
                  {notificationCount}
                </span>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="flex items-center justify-between px-4 py-2">
              <h4 className="font-medium text-sm">Notifications</h4>
              {notificationCount > 0 && (
                <button 
                  onClick={clearNotifications} 
                  className="text-xs text-primary hover:underline flex items-center"
                >
                  <Check className="h-3 w-3 mr-1" /> Mark all as read
                </button>
              )}
            </div>
            <DropdownMenuSeparator />
            
            {notificationCount > 0 ? (
              <>
                <div className="max-h-80 overflow-y-auto">
                  {[...Array(notificationCount)].map((_, index) => (
                    <DropdownMenuItem key={index} onSelect={() => handleNotificationClick(index + 1)}>
                      <Alert className="mb-0 w-full">
                        <AlertTitle className="text-xs font-medium">System Alert</AlertTitle>
                        <AlertDescription className="text-xs">
                          {index === 0 && "CPU usage above 90% on production server."}
                          {index === 1 && "New deployment completed successfully."}
                          {index === 2 && "Security update available for your system."}
                        </AlertDescription>
                      </Alert>
                    </DropdownMenuItem>
                  ))}
                </div>
              </>
            ) : (
              <div className="px-4 py-3 text-sm text-center text-muted-foreground">
                No new notifications
              </div>
            )}
            
            <DropdownMenuSeparator />
            <div className="px-4 py-2">
              <Link to="/settings" className="text-xs text-primary hover:underline block text-center">
                View all notifications
              </Link>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        
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
