
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface MetricPoint {
  time: string;
  value: number;
}

interface MetricsChartProps {
  className?: string;
  data: MetricPoint[];
  height?: number;
  gradient?: {
    from: string;
    to: string;
  };
  stroke?: string;
  areaFill?: string;
  minValue?: number;
  maxValue?: number;
  showGrid?: boolean;
  showAxis?: boolean;
  showTooltip?: boolean;
}

export function MetricsChart({
  className,
  data,
  height = 100,
  gradient = {
    from: '#3a86ff',
    to: '#3a86ff20',
  },
  stroke = '#3a86ff',
  areaFill = 'url(#colorGradient)',
  minValue,
  maxValue,
  showGrid = false,
  showAxis = false,
  showTooltip = true,
}: MetricsChartProps) {
  // Generate a unique ID for the gradient
  const gradientId = React.useId();
  const colorGradient = `colorGradient-${gradientId}`;
  
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id={colorGradient} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={gradient.from} stopOpacity={0.8} />
              <stop offset="100%" stopColor={gradient.to} stopOpacity={0} />
            </linearGradient>
          </defs>
          
          {showGrid && (
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#f0f0f0" 
            />
          )}
          
          {showAxis && (
            <>
              <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10 }} 
              />
              <YAxis 
                domain={[minValue || 'auto', maxValue || 'auto']} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10 }} 
              />
            </>
          )}
          
          {showTooltip && (
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-background border p-2 rounded-md shadow-sm text-xs">
                      <p className="font-medium">{`${payload[0].payload.time}`}</p>
                      <p className="text-primary">{`Value: ${payload[0].value}`}</p>
                    </div>
                  );
                }
                return null;
              }} 
            />
          )}
          
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke={stroke} 
            fill={areaFill.includes('url') ? `url(#${colorGradient})` : areaFill} 
            strokeWidth={2}
            activeDot={{ r: 4, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
