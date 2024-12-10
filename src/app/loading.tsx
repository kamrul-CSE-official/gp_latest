import Spinner from "@/components/ui/Spinner";
import React from "react";

const GlobalLoading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <Spinner className="w-12 h-12 text-blue-500" />
        <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default GlobalLoading;
