"use client";

import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaClipboardList, FaMedkit, FaExchangeAlt, FaCar } from "react-icons/fa";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import { useNumberOfRequestsMutation } from "@/redux/features/gatepassRequest/gatepassRequestApi";
import { AlertCircle } from "lucide-react";

// Define the shape of the request data
interface RequestData {
  General: number;
  Medical: number;
  Returnable: number;
  Vehicle: number;
  [key: string]: number;
}

// Define the props for the DashboardCard component
interface DashboardCardProps {
  title: string;
  value: number;
  percentage: string;
  icon: React.ReactNode;
}

// Define the props for the DashboardSkeleton component (if needed, but here it's a functional component without props)
interface DashboardSkeletonProps {}

export default function DashboardPage() {
  const [
    getNumberOfRequests,
    { data: numberOfRequestData, isError, error, isLoading },
  ] = useNumberOfRequestsMutation();

  useEffect(() => {
    getNumberOfRequests({});
  }, [getNumberOfRequests]);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        <AlertCircle className="inline-block mr-2" />
        {error && "data" in error ? (error.data as string) : "Failed to fetch request data"}
      </div>
    );
  }

  if (!numberOfRequestData || !numberOfRequestData[0]) {
    return (
      <div className="max-w-md mx-auto mt-8">
        <p>No request data is currently available.</p>
      </div>
    );
  }

  const requestData: RequestData = numberOfRequestData[0];

  const totalRequests = Object.values(requestData).reduce(
    (sum, value) => sum + (typeof value === "number" ? value : 0),
    0
  );

  const chartData = Object.entries(requestData).map(([name, value]) => ({
    name,
    value: typeof value === "number" ? value : 0,
  }));

  const calculatePercentage = (value: number) => {
    return totalRequests ? ((value / totalRequests) * 100).toFixed(2) : "0.00";
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <DashboardCard
          title="General Requests"
          value={requestData.General ?? 0}
          percentage={calculatePercentage(requestData.General ?? 0)}
          icon={<FaClipboardList className="text-blue-500" />}
        />
        <DashboardCard
          title="Medical Requests"
          value={requestData.Medical ?? 0}
          percentage={calculatePercentage(requestData.Medical ?? 0)}
          icon={<FaMedkit className="text-red-500" />}
        />
        <DashboardCard
          title="Returnable Requests"
          value={requestData.Returnable ?? 0}
          percentage={calculatePercentage(requestData.Returnable ?? 0)}
          icon={<FaExchangeAlt className="text-green-500" />}
        />
        <DashboardCard
          title="Vehicle Requests"
          value={requestData.Vehicle ?? 0}
          percentage={calculatePercentage(requestData.Vehicle ?? 0)}
          icon={<FaCar className="text-yellow-500" />}
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Request Distribution</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, percentage, icon }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-gray-500">{percentage}%</div>
      </CardContent>
    </Card>
  );
};

const DashboardSkeleton: React.FC<DashboardSkeletonProps> = () => {
  return (
    <div className="container mx-auto p-4">
      <Skeleton className="h-9 w-64 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-[60px]" />
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[200px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    </div>
  );
};
