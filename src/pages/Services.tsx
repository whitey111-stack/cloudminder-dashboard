
import React from 'react';
import { Cloud, Database, Server, ArrowRight, Plus, Search } from 'lucide-react';
import { DashboardCard, DashboardCardHeader } from '@/components/Dashboard/DashboardCard';
import { ServiceCard } from '@/components/Dashboard/ServiceCard';

const Services = () => {
  const serviceGroups = [
    {
      name: "Cloud Services",
      icon: Cloud,
      services: [
        {
          name: "Web Application",
          provider: "aws",
          status: "healthy",
          region: "us-west-2",
          resourceCount: 12,
          lastUpdated: "2 hours ago"
        },
        {
          name: "Authentication Service",
          provider: "azure",
          status: "warning",
          region: "eastus",
          resourceCount: 5,
          lastUpdated: "1 hour ago"
        },
        {
          name: "Content Delivery",
          provider: "aws",
          status: "healthy",
          region: "global",
          resourceCount: 3,
          lastUpdated: "30 minutes ago"
        },
        {
          name: "Machine Learning",
          provider: "gcp",
          status: "healthy",
          region: "us-central1",
          resourceCount: 8,
          lastUpdated: "15 minutes ago"
        }
      ]
    },
    {
      name: "Containers",
      icon: Server,
      services: [
        {
          name: "Container Cluster",
          provider: "kubernetes",
          status: "healthy",
          resourceCount: 18,
          lastUpdated: "10 minutes ago"
        },
        {
          name: "Service Mesh",
          provider: "kubernetes",
          status: "healthy",
          resourceCount: 6,
          lastUpdated: "3 hours ago"
        },
        {
          name: "CI/CD Pipeline",
          provider: "docker",
          status: "healthy",
          resourceCount: 4,
          lastUpdated: "1 day ago"
        }
      ]
    },
    {
      name: "Databases",
      icon: Database,
      services: [
        {
          name: "Primary Database",
          provider: "aws",
          status: "healthy",
          region: "us-west-2",
          resourceCount: 1,
          lastUpdated: "45 minutes ago"
        },
        {
          name: "Analytics Database",
          provider: "gcp",
          status: "healthy",
          region: "us-central1",
          resourceCount: 3,
          lastUpdated: "5 hours ago"
        }
      ]
    }
  ];

  return (
    <div className="space-y-6 pb-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-semibold tracking-tight">Services</h1>
          <p className="text-muted-foreground">Manage and monitor your cloud services.</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Find service..."
              className="w-48 h-9 pl-9 pr-4 rounded-lg bg-secondary/80 border-0 focus:ring-1 focus:ring-primary/20 focus-visible:outline-none text-sm placeholder:text-muted-foreground"
            />
          </div>
          
          <button className="h-9 px-4 rounded-lg bg-primary text-primary-foreground flex items-center space-x-2 hover:bg-primary/90 transition-colors">
            <Plus className="h-4 w-4" />
            <span className="text-sm font-medium">Add Service</span>
          </button>
        </div>
      </div>
      
      {serviceGroups.map((group, index) => (
        <div key={group.name} className="space-y-4 animate-slide-up animate-once" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <group.icon className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-medium">{group.name}</h2>
              <span className="text-sm text-muted-foreground">({group.services.length})</span>
            </div>
            
            <button className="text-sm text-primary flex items-center hover:underline">
              View All
              <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {group.services.map((service) => (
              <ServiceCard 
                key={service.name}
                name={service.name}
                provider={service.provider as any}
                status={service.status as any}
                region={service.region}
                resourceCount={service.resourceCount}
                lastUpdated={service.lastUpdated}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
