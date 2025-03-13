
import React from 'react';
import { ArrowDown, ArrowUp, CheckCircle, Clock, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export type StatusType = 'healthy' | 'warning' | 'critical' | 'offline' | 'maintenance';

interface StatusProps {
  status: StatusType;
  className?: string;
  showText?: boolean;
}

export function Status({ status, className, showText = false }: StatusProps) {
  const statusConfig = {
    healthy: {
      color: 'bg-emerald-500',
      textColor: 'text-emerald-500',
      icon: CheckCircle,
      label: 'Healthy',
    },
    warning: {
      color: 'bg-amber-500',
      textColor: 'text-amber-500',
      icon: Clock,
      label: 'Warning',
    },
    critical: {
      color: 'bg-red-500',
      textColor: 'text-red-500',
      icon: XCircle,
      label: 'Critical',
    },
    offline: {
      color: 'bg-gray-500',
      textColor: 'text-gray-500',
      icon: XCircle,
      label: 'Offline',
    },
    maintenance: {
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
      icon: Clock,
      label: 'Maintenance',
    },
  };

  const { color, textColor, icon: Icon, label } = statusConfig[status];

  return (
    <div className={cn("flex items-center space-x-1.5", className)}>
      <span className={cn(
        "h-2 w-2 rounded-full", 
        color,
        status === 'healthy' && "animate-pulse-slow"
      )} />
      {showText && (
        <span className={cn("text-xs font-medium", textColor)}>
          {label}
        </span>
      )}
    </div>
  );
}

interface StatusCardProps {
  className?: string;
  title: string;
  status: StatusType;
  metric?: string;
  trend?: {
    type: 'up' | 'down' | 'neutral';
    value: string;
  };
}

export function StatusCard({ 
  className, 
  title, 
  status, 
  metric, 
  trend 
}: StatusCardProps) {
  return (
    <div className={cn(
      "rounded-lg border bg-card p-4 flex flex-col glass-card",
      className
    )}>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{title}</p>
        <Status status={status} />
      </div>
      
      {metric && (
        <div className="mt-2">
          <p className="text-2xl font-semibold">{metric}</p>
        </div>
      )}
      
      {trend && (
        <div className="mt-1 flex items-center">
          {trend.type === 'up' && (
            <ArrowUp className="h-3 w-3 text-emerald-500 mr-1" />
          )}
          {trend.type === 'down' && (
            <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
          )}
          <span className={cn(
            "text-xs",
            trend.type === 'up' && "text-emerald-500",
            trend.type === 'down' && "text-red-500",
            trend.type === 'neutral' && "text-muted-foreground"
          )}>
            {trend.value}
          </span>
        </div>
      )}
    </div>
  );
}
