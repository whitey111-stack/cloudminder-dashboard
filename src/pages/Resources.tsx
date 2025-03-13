
import React from 'react';
import { BarChartBig, Database, Disc, HardDrive, MemoryStick, Ruler, Server } from 'lucide-react';
import { DashboardCard, DashboardCardHeader, DashboardCardContent } from '@/components/Dashboard/DashboardCard';
import { Progress } from '@/components/ui/progress';
import { ResourceMonitor } from '@/components/Dashboard/ResourceMonitor';

const Resources = () => {
  return (
    <div className="space-y-6 pb-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-display font-semibold tracking-tight">Resource Management</h1>
        <p className="text-muted-foreground">Monitor and manage your system resources.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <DashboardCard className="animate-slide-up animate-once">
          <DashboardCardHeader 
            title="CPU Usage" 
            subtitle="8-Core Intel Xeon E5"
            icon={<MemoryStick className="h-4 w-4 text-primary" />}
          />
          <DashboardCardContent>
            <ResourceMonitor 
              data={[
                { name: 'Core 1', value: 45 },
                { name: 'Core 2', value: 60 },
                { name: 'Core 3', value: 75 },
                { name: 'Core 4', value: 30 },
                { name: 'Core 5', value: 50 },
                { name: 'Core 6', value: 65 },
                { name: 'Core 7', value: 40 },
                { name: 'Core 8', value: 55 },
              ]}
            />
          </DashboardCardContent>
        </DashboardCard>
        
        <DashboardCard className="animate-slide-up animate-once animate-delay-100">
          <DashboardCardHeader 
            title="Memory Allocation" 
            subtitle="32GB DDR4 RAM"
            icon={<Ruler className="h-4 w-4 text-primary" />}
          />
          <DashboardCardContent>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <div>Used Memory</div>
                  <div className="text-muted-foreground">18.2GB / 32GB</div>
                </div>
                <Progress value={56} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <div>Virtual Memory</div>
                  <div className="text-muted-foreground">4.8GB / 8GB</div>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <div>Cache Memory</div>
                  <div className="text-muted-foreground">2.2GB / 4GB</div>
                </div>
                <Progress value={55} className="h-2" />
              </div>
            </div>
          </DashboardCardContent>
        </DashboardCard>
        
        <DashboardCard className="animate-slide-up animate-once animate-delay-200">
          <DashboardCardHeader 
            title="Storage Capacity" 
            subtitle="2TB SSD Storage"
            icon={<HardDrive className="h-4 w-4 text-primary" />}
          />
          <DashboardCardContent>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <div>System Storage (C:)</div>
                  <div className="text-muted-foreground">145GB / 500GB</div>
                </div>
                <Progress value={29} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <div>Data Storage (D:)</div>
                  <div className="text-muted-foreground">872GB / 1000GB</div>
                </div>
                <Progress value={87} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <div>Backup Storage (E:)</div>
                  <div className="text-muted-foreground">215GB / 500GB</div>
                </div>
                <Progress value={43} className="h-2" />
              </div>
            </div>
          </DashboardCardContent>
        </DashboardCard>
        
        <DashboardCard className="animate-slide-up animate-once animate-delay-300">
          <DashboardCardHeader 
            title="Network Activity" 
            subtitle="1Gbps Connection"
            icon={<BarChartBig className="h-4 w-4 text-primary" />}
          />
          <DashboardCardContent>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <div>Download</div>
                  <div className="text-muted-foreground">45.3 Mbps</div>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <div>Upload</div>
                  <div className="text-muted-foreground">12.7 Mbps</div>
                </div>
                <Progress value={13} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <div>Latency</div>
                  <div className="text-muted-foreground">24 ms</div>
                </div>
                <Progress value={24} className="h-2" />
              </div>
            </div>
          </DashboardCardContent>
        </DashboardCard>
        
        <DashboardCard className="animate-slide-up animate-once animate-delay-400">
          <DashboardCardHeader 
            title="Database Performance" 
            subtitle="PostgreSQL Database"
            icon={<Database className="h-4 w-4 text-primary" />}
          />
          <DashboardCardContent>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <div>Query Response Time</div>
                  <div className="text-muted-foreground">45 ms</div>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <div>Active Connections</div>
                  <div className="text-muted-foreground">65 / 100</div>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1.5 text-sm">
                  <div>Cache Hit Ratio</div>
                  <div className="text-muted-foreground">92%</div>
                </div>
                <Progress value={92} className="h-2" />
              </div>
            </div>
          </DashboardCardContent>
        </DashboardCard>
        
        <DashboardCard className="animate-slide-up animate-once animate-delay-500">
          <DashboardCardHeader 
            title="Server Status" 
            subtitle="4 Cloud Instances"
            icon={<Server className="h-4 w-4 text-primary" />}
          />
          <DashboardCardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-md border">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <div>
                    <p className="font-medium text-sm">Production Server</p>
                    <p className="text-xs text-muted-foreground">us-east-1</p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Uptime: 99.9%</div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-md border">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <div>
                    <p className="font-medium text-sm">Staging Server</p>
                    <p className="text-xs text-muted-foreground">us-west-2</p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Uptime: 99.7%</div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-md border">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <div>
                    <p className="font-medium text-sm">Development Server</p>
                    <p className="text-xs text-muted-foreground">eu-west-1</p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Uptime: 98.2%</div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-md border">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <div>
                    <p className="font-medium text-sm">Backup Server</p>
                    <p className="text-xs text-muted-foreground">ap-southeast-1</p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Uptime: 99.5%</div>
              </div>
            </div>
          </DashboardCardContent>
        </DashboardCard>
      </div>
    </div>
  );
};

export default Resources;
