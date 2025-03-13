
import React from 'react';
import { ArrowRight, HardDrive, Monitor, Server } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MetricsChart } from './MetricsChart';

interface ResourceItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  maxValue?: string;
  percentage: number;
  color?: string;
}

function ResourceItem({
  icon: Icon,
  label,
  value,
  maxValue,
  percentage,
  color = 'bg-primary',
}: ResourceItemProps) {
  return (
    <div className="flex items-center justify-between mb-3 last:mb-0">
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        
        <div>
          <p className="text-sm">{label}</p>
          <p className="text-xs text-muted-foreground">
            {value} {maxValue && <span>/ {maxValue}</span>}
          </p>
        </div>
      </div>
      
      <div className="w-20">
        <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
          <div 
            className={cn("h-full rounded-full", color)} 
            style={{ width: `${percentage}%` }} 
          />
        </div>
      </div>
    </div>
  );
}

// Mock data for CPU usage over time
const generateMetricData = (points: number, min: number, max: number) => {
  return Array.from({ length: points }).map((_, i) => ({
    time: `${i}h`,
    value: Math.floor(Math.random() * (max - min + 1)) + min,
  }));
};

const cpuData = generateMetricData(24, 10, 90);

interface ResourceMonitorProps {
  className?: string;
}

export function ResourceMonitor({ className }: ResourceMonitorProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-5 glass-card", className)}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-medium">Resource Monitor</h3>
        <button className="text-xs text-primary flex items-center hover:underline">
          View Details
          <ArrowRight className="h-3 w-3 ml-1" />
        </button>
      </div>
      
      <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-2">CPU Usage (24h)</p>
        <MetricsChart 
          data={cpuData} 
          height={80} 
          gradient={{
            from: 'hsl(var(--primary))',
            to: 'hsl(var(--primary) / 0.1)',
          }}
          stroke="hsl(var(--primary))"
        />
      </div>
      
      <div className="pt-4 border-t">
        <ResourceItem
          icon={Server}
          label="CPU"
          value="67%"
          percentage={67}
          color="bg-blue-500"
        />
        
        <ResourceItem
          icon={HardDrive}
          label="Memory"
          value="5.2 GB"
          maxValue="8 GB"
          percentage={65}
          color="bg-purple-500"
        />
        
        <ResourceItem
          icon={Monitor}
          label="Storage"
          value="128 GB"
          maxValue="256 GB"
          percentage={50}
          color="bg-emerald-500"
        />
      </div>
    </div>
  );
}
