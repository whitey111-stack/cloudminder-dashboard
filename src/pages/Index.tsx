
import React from 'react';
import { Activity, ArrowRight, Cloud, Database, Shield } from 'lucide-react';
import { 
  DashboardCard,
  DashboardCardHeader,
  DashboardCardContent,
  DashboardCardFooter
} from '@/components/Dashboard/DashboardCard';
import { StatusCard } from '@/components/Dashboard/StatusCard';
import { ServiceCard } from '@/components/Dashboard/ServiceCard';
import { ResourceMonitor } from '@/components/Dashboard/ResourceMonitor';
import { MetricsChart } from '@/components/Dashboard/MetricsChart';

// Mock data for usage metrics
const usageData = Array.from({ length: 12 }).map((_, i) => ({
  time: `${i * 2}:00`,
  value: Math.floor(Math.random() * 60) + 20,
}));

const Index = () => {
  return (
    <div className="space-y-6 pb-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-display font-semibold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your cloud management dashboard.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatusCard 
          title="Total Services" 
          status="healthy" 
          metric="24" 
          trend={{ type: 'up', value: '3 new today' }}
          className="animate-slide-up animate-once"
        />
        
        <StatusCard 
          title="System Health" 
          status="healthy" 
          metric="98.3%" 
          trend={{ type: 'up', value: '0.5% from yesterday' }}
          className="animate-slide-up animate-once animate-delay-100"
        />
        
        <StatusCard 
          title="Active Alerts" 
          status="warning" 
          metric="3" 
          trend={{ type: 'down', value: '2 resolved today' }}
          className="animate-slide-up animate-once animate-delay-200"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DashboardCard>
            <DashboardCardHeader 
              title="Cloud Service Usage" 
              description="Last 24 hours" 
              icon={<Cloud className="h-4 w-4 text-primary" />}
              action={
                <button className="text-xs text-primary flex items-center hover:underline">
                  View Details
                  <ArrowRight className="h-3 w-3 ml-1" />
                </button>
              }
            />
            <DashboardCardContent>
              <MetricsChart 
                data={usageData} 
                height={200} 
                showAxis 
                showGrid
              />
            </DashboardCardContent>
          </DashboardCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ServiceCard 
              name="Web Application" 
              provider="aws" 
              status="healthy" 
              region="us-west-2" 
              resourceCount={12}
              lastUpdated="2 hours ago"
              className="animate-scale-in animate-once"
            />
            
            <ServiceCard 
              name="Database Cluster" 
              provider="gcp" 
              status="healthy" 
              region="us-central1" 
              resourceCount={8}
              lastUpdated="30 minutes ago"
              className="animate-scale-in animate-once animate-delay-100"
            />
            
            <ServiceCard 
              name="Authentication Service" 
              provider="azure" 
              status="warning" 
              region="eastus" 
              resourceCount={5}
              lastUpdated="1 hour ago"
              className="animate-scale-in animate-once animate-delay-200"
            />
            
            <ServiceCard 
              name="Container Cluster" 
              provider="kubernetes" 
              status="healthy" 
              resourceCount={18}
              lastUpdated="10 minutes ago"
              className="animate-scale-in animate-once animate-delay-300"
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <ResourceMonitor />
          
          <DashboardCard className="h-[calc(100%-272px)]">
            <DashboardCardHeader 
              title="Recent Deployments" 
              icon={<Activity className="h-4 w-4 text-primary" />}
            />
            <DashboardCardContent>
              <div className="space-y-4">
                {[
                  { name: "API Gateway", time: "10:32 AM", status: "success" },
                  { name: "Database Migration", time: "9:15 AM", status: "success" },
                  { name: "Frontend v2.1.3", time: "Yesterday", status: "failed" }
                ].map((deployment) => (
                  <div key={deployment.name} className="flex items-center justify-between p-2 rounded-md hover:bg-secondary/50 transition-colors">
                    <div>
                      <p className="text-sm font-medium">{deployment.name}</p>
                      <p className="text-xs text-muted-foreground">{deployment.time}</p>
                    </div>
                    <div className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      deployment.status === "success" 
                        ? "bg-emerald-100 text-emerald-700" 
                        : "bg-red-100 text-red-700"
                    )}>
                      {deployment.status === "success" ? "Success" : "Failed"}
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCardContent>
            <DashboardCardFooter>
              <button className="text-xs text-primary flex items-center hover:underline mt-2">
                View All Deployments
                <ArrowRight className="h-3 w-3 ml-1" />
              </button>
            </DashboardCardFooter>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default Index;

import { cn } from '@/lib/utils';
