
import React from "react";
import { Server, HardDrive, Cpu, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getAnimationClass } from "@/lib/motion";

const Resources = () => {
  // Mock data for resources
  const resources = [
    {
      id: 1,
      name: "Server Instances",
      icon: Server,
      allocation: 75,
      total: "24/32",
      status: "Healthy",
    },
    {
      id: 2,
      name: "Storage",
      icon: HardDrive,
      allocation: 65,
      total: "3.2/5 TB",
      status: "Warning",
    },
    {
      id: 3,
      name: "CPU Usage",
      icon: Cpu,
      allocation: 45,
      total: "45%",
      status: "Healthy",
    },
    {
      id: 4,
      name: "Database Clusters",
      icon: Database,
      allocation: 90,
      total: "9/10",
      status: "Critical",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Healthy":
        return "text-green-500";
      case "Warning":
        return "text-amber-500";
      case "Critical":
        return "text-red-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
        <p className="text-muted-foreground">
          Monitor and manage your cloud resources and infrastructure.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource, index) => (
          <Card 
            key={resource.id} 
            className={`border border-border/50 glass-card ${getAnimationClass('fade-in', index * 100)}`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {resource.name}
              </CardTitle>
              <resource.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{resource.total}</div>
              <p className={`text-xs ${getStatusColor(resource.status)}`}>
                {resource.status}
              </p>
              <Progress 
                value={resource.allocation} 
                className="h-1 mt-3" 
                indicatorClassName={
                  resource.status === "Critical" 
                    ? "bg-red-500" 
                    : resource.status === "Warning" 
                      ? "bg-amber-500" 
                      : undefined
                }
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border border-border/50 glass-card">
          <CardHeader>
            <CardTitle>Resource Allocation</CardTitle>
            <CardDescription>
              Current allocation across all resources
            </CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <div className="space-y-4">
              {resources.map((resource) => (
                <div key={`alloc-${resource.id}`} className="flex items-center">
                  <div className="w-[30%] text-sm">{resource.name}</div>
                  <div className="w-[60%]">
                    <Progress 
                      value={resource.allocation} 
                      className="h-2"
                      indicatorClassName={
                        resource.status === "Critical" 
                          ? "bg-red-500" 
                          : resource.status === "Warning" 
                            ? "bg-amber-500" 
                            : undefined
                      }
                    />
                  </div>
                  <div className="w-[10%] text-right text-sm">{resource.allocation}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/50 glass-card">
          <CardHeader>
            <CardTitle>Resource Management</CardTitle>
            <CardDescription>
              Quick actions for your resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button className="h-9 rounded-md px-3 border border-border bg-card text-sm hover:bg-secondary/80 transition-colors">
                  Scale Up
                </button>
                <button className="h-9 rounded-md px-3 border border-border bg-card text-sm hover:bg-secondary/80 transition-colors">
                  Scale Down
                </button>
                <button className="h-9 rounded-md px-3 border border-border bg-card text-sm hover:bg-secondary/80 transition-colors">
                  Optimize
                </button>
                <button className="h-9 rounded-md px-3 border border-border bg-card text-sm hover:bg-secondary/80 transition-colors">
                  Auto-scale
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;
