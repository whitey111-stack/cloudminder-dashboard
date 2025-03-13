
import React from 'react';
import { Cloud, Server, MoreVertical, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Status, StatusType } from './StatusCard';

export type ServiceProvider = 'aws' | 'gcp' | 'azure' | 'kubernetes' | 'docker';

interface ServiceCardProps {
  className?: string;
  name: string;
  provider: ServiceProvider;
  status: StatusType;
  region?: string;
  resourceCount?: number;
  lastUpdated?: string;
}

export function ServiceCard({
  className,
  name,
  provider,
  status,
  region,
  resourceCount,
  lastUpdated,
}: ServiceCardProps) {
  const providerConfig = {
    aws: {
      icon: Cloud,
      label: 'AWS',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
    },
    gcp: {
      icon: Cloud,
      label: 'GCP',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    azure: {
      icon: Cloud,
      label: 'Azure',
      color: 'text-blue-700',
      bgColor: 'bg-blue-100',
    },
    kubernetes: {
      icon: Server,
      label: 'K8s',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    docker: {
      icon: Server,
      label: 'Docker',
      color: 'text-blue-400',
      bgColor: 'bg-blue-100',
    },
  };

  const { icon: ProviderIcon, label, color, bgColor } = providerConfig[provider];

  return (
    <div className={cn(
      "rounded-lg border bg-card p-4 shadow-sm transition-all duration-200 hover:shadow-md glass-card",
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className={cn(
            "h-10 w-10 rounded-lg flex items-center justify-center",
            bgColor
          )}>
            <ProviderIcon className={cn("h-5 w-5", color)} />
          </div>
          
          <div>
            <h3 className="font-medium">{name}</h3>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <span className={cn("text-xs", color)}>{label}</span>
              {region && (
                <>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{region}</span>
                </>
              )}
            </div>
          </div>
        </div>
        
        <button className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
          <MoreVertical className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
      
      <div className="mt-3 pt-3 border-t flex items-center justify-between">
        <Status status={status} showText />
        
        <div className="flex items-center space-x-3">
          {resourceCount !== undefined && (
            <div className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{resourceCount}</span> resources
            </div>
          )}
          
          <button className="h-7 w-7 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        </div>
      </div>
      
      {lastUpdated && (
        <div className="mt-2 text-xs text-muted-foreground">
          Updated {lastUpdated}
        </div>
      )}
    </div>
  );
}
