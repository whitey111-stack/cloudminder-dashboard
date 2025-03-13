
import React from 'react';
import { cn } from '@/lib/utils';
import { getAnimationClass } from '@/lib/motion';

interface DashboardCardProps {
  className?: string;
  children: React.ReactNode;
  animationDelay?: number;
}

export function DashboardCard({ 
  className, 
  children, 
  animationDelay = 0 
}: DashboardCardProps) {
  return (
    <div className={cn(
      "rounded-lg border bg-card p-5 shadow-sm glass-card",
      getAnimationClass('scale', animationDelay),
      className
    )}>
      {children}
    </div>
  );
}

interface DashboardCardHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export function DashboardCardHeader({ 
  title, 
  description, 
  icon, 
  action 
}: DashboardCardHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        {icon && (
          <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-sm font-medium">{title}</h3>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      {action && (
        <div>{action}</div>
      )}
    </div>
  );
}

export function DashboardCardContent({ 
  className, 
  children 
}: { 
  className?: string; 
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function DashboardCardFooter({ 
  className, 
  children 
}: { 
  className?: string; 
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mt-4 flex items-center space-x-2", className)}>
      {children}
    </div>
  );
}
