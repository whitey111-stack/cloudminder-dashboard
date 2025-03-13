
import React from 'react';
import { Activity, AlertCircle, ArrowRight, Clock, Plus } from 'lucide-react';
import { DashboardCard, DashboardCardHeader, DashboardCardContent } from '@/components/Dashboard/DashboardCard';
import { MetricsChart } from '@/components/Dashboard/MetricsChart';
import { Status } from '@/components/Dashboard/StatusCard';
import { cn } from '@/lib/utils';

// Mock data for metrics
const generateTimeData = (hours = 24, min = 10, max = 90, trend = 'stable') => {
  return Array.from({ length: hours }).map((_, i) => {
    let value;
    if (trend === 'upward') {
      value = Math.floor((min + (max - min) * (i / hours)) + (Math.random() * 10) - 5);
    } else if (trend === 'downward') {
      value = Math.floor((max - (max - min) * (i / hours)) + (Math.random() * 10) - 5);
    } else {
      value = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return {
      time: `${i}h`,
      value: Math.max(min, Math.min(max, value)),
    };
  });
};

const cpuData = generateTimeData(24, 15, 85, 'upward');
const memoryData = generateTimeData(24, 30, 70, 'stable');
const networkData = generateTimeData(24, 5, 60, 'downward');
const requestsData = generateTimeData(24, 100, 500, 'upward');

const Monitoring = () => {
  return (
    <div className="space-y-6 pb-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-semibold tracking-tight">Monitoring</h1>
          <p className="text-muted-foreground">Performance metrics and system health.</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <select className="h-9 px-3 rounded-lg bg-secondary/80 border-0 focus:ring-1 focus:ring-primary/20 focus-visible:outline-none text-sm">
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Custom range</option>
          </select>
          
          <button className="h-9 px-4 rounded-lg bg-primary text-primary-foreground flex items-center space-x-2 hover:bg-primary/90 transition-colors">
            <Plus className="h-4 w-4" />
            <span className="text-sm font-medium">Add Widget</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard className="animate-slide-up animate-once">
          <DashboardCardHeader 
            title="CPU Usage" 
            description="Average across all services" 
            icon={<Activity className="h-4 w-4 text-primary" />}
          />
          <DashboardCardContent>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-semibold">68%</span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">+5.2%</span>
                </div>
                <Status status="healthy" showText />
              </div>
            </div>
            <MetricsChart 
              data={cpuData} 
              height={200}
              showAxis
              showGrid
              gradient={{
                from: '#3b82f6',
                to: '#3b82f620',
              }}
              stroke="#3b82f6"
            />
          </DashboardCardContent>
        </DashboardCard>
        
        <DashboardCard className="animate-slide-up animate-once animate-delay-100">
          <DashboardCardHeader 
            title="Memory Usage" 
            description="Average across all services" 
            icon={<Activity className="h-4 w-4 text-primary" />}
          />
          <DashboardCardContent>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-semibold">42%</span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">Stable</span>
                </div>
                <Status status="healthy" showText />
              </div>
            </div>
            <MetricsChart 
              data={memoryData} 
              height={200}
              showAxis
              showGrid
              gradient={{
                from: '#8b5cf6',
                to: '#8b5cf620',
              }}
              stroke="#8b5cf6"
            />
          </DashboardCardContent>
        </DashboardCard>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard className="animate-slide-up animate-once animate-delay-200">
          <DashboardCardHeader 
            title="Network Traffic" 
            description="Incoming and outgoing" 
            icon={<Activity className="h-4 w-4 text-primary" />}
          />
          <DashboardCardContent>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-semibold">24.6 MB/s</span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-amber-100 text-amber-700">-3.8%</span>
                </div>
                <Status status="healthy" showText />
              </div>
            </div>
            <MetricsChart 
              data={networkData} 
              height={200}
              showAxis
              showGrid
              gradient={{
                from: '#ec4899',
                to: '#ec489920',
              }}
              stroke="#ec4899"
            />
          </DashboardCardContent>
        </DashboardCard>
        
        <DashboardCard className="animate-slide-up animate-once animate-delay-300">
          <DashboardCardHeader 
            title="API Requests" 
            description="Total requests per minute" 
            icon={<Activity className="h-4 w-4 text-primary" />}
          />
          <DashboardCardContent>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-semibold">342</span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">+12%</span>
                </div>
                <Status status="healthy" showText />
              </div>
            </div>
            <MetricsChart 
              data={requestsData} 
              height={200}
              showAxis
              showGrid
              gradient={{
                from: '#10b981',
                to: '#10b98120',
              }}
              stroke="#10b981"
            />
          </DashboardCardContent>
        </DashboardCard>
      </div>
      
      <DashboardCard className="animate-slide-up animate-once animate-delay-400">
        <DashboardCardHeader 
          title="Recent Alerts" 
          icon={<AlertCircle className="h-4 w-4 text-primary" />}
          action={
            <button className="text-xs text-primary flex items-center hover:underline">
              View All
              <ArrowRight className="h-3 w-3 ml-1" />
            </button>
          }
        />
        <DashboardCardContent>
          <div className="space-y-1">
            {[
              { 
                title: "High CPU Usage", 
                service: "Authentication Service", 
                time: "32 minutes ago", 
                status: "warning" 
              },
              { 
                title: "Memory Leak Detected", 
                service: "Analytics Service", 
                time: "1 hour ago", 
                status: "critical" 
              },
              { 
                title: "API Rate Limit Warning", 
                service: "Web Application", 
                time: "3 hours ago", 
                status: "warning" 
              },
              { 
                title: "Database Connection Errors", 
                service: "Data Processing", 
                time: "5 hours ago", 
                status: "resolved" 
              },
            ].map((alert, i) => (
              <div key={i} className={cn(
                "p-3 rounded-lg border flex items-center justify-between",
                alert.status === "warning" ? "bg-amber-50 border-amber-200" : 
                alert.status === "critical" ? "bg-red-50 border-red-200" : 
                "bg-emerald-50 border-emerald-200"
              )}>
                <div className="flex items-center space-x-3">
                  {alert.status === "warning" && (
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                  )}
                  {alert.status === "critical" && (
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  )}
                  {alert.status === "resolved" && (
                    <AlertCircle className="h-4 w-4 text-emerald-500" />
                  )}
                  
                  <div>
                    <p className={cn(
                      "text-sm font-medium",
                      alert.status === "warning" ? "text-amber-700" : 
                      alert.status === "critical" ? "text-red-700" : 
                      "text-emerald-700"
                    )}>
                      {alert.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {alert.service} • {alert.time}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className={cn(
                    "text-xs px-2 py-1 rounded-full capitalize",
                    alert.status === "warning" ? "bg-amber-100 text-amber-700" : 
                    alert.status === "critical" ? "bg-red-100 text-red-700" : 
                    "bg-emerald-100 text-emerald-700"
                  )}>
                    {alert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </DashboardCardContent>
      </DashboardCard>
    </div>
  );
};

export default Monitoring;
