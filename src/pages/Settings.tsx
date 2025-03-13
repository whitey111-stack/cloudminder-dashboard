
import React from 'react';
import { Bell, Key, Lock, Shield, User } from 'lucide-react';
import { DashboardCard, DashboardCardHeader, DashboardCardContent } from '@/components/Dashboard/DashboardCard';
import { cn } from '@/lib/utils';

const Settings = () => {
  return (
    <div className="space-y-6 pb-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-display font-semibold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DashboardCard className="animate-slide-up animate-once">
            <DashboardCardHeader 
              title="Account Settings" 
              icon={<User className="h-4 w-4 text-primary" />}
            />
            <DashboardCardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">First Name</label>
                    <input 
                      type="text" 
                      className="w-full h-10 px-3 rounded-md border bg-card focus:ring-1 focus:ring-primary/20 focus-visible:outline-none"
                      defaultValue="John"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full h-10 px-3 rounded-md border bg-card focus:ring-1 focus:ring-primary/20 focus-visible:outline-none"
                      defaultValue="Smith"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full h-10 px-3 rounded-md border bg-card focus:ring-1 focus:ring-primary/20 focus-visible:outline-none"
                    defaultValue="john.smith@example.com"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Company</label>
                  <input 
                    type="text" 
                    className="w-full h-10 px-3 rounded-md border bg-card focus:ring-1 focus:ring-primary/20 focus-visible:outline-none"
                    defaultValue="Acme Inc."
                  />
                </div>
                
                <div className="pt-2">
                  <button className="h-10 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    Update Profile
                  </button>
                </div>
              </div>
            </DashboardCardContent>
          </DashboardCard>
          
          <DashboardCard className="animate-slide-up animate-once animate-delay-100">
            <DashboardCardHeader 
              title="Security Settings" 
              icon={<Shield className="h-4 w-4 text-primary" />}
            />
            <DashboardCardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Current Password</label>
                  <input 
                    type="password" 
                    className="w-full h-10 px-3 rounded-md border bg-card focus:ring-1 focus:ring-primary/20 focus-visible:outline-none"
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">New Password</label>
                    <input 
                      type="password" 
                      className="w-full h-10 px-3 rounded-md border bg-card focus:ring-1 focus:ring-primary/20 focus-visible:outline-none"
                      placeholder="••••••••"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Confirm New Password</label>
                    <input 
                      type="password" 
                      className="w-full h-10 px-3 rounded-md border bg-card focus:ring-1 focus:ring-primary/20 focus-visible:outline-none"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                
                <div className="pt-2">
                  <button className="h-10 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    Update Password
                  </button>
                </div>
              </div>
            </DashboardCardContent>
          </DashboardCard>
        </div>
        
        <div className="space-y-6">
          <DashboardCard className="animate-slide-up animate-once animate-delay-200">
            <DashboardCardHeader 
              title="API Keys" 
              icon={<Key className="h-4 w-4 text-primary" />}
            />
            <DashboardCardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <p className="text-sm font-medium">Primary Key</p>
                    <p className="text-xs text-muted-foreground">Created on Jun 12, 2023</p>
                  </div>
                  <button className="text-xs text-primary hover:underline">Show</button>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <p className="text-sm font-medium">Secondary Key</p>
                    <p className="text-xs text-muted-foreground">Created on Aug 24, 2023</p>
                  </div>
                  <button className="text-xs text-primary hover:underline">Show</button>
                </div>
                
                <div className="pt-2">
                  <button className="w-full h-9 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors text-sm">
                    Generate New Key
                  </button>
                </div>
              </div>
            </DashboardCardContent>
          </DashboardCard>
          
          <DashboardCard className="animate-slide-up animate-once animate-delay-300">
            <DashboardCardHeader 
              title="Notification Settings" 
              icon={<Bell className="h-4 w-4 text-primary" />}
            />
            <DashboardCardContent>
              <div className="space-y-3">
                {[
                  { id: "email", label: "Email Notifications", checked: true },
                  { id: "system", label: "System Alerts", checked: true },
                  { id: "security", label: "Security Alerts", checked: true },
                  { id: "updates", label: "Product Updates", checked: false }
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <label htmlFor={item.id} className="text-sm">{item.label}</label>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-input data-[state=checked]:bg-primary">
                      <input
                        type="checkbox"
                        id={item.id}
                        defaultChecked={item.checked}
                        className="peer h-0 w-0 opacity-0"
                      />
                      <span className={cn(
                        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5",
                        item.checked ? "translate-x-5" : "translate-x-0.5"
                      )} />
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCardContent>
          </DashboardCard>
          
          <DashboardCard className="animate-slide-up animate-once animate-delay-400">
            <DashboardCardHeader 
              title="Two-Factor Authentication" 
              icon={<Lock className="h-4 w-4 text-primary" />}
            />
            <DashboardCardContent>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-medium">Two-Factor Auth</p>
                  <p className="text-xs text-muted-foreground">Enhance your account security</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-primary">
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    className="peer h-0 w-0 opacity-0"
                  />
                  <span className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform translate-x-5" />
                </div>
              </div>
              
              <button className="w-full h-9 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors text-sm">
                Configure 2FA
              </button>
            </DashboardCardContent>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default Settings;
